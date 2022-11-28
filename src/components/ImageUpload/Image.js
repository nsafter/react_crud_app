import "./Image.css";
import $ from "jquery";
import "animate.css";

const Image = () => {
  const fileUploadLimit = 2048576;
  const localStorageKey = "images";
  let imageData = [];

  function renderImage(imageObj, $imageCollection) {
    if (imageObj.file_base64.length) {
      $imageCollection.append(
        $imageCollection.append(
          '<li class="card animate__animated animate__fadeIn"><img src="data:image/png;base64,' +
            imageObj.file_base64 +
            '" class="card-img" /><br /><a href="#" data-timestamp="' +
            imageObj.timestamp +
            '" class="btn-delete"><img src="delete.png" /></a></li>'
        )
      );
    }
  }

  function addImage(imageObj) {
    imageData.push(imageObj);
    localStorage.setItem(localStorageKey, JSON.stringify(imageData));
  }

  // Remove image from local storage by timestamp.
  function removeImage(timestamp) {
    // Remove item by the timestamp.
    imageData = imageData.filter((img) => img.timestamp !== timestamp);

    // Update local storage.
    localStorage.setItem(localStorageKey, JSON.stringify(imageData));
  }

  // Read image data stored in local storage.
  function getImages($imageCollection) {
    const localStorageData = localStorage.getItem(localStorageKey);

    if (localStorageData !== null) {
      imageData = JSON.parse(localStorage.getItem(localStorageKey));

      for (let i = 0; i < imageData.length; i++) {
        renderImage(imageData[i], $imageCollection);
      }
    }
  }

  // Delete button action to fire off deletion.
  function deleteImageAction() {
    $(".btn-delete").on("click", function (e) {
      e.preventDefault();

      removeImage($(this).data("timestamp"));

      // Remove the HTML markup for this image.
      $(this).parent().remove();
    });
  }

  // Upload action to fire off file upload automatically.
  function uploadChangeAction($upload, $imageCollection) {
    $upload.on("change", function (e) {
      e.preventDefault();

      // Ensure validation message is removed (if one is present).
      $upload.next("p").remove();

      const file = e.target.files[0];

      if (file.size <= fileUploadLimit) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");

          // Create an object containing image information.
          let imageObj = {
            name: "image-" + ($imageCollection.find("li").length + 1),
            timestamp: Date.now(),
            file_base64: base64String.toString(),
          };

          // Add To Local storage
          renderImage(imageObj, $imageCollection);
          addImage(imageObj);

          deleteImageAction();

          // Clear upload element.
          $upload.val("");
        };

        reader.readAsDataURL(file);
      } else {
        $upload.after("<p>File too large</p>");
      }
    });
  }

  // Initialise.
  function displayImages() {
    getImages($("#image-collection"));

    // Set action events.
    uploadChangeAction($("#image-upload"), $("#image-collection"));
    deleteImageAction();
  }

  return (
    <>
      <div className="main-img-container">
        <center>
          <p className="intro-head animate__animated animate__fadeInUp">
            Your one stop for all your images
          </p>
          <input
            id="image-upload"
            className="animate__animated animate__fadeInUp"
            type="file"
          />
          <button
            className="res-btn animate__animated animate__fadeInUp"
            onClick={displayImages}
          >
            View Gallery
          </button>
        </center>
        <center>
          <div
            id="image-collection"
            className="animate__animated animate__fadeIn"
          ></div>
        </center>
      </div>
    </>
  );
};
export default Image;

import img3 from "./img3.jpg";
import main1 from "./main1.jpeg";
import main2 from "./main2.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-img-container">
        <div>
          <img
            className="main-img animate__animated animate__fadeInLeft animate__slow"
            src={main1}
            alt="noimg"
          />
        </div>
        <div className="info-div">
          <img
            src={main2}
            alt="noimg"
            className="animate__animated animate__fadeInRight animate__slow"
          />
        </div>
      </div>
      <div className="home-container">
        <center>
          <p className="home-container-heading">
            WITH OUR THOUGHTS WE MAKE THE WORLD
          </p>
          <p className="home-container-data">
            The practice of good inventory management
            <br />
            can identify trends, and
            <br />
            guarantee your business will have the right stock in
            <br />
            the right place at the right time
          </p>
          <button className="home-container-btn">Learn More</button>
        </center>
      </div>
      <div className="flex-box-container">
        <div className="flex-item">
          <div className="image-box">
            <img src={img3} alt="noimg" className="flex-item-image" />
          </div>
          <div className="inner-div">
            <center>
              Sooner or later, those who win are those
              <br />
              who think they can
            </center>
          </div>
        </div>
        <div className="flex-item ">
          <div className="image-box">
            <img src={img3} alt="noimg" className="flex-item-image" />
          </div>
          <div className="inner-div">
            <center>
              Inventory is money
              <br />
              sitting around in
              <br />
              another form
            </center>
          </div>
        </div>
        <div className="flex-item ">
          <div className="image-box">
            <img src={img3} alt="noimg" className="flex-item-image" />
          </div>
          <div className="inner-div">
            <center>
              There's nothing like rejection to make you do
              <br />
              an inventory of yourself
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

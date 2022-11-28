import "./About.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import tick from "./tick.png";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="cont-inner-div">
          <center className="animate__animated animate__fadeInUp animate__slow">
            About Us
          </center>
        </div>
      </div>

      <div className="about-second-container">
        <div className="about-innerdiv">
          <img
            src={img1}
            className="img1 animate__animated animate__fadeInLeft animate__slow"
            alt="noimg"
          />
          <p className="about-info-div animate__animated animate__fadeInLeft animate__slow">
            <h5 className="about-div-title">ORDER MANAGEMENT</h5>
            Handle all your sales and purchases activities, manage invoices and
            bills, and track payments. MyWorld Inventory also helps you monitor
            packages and shipments to keep your deliveries on time.
            <ul>
              <li>
                <img src={tick} alt="noimg" />
                Centralized multi-channel sales
              </li>
              <li>
                <img src={tick} alt="noimg" />
                Simplified packing and shipping
              </li>
              <li>
                <img src={tick} alt="noimg" />
                Track Shipments
              </li>
            </ul>
          </p>
        </div>
        <hr />
        <div className="about-innerdiv">
          <p className="about-info-div1 animate__animated animate__fadeInRight animate__slower">
            <h5 className="about-div-title">WAREHOUSE MANAGEMENT</h5>
            You can control your stock in different warehouses or godowns
            centrally from MyWorld Inventory. Track item movements, transfer
            items within warehouses, and generate warehouse-specific reports.
            <ul>
              <li>
                <img src={tick} alt="noimg" />
                Spread out your stock
              </li>
              <li>
                <img src={tick} alt="noimg" />
                Minimize your risks
              </li>
              <li>
                <img src={tick} alt="noimg" />
                Consolidate your stock
              </li>
            </ul>
          </p>
          <img
            src={img2}
            className="img2 animate__animated animate__fadeInRight animate__slower"
            alt="noimg"
          />
        </div>
        <hr />
        <div className="about-innerdiv">
          <img
            src={img3}
            className="img1 animate__animated animate__fadeInLeft animate__slower"
            alt="noimg"
          />
          <p className="about-info-div animate__animated animate__fadeInLeft animate__slower">
            <h5 className="about-div-title">INVENTORY TRACKING</h5>
            You can keep track of spare parts, saleable items, and even expiry
            dates with the serial and batch tracking feature of MyWorld
            Inventory.
            <ul>
              <li>
                <img src={tick} alt="noimg" />
                Track every item
              </li>
              <li>
                <img src={tick} alt="noimg" />
                Trace products to their source
              </li>
              <li>
                <img src={tick} alt="noimg" />
                Get instant product stats
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

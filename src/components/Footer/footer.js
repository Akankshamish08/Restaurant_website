import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="heading1"> Download our Restaurant app </h1>
      <p className="para1"> Any time , Any where. </p>
      <div className="content">
        <div className="playstore">
          <div>
            <img
              className="img1"
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
            />
          </div>
          <div>
            <p className="label">Download on </p>
            <p className="label"> Google Play Store </p>
          </div>
        </div>
        <div className="apple">
          <div>
            <img
              className="img2"
              src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
            />
          </div>
          <div>
            <p className="label">Download on </p>
            <p className="label"> Apple Store </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

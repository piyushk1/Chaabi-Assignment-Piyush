import React from "react";
import styles from "./Sidebar.module.css";
import logo from "./logo.png";
import game from "./Game.png";
import ticketStar from "./TicketStar.png";
import Location from "./Location.png";
export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="separator"></div>
      <div className="options-container">
        <div className="menu-list">
          <div className="training">
            <img src={game} alt="Training Icon" />
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "19px",
                fontWeight: 400,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left"
              }}
            >
              Training
            </span>
          </div>
          <div className="users">
            <img src={ticketStar} alt="Users Icon" />
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "19px",
                fontWeight: 400,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left"
              }}
            >
              Users
            </span>
          </div>
          <div className="analytics">
            <img src={Location} alt="Analytics Icon" />
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "19px",
                fontWeight: 400,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left"
              }}
            >
              Analytics
            </span>
          </div>
          <div className="my-account">
            <img src={Location} alt="My Account Icon" />
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "19px",
                fontWeight: 400,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
                background: "rgba(13, 98, 255, 1)"
              }}
            >
              My Account
            </span>
          </div>
          <div className="support">
            <img src={Location} alt="Support Icon" />
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "19px",
                fontWeight: 400,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left"
              }}
            >
              Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

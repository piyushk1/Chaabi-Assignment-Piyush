import React from "react";
import styles from "./Sidebar.module.css";
import logo from "./logo.png";
import category from "./Category.png";
import Location from "./Location.png";
import ticketStar from "./TicketStar.png";
import game from "./Game.png";

export default function Sidebar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <div className={styles.separator}></div>
      </div>

      <div className={styles.dashboard}>
        <img src={category} alt="Category Icon" className={styles.categoryIcon} />
        <span>Dashboard</span>
      </div>

      <div className={styles.menuList}>
        <MenuItem label="Trainings" icon={game} />
        <MenuItem label="Users" icon={ticketStar} />
        <MenuItem label="Analytics" icon={Location} />
        <MenuItem label="My Account" icon={Location} />
        <MenuItem label="Support" icon={Location} />
      </div>
    </div>
  );
}

function MenuItem({ label, icon }) {
  return (
    <div className={styles.menuItem}>
      <img src={icon} alt="Menu Icon" className={styles.menuIcon} />
      <span>{label}</span>
    </div>
  );
}

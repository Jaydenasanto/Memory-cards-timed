import React, { useState } from "react";
import classNames from "classnames";
import AdbIcon from "@mui/icons-material/Adb";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AppleIcon from "@mui/icons-material/Apple";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

function Card({ icon, hidden, onClick }) {
  const hideClass = hidden ? "hide-card" : "";

  return (
    <div className={`container card ${hideClass}`} onClick={onClick}>
      <div className="inner-card">
        {icon === "adb" && <AdbIcon />}
        {icon === "acunit" && <AcUnitIcon />}
        {icon === "accessibleforward" && <AccessibleForwardIcon />}
        {icon === "apple" && <AppleIcon />}
        {icon === "directionsbike" && <DirectionsBikeIcon />}
        {icon === "beachaccess" && <BeachAccessIcon />}
      </div>
    </div>
  );
}

export default Card;

// setTimeout(() => {

// }, 3000)

import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import Ionicon from "../../../img/log-out.svg";



export const LogoutButton = (props) => {

  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicon}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : "black"}
    
    />
  );
};

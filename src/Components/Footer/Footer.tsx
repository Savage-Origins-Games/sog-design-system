import React from "react";
import "../../Css/main.css";
export interface Props {}
export const Footer = (props: Props) => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="sog-footer">
      <p>&copy; {getCurrentYear()} Jason Lavarinhas. All rights reserved.</p>
    </div>
  );
};

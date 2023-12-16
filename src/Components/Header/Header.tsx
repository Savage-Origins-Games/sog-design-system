import React, { ReactNode } from "react";
import "../../Css/main.css";
export interface Props {
  text: string;
  description: string;
  icon?: ReactNode;
}
export const Header = (props: Props) => {
  return (
    <div className="sog-header" role="banner">
      <div className="sog-header__top">
        <div className="sog-container">
          <div className="sog-header__grid-top sog-grid sog-grid--gutterless sog-grid--flex sog-grid--between sog-grid--vertical-center sog-grid--no-wrap">
            <div className="sog-grid__col sog-col-auto">
              {props.icon}
              {props.text}
            </div>
          </div>
        </div>
      </div>
      <div className="sog-header__main">
        <div className="sog-container">
          <div className="sog-grid sog-grid--gutterless sog-grid--flex sog-grid--between sog-grid--vertical-center sog-grid--no-wrap">
            <div className="sog-grid__col sog-col-auto sog-u-flex-shrink">
              <div className="sog-header__title">{props.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

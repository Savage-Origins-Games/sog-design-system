import React from "react";
import "../Css/main.css";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { AccountIcon } from "../Graphics";
export interface Props {
  children: React.ReactElement;
}
export const BaseLayout = (props: Props) => {
  return (
    <React.Fragment>
      <Header
        text="Welcome Jason"
        description="Savage Origins Games"
        icon={AccountIcon}
      />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};
{
  /* <div className="col-3 right">
          <div className="aside">
            <h2>What?</h2>
            <p>Chania is a city on the island of Crete.</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div> */
}

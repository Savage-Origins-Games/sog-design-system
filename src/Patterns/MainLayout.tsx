import React, { useEffect, useState } from "react";

const gameTitle: string = "Viverra";

const ScrollButton = (isVisible: boolean) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button className="back-to-top-button" onClick={scrollToTop}>
        Back to Top
      </button>
    )
  );
};

const LeftMenu = () => {
  return (
    <div className="col-3 menu">
      <ul id="#leftMenu">
        <ul id="#leftMenu">
          <li>
            <a href="#keyfeatures">Key Features</a>
          </li>
          <li>
            <a href="#monetization">Monetization Strategy</a>
          </li>
          <li>
            <a href="#feedback">User Feedback and Ratings</a>
          </li>

          <li>
            <a href="#roadmap">Future Roadmap and Updates</a>
          </li>
          <li>
            <a href="#conclusion">Conclusion</a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

const RightMenu = () => {
  return (
    <div className="col-3 right">
      <div className="aside">
        <h2>What?</h2>
        <p>Chania is a city on the island of Crete.</p>
        <h2>Where?</h2>
        <p>Crete is a Greek island in the Mediterranean Sea.</p>
        <h2>How?</h2>
        <p>You can reach Chania airport from all over Europe.</p>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="col-6">
      <h1> {gameTitle}</h1>
      <p>
        <h4>Introduction: </h4>
        <p>
          Welcome to {gameTitle}, an immersive gaming experience designed to
          captivate players of all ages and interests.
        </p>
        <h4 id="keyfeatures">Key Features:</h4>
        <ul>
          <li>
            Engaging Gameplay: Dive into a world filled with [unique game
            mechanics/immersive storytelling/etc.] that keeps players hooked for
            hours.
          </li>

          <li>
            Stunning Visuals: Experience breathtaking graphics and visually
            appealing elements that bring the game world to life.
          </li>

          <li>
            Rich Storyline: Immerse yourself in a captivating narrative that
            unfolds as you progress through the game.
          </li>

          <li>
            Dynamic Multiplayer: Engage with friends or other players worldwide
            in thrilling multiplayer modes.
          </li>

          <li>
            Innovative Mechanics: Enjoy [unique game features/mechanics] that
            set {gameTitle} apart from the rest.
          </li>
        </ul>
        <h4 id="feedback">User Feedback:</h4>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. - TBA
          </li>
        </ul>
        <h4 id="monetization"> Monetization</h4>
        <ul>
          <li>
            Strategy: In-App Purchases: Explore a variety of enticing in-app
            purchase options for enhanced gameplay experiences.
          </li>

          <li>
            Ad Integration: Seamlessly integrated ads that maintain gameplay
            flow while offering revenue potential.
          </li>
        </ul>
        <h4 id="roadmap">Future Roadmap:</h4>
        <ul>
          <li>
            Upcoming Updates: Stay tuned for exciting new features, expansions,
            and updates.
          </li>
          <li>
            Enhancements: Continuously improving the game based on user feedback
            and emerging trends.
          </li>
        </ul>
        <h4 id="conclusion">Conclusion:</h4>
        {gameTitle}promises an exhilarating gaming journey with endless
        possibilities. Join us in exploring this thrilling universe!
      </p>
    </div>
  );
};

export const MainLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sog-container">
      <div className="row">
        <LeftMenu />
        <Content />
        <RightMenu />
      </div>
      {isVisible && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </div>
  );
};

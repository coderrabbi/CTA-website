import React from "react";
import Feature from "../../components/Feature/Feature";
import "./Features.css";

const Features = () => {
  const FeatureData = [
    {
      title: "Improving end distrusts instantly ",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Improving end distrusts instantly ",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Improving end distrusts instantly ",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
  ];

  return (
    <div>
      <div className="gpt3__features section__padding">
        <div className="gpt3__features__heading ">
          <h1 className="gradient__text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container">
          {FeatureData.map((item, index) => (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

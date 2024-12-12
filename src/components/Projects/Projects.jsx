import "./Projects.css";
import NewsExplorer from "../NewsExplorer/NewsExplorer";
import WhatToWear from "../WhatToWear/WhatToWear";
import AroundTheUs from "../AroundTheUs/AroundTheUs";
import TriplePeaksLibrary from "../TriplePeaksLibrary/TriplePeaksLibrary";
import CoffeeShop from "../CoffeeShop/CoffeeShop";

function Projects() {
  return (
    <section className="projects">
      <div className="projects__container">
        <NewsExplorer />
        <WhatToWear />
        <AroundTheUs />
        <TriplePeaksLibrary />
        <CoffeeShop />
      </div>
    </section>
  );
}

export default Projects;


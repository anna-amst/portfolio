import wtwr from "../../assets/wtwr.jpg";

function WhatToWear() {
    return(
        <>
        <div className="project">
          <h2 className="project__title">WTWR (What To Wear)</h2>
          <p className="project__tools">{"{ full-stack } "}</p>
          <div className="project__overlay-container">
            <img
              className="project__image"
              alt="Screenshot of What To Wear project"
              src={wtwr}
            />
            <div className="project__overlay">
              <a
                href="https://github.com/anna-amst/se_project_react"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button--github"
              >
                <button className="project__button">code on github </button>
              </a>
              <a
                href="https://wtwr.spacetechnology.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button--demo"
              >
                <button className="project__button">live-demo </button>
              </a>
            </div>
          </div>
        </div>
        </>
    )
}

export default WhatToWear;
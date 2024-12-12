import aroundTheUs from "../../assets/aroundtheus.jpg";

function AroundTheUs() {
    return(
        <>
       <div className="project">
          <h2 className="project__title">Around the U.S.</h2>
          <p className="project__tools">{"{ html/css/java script } "}</p>
          <div className="project__overlay-container">
            <img
              className="project__image"
              alt="Screenshot of Around the U.S. project"
              src={aroundTheUs}
            />
            <div className="project__overlay">
              <a
                href="https://github.com/anna-amst/se_project_aroundtheus"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button--github"
              >
                {" "}
                <button className="project__button">code on github </button>
              </a>
              <a
                href="https://anna-amst.github.io/se_project_aroundtheus/"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button--demo"
              >
                {" "}
                <button className="project__button">live-demo </button>
              </a>
            </div>
          </div>
        </div>
        </>
    )
}

export default AroundTheUs;
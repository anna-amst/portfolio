import newsExplorer from "../../assets/news-explorer.jpg";

function NewsExplorer() {
    return(
        <>
        <div className="project">
          <h2 className="project__title">News Explorer</h2>
          <p className="project__tools">{"{ front-end/back-end in progress } "}</p>
          <div className="project__overlay-container">
            <img
              className="project__image"
              alt="Screenshot of News Explorer project"
              src={newsExplorer}
            />
            <div className="project__overlay">
              <a
                href="https://github.com/anna-amst/news-explorer-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button--github"
              >
                <button className="project__button">code on github </button>
              </a>
              <a
                href="https://anna-amst.github.io/news-explorer-frontend/"
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

export default NewsExplorer;
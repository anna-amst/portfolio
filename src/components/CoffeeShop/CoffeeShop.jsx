import coffee from "../../assets/coffee.jpg";

function CoffeeShop() {
    return(
        <>
        <div className="project">
          <h2 className="project__title">Triple Peaks coffee shop</h2>
          <p className="project__tools">{"{ html/css } "}</p>
          <div className="project__overlay-container">
            <img
              className="project__image"
              alt="Screenshot of Triple Peaks Coffee Shop project"
              src={coffee}
            />
            <div className="project__overlay">
              <a
                href="https://github.com/anna-amst/se_project_coffeeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="project__button--github"
              >
                <button className="project__button">code on github </button>
              </a>
              <a
                href="https://anna-amst.github.io/se_project_coffeeshop/"
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

export default CoffeeShop;
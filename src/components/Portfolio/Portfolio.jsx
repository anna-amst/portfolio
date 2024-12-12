import "./Portfolio.css";

function Portfolio() {
    return(
        <section className="portfolio" id="portfolio">
            <div className="portfolio__container">
            <h2 className="portfolio__title">PROJECTS</h2>
            <a href="https://github.com/anna-amst" className="portfolio__button--github" target="_blank" rel="noopener noreferrer">
            <button className="portfolio__button">github portfolio</button></a>
            <a href="https://www.behance.net/anna_amst" className="portfolio__button--behance" target="_blank" rel="noopener noreferrer">
            <button className="portfolio__button">design portfolio</button></a>
            </div>
        </section>
    )
}

export default Portfolio;
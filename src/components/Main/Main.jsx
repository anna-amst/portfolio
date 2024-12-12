import "./Main.css"
import image from "../../assets/myphoto.jpg";

function Main() {
    return(
        <main className="main">
            <div className="main__headings">
            <h1 className="main__title main__title--primary">A FRONT END DEVELOPER/</h1>
            <h2 className="main__title main__title--secondary">DESIGNER</h2>
            <p className="main__location">{'{ BASED IN BOSTON, MA}' }</p>
            </div>
            <div className="main__content">
                <p className="main__description">{'{ javascript, react, node }' }</p>
                <div className="main__paragraph-container">
                <p className="main__paragraph main__paragraph--first">a software developer & designer who skillfully blends functionality with
                creativity to craft captivating and engaging digital experiences</p>
                <p className="main__paragraph main__paragraph--second">I specialize in creating websites that seamlessly combine aesthetic
                appeal and practicality</p>
                <p className="main__paragraph main__paragraph--third">with meticulous attention to detail and a passion for user-centric
                design, I bring visions to life</p>
                </div>
                <img className="main__image" alt="a photo of me" src={image} />
            </div>
        </main>
    )
}

export default Main;
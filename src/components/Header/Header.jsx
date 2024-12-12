import "./Header.css";

function Header(){
    return(
        <header className="header">
            <p className="header__element">
            {'{ Anna Vasileva }'}
            </p>
            <p className="header__element header__element-extra">{'{ software development }'}</p>
            <p className="header__element"><a href="#portfolio">{'{ portfolio }'}</a></p>
        </header>
    )

}

export default Header;
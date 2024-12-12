import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear(); 
  
    return (
      <footer className="footer">
        <p className="footer__copyright">Copyright {currentYear} - Anna Vasileva</p>
      </footer>
    );
  }
  
  export default Footer;
const Footer = () => {
    return (
      <div className="footer">
          <cite>{author}</cite>
      </div>
    );
  }

Footer.defaultProps = {
    author: 'Corner gang'
}
  
  export default Footer;
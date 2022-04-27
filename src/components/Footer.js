const Footer = ({author}) => {
    return (
      <div className="footer">
          <cite>created by: {author}</cite>
      </div>
    );
  }

Footer.defaultProps = {
    author: 'corner gang'
}
  
  export default Footer;
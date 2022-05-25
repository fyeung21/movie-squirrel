const Footer = ({author}) => {
    return (
      <div className="footer">
          <cite>&copy; 2022 developed by {author}</cite>
      </div>
    );
  }

Footer.defaultProps = {
    author: 'Aleum K., Erin D., and Fiona Y.'
}
  
export default Footer;
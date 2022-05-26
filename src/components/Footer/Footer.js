const Footer = ({ author }) => {
  return (
    <footer>
      <cite>&copy; 2022 developed by {author}</cite>
    </footer>
  );
};

Footer.defaultProps = {
  author: 'Aleum K., Erin D., and Fiona Y.',
};

export default Footer;
import propTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {

 const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header
      style={headerStyle}
    >
      <div className="container">
        <h3> {text} </h3>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "default feedback UI header",
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: "#ff6a95"
};

Header.propTypes = {
    text: propTypes.string,
    bgColor: propTypes.string,
    textColor: propTypes.string
}

export default Header;

import PropTypes from 'prop-types'

const Button = ({children, type, version, isDisabled}) => {
    return (
        <button type= {type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    children: "Submit",
    isDisabled: false,
    version: 'primary',
    type: 'submit',
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    version: PropTypes.string,
    type: PropTypes.string,
}

export default Button;
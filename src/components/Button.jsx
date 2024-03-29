import PropTypes from 'prop-types';

function Button({text, color, onClick}) {
  return (
    <button style = {{ backgroundColor:color}} className='btn' onClick={onClick} >{text}</button>
  )
}

Button.PropTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
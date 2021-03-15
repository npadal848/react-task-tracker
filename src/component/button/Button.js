
const Button = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} className='btn' style={{background: color}}>
            {text}
        </button>
    )
}

Button.defaultProps={
    color: 'red',
    text: 'Send'
}

export default Button
function CustomButton({text, color, disabled }) {

    const myStyle = {
        backgroundColor: color
    }

    const buttonDisabled = disabled ? 'disabled' : '';

    return (
        <button style={myStyle} disabled={buttonDisabled}>{text}</button>
    );

}

export default CustomButton;
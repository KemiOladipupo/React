function Text({content, color, size}) {
    const myStyle = {
        color: color,
        fontSize: size,
    }

    return <p style={myStyle}>{content}</p>
}

export default Text;
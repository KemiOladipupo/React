// Pascal Casing e.g function MyMessage()
// Camel Casing  e.g function myMessage()

function Message({name = "Guest", age = 0}) {
    return <h2> Hello {name}!, I am {age} years old</h2>
}

export default Message;
const Notification = ({ notificationType, notificationMessage }) => {
    const notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }    
    const errorStyle = {
        color: 'red',
        background: 'lightpink',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    let style = notificationStyle
    if (notificationType === 'error') {
        style = errorStyle
    } 
    
    if (notificationMessage === null) {
        return null
    }
    return (
        <div style={style}>
            {notificationMessage}
        </div>
    )
}

export default Notification
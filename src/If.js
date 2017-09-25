export default props => {
    console.log('aaa',props.test)
    if (props.test) {
        return props.children
    } else {
        return false
    }
}
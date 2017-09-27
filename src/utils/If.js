export default props => {
    console.log('ifff', props.test)
    if (props.test) {
        console.log('passeo aqui 111')
        return props.children
    } else {
        console.log('passeo aqui ')
        return false
    }
}
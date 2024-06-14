function Button(props) {
    return(
        <button className={props.btnClass} data={props.btnText}>{props.btnText}</button>
    )
    
}
export default Button
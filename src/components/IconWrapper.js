function IconWrapper(props) {
    const { text, icon } = props.framework;
    const svgUrl = `https://www.vectorlogo.zone/logos/${icon}/${icon}-icon.svg`
    return (
      <div className='icon-wrapper'>
        <img className='svg-icon' src={svgUrl} alt={text}/>
        <div>{text}</div>
      </div>
    )
}

export default IconWrapper;
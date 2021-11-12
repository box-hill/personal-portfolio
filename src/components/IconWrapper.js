function IconWrapper(props) {
    const { text, icon } = props.framework;
    const svgUrl = icon
    return (
      <div className='icon-wrapper'>
        <img className='svg-icon' src={svgUrl} alt={text}/>
        <div className='icon-text'>{text}</div>
      </div>
    )
}

export default IconWrapper;
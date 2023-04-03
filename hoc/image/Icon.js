const Icon = ({src, size="1.5rem"}) => {
    // https://codepen.io/sosuke/pen/Pjoqqp
    const icons =  {
        filter: "invert(19%) sepia(14%) saturate(5649%) hue-rotate(220deg) brightness(90%) contrast(90%)",
        height : size,
        width : size,
    }
  return (<img src={src} alt="icon" className="icons" style={icons}/>)
   
}

export default Icon
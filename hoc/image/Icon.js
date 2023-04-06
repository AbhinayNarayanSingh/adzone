import { useState } from "react"

const Icon = ({src, size="1.5rem", alt="icons"}) => {
    // https://codepen.io/sosuke/pen/Pjoqqp
    const [isHoverd, setIsHoverd] = useState(false)
    
    const default_wxh = { height : size, width : size, }
    const icons =  { ...default_wxh, filter: "invert(19%) sepia(14%) saturate(5649%) hue-rotate(220deg) brightness(90%) contrast(90%)" }
    const hover =  { ...default_wxh, filter: "invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)" }

  return (
    <img 
      src={src} 
      alt={alt} 
      style={isHoverd ? hover : icons} 
      onMouseOver={() => setIsHoverd((state) => !state)}
      onMouseOut={() => setIsHoverd((state) => !state)}
    />)
   
}

export default Icon
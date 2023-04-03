import Input from "./Input"

const Form = ({formFeild, className}) => {
  return (
    <form className={className}>
        {formFeild.map((feild, index) => {return (
            <>
            <Input formFeild={feild}/>
            </>
        )})}
    </form>
  )
}

export default Form
import Input from "./Input";

const Form = ({ formFeild, className, submitHandler}) => {
  return (
    <form className={className} onSubmit={submitHandler}>
      {formFeild.map((feild, index) => {
        return (
          <>
            <Input formFeild={feild} value=""/>
          </>
        );
      })}
    </form>
  );
};

export default Form;

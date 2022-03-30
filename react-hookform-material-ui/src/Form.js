import React from "react";
//
import { useForm, SubmitHandler } from "react-hook-form";

const formSubmitHandler = (data)=>{
  console.log('From data', data);
}
function Form() {
  const {register, handleSubmit, watch, formState:{errors}} = useForm();
  return <div>
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <input defaultValue="example@a.com" {...register('email')}/>
      <input  {...register('password', {required:true})}/>
      <input type="submit"></input>
    </form>

  </div>;
}

export default Form;

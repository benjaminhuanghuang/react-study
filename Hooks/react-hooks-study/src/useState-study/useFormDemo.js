import React from "react";
//
import { useForm } from "./useForm";

export const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" value={values.password} onChange={handleChange} />
    </div>
  );
};

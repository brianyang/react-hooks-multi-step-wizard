import { useState } from "react";

export const useForm = () => {
  const [inputs, setInputs] = useState({
    name: '', nameb: '', streetb: '', cityb: '', stateb: '', zipb: ''
  });
  const change = (event: any) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    change,
    inputs
  };
}

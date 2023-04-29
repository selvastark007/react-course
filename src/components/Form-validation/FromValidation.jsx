import React ,{useState} from "react";
import "./FromValidation.css";
import { useFormik } from "formik";

const validate = values =>{
    const errors = {} ;
    if(!values.firstname){
        errors.firstname = '*Required';
    } 
    else if (values.firstname.length < 3 ){
        errors.firstname = 'Must be 3 Letters or more' ;
   }
    if(!values.lastname){
        errors.lastname = '*Required';
    }
     else if (values.lastname.length < 3 ){
        errors.lastname = 'Must be 3 Letters or more' ;
    }
    if(!values.email){
        errors.email = '*Required'
    }
     else if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
        errors.email = 'Invaild Email Address'
    }
    if(!values.password){
      errors.password = '*Required';
    }else if (values.password.length > 8 ){
      errors.password = 'Maximum 8 characters only';
    }else if (values.password.length < 4){
      errors.password = 'Minimum 5 characters';
    }
    if(!values.confirmpassword){
      errors.confirmpassword = '*Required';
    }else if (values.password !== values.confirmpassword){
      errors.confirmpassword = '*Password is mismatch';
    }
    return errors;

    
}

const FromValidation = () => {

  const [bool,SetBool] = useState(0);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    onSubmit : values => {
      alert (`Hello! , ${values.firstname} you sucessfully signed up! `)
    }
  });
  console.log(formik.values);
  return (
    <div className="main">
      <div className="signUp-form">
        <h2>Sign up Here</h2>
        <form action="#" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="firstname"
            id=""
            placeholder="First Name..."
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors.firstname}</span> : null }
          <input
            type="text"
            name="lastname"
            id=""
            placeholder="Last Name..."
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            value={formik.values.lastname}
          />
           {formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span> : null }
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email..."
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            value={formik.values.email}
          />
           { formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null }
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password..."
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            value={formik.values.password}
          />
           {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null }
          <input
            type="password"
            name="confirmpassword"
            id=""
            placeholder="Confirm Password..."
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            value={formik.values.confirmpassword}
          />
           {formik.touched.password && formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span> : null }
          <input type="submit" name="submit" value="submit" id="submit" />
        </form>
       
      </div>
    </div>
  );
};

export default FromValidation;

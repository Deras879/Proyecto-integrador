import React from "react";
import style from "./Form.module.css"
import { useState } from "react";
import {validations} from "./validations"


const Form = ({onLogin}) => {
    const [errors, setErrors] = useState({});
        const [userData, setUserData] = useState({
            email: "",
            password: ""
        });

        const handleChange = (event) => {
          const  property = event.target.name;
           const valor = event.target.value;
            setUserData({...userData, [property]: valor})
            setErrors(validations({...userData, [property]: valor}))
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            console.log("si se ejecuta");
            console.log(onLogin);
            onLogin(userData)
        }

    return(
        <div className={style.container}>
        <form action=""  className={style.form}>
            <div className={style.minorContainer}>
                <label htmlFor="" className={style.label}>Username:</label>
                <input type="text" name="email" value={userData.email} className={style.input} onChange={handleChange}/>
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div className={style.minorContainer}>
                <label htmlFor="" className={style.label}>Password:</label>
                <input type="text" name= "password" value={userData.password} className={style.input} onChange={handleChange} />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button className={style.button} onClick={handleSubmit}>Submit
            <span></span></button>
        </form>

        </div>
    )
}

export default Form;
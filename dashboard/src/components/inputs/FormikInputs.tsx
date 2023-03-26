import React from 'react';

type propsTypes={
    formik:any
    label?:string
    name:string
    type?:string | 'text'
}

function FormikInput({ formik, label, name , type="text" }:propsTypes) {
    return (
        <div className="">
            <label >{label}</label>
            <input name={name} type={type} {...formik.getFieldProps({name})} />
            {formik.errors[name] && formik.touched[name] && <div className="text-red-500">{formik.errors[name]}</div>}
        </div>
    )
}
export default FormikInput;
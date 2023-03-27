import React from 'react';

type propsTypes={
    formik:any
    label?:string
    name:string
    type?:string | 'text'
    placeholder?:string
}

function FormikInput({ formik, label, name , type , placeholder}:propsTypes) {
    return (
        <div className="my-2 w-full">
            <label >{label}</label>
            <input className='border rounded-lg w-full  p-3' name={name} type={type} {...formik.getFieldProps({name})} placeholder={placeholder} />
            {formik.errors[name] && formik.touched[name] && <div className="text-red-500 text-sm font-light">{formik.errors[name]}</div>}
        </div>
    )
}
export default FormikInput;
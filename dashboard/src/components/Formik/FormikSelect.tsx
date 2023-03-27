import React from 'react';

type propsType={
    formik:any
    selectOptions:{value:string , label:string}[]
    name:string
    placeholder:string
}

function FormikSelect({ formik, selectOptions, name , placeholder } : propsType) {
    return (
        <div>
            <select placeholder={placeholder} className='border rounded-lg w-full  p-3' name={name} {...formik.getFieldProps(name)}>
                <option>{placeholder}</option>
                {selectOptions.map(item => {
                    return <option value={item.value} key={item.value} >{item.label}</option>
                })}

            </select>
            {formik.errors[name] && formik.touched[name] && <div className="text-sm text-red-500 font-light">{formik.errors[name]}</div>}

        </div>
    )
}

export default FormikSelect

//{...formik.getFieldProps(name)} ==> onChange , toched(visit)

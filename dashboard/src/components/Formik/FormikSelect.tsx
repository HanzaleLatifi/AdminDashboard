import React from 'react';

type propsType={
    formik:any
    selectOptions:{value:string , label:string}[]
    name:string
    placeholder:string
    activeColor?:string
}

function FormikSelect({ formik, selectOptions, name , placeholder , activeColor } : propsType) {
    return (
        <div className='relative'>
            <select className='appearance-none border rounded-lg w-full p-3' name={name} {...formik.getFieldProps(name)}>
                <option>{placeholder}</option>
                {selectOptions.map(item => {
                    return <option value={item.value} key={item.value} >{item.label}</option>
                })}

            </select>
            <div style={{color:activeColor}} className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 14l6-6H4z"/></svg>
            </div>
          {formik.errors[name] && formik.touched[name] && <div className="text-sm text-red-500 font-light">{formik.errors[name]}</div>}

        </div>
    )
}

export default FormikSelect

//{...formik.getFieldProps(name)} ==> onChange , toched(visit)

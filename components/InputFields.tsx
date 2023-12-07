import React from 'react'
import { InputFieldProps } from '@/types/InputField';
import { Controller } from 'react-hook-form';

export default function InputField({
    label,
    id, 
    type = "text",
    name, 
    classNameHeight = "mb-[24px]",
    placeholder,
    withLabelPositioned = "positioned",
    errorMessage,
    minLength = 1,
    maxLength = 250,
    register,
    errors,
    initialValue = "" || [],
    readonly,
    initialData,
    control,
    onChangeInput = false,
    onCallBackChangeForParent= (e: any) => {

    }
}: InputFieldProps) {
    const onCallBackChange = (onChange: any) => (event: any) => {
        onChange(event)
        onCallBackChangeForParent(event)
    }
    return <div className={`field ${classNameHeight}`}
    >
        {label !== "" && <label htmlFor={id} className={`${withLabelPositioned}`}>{label}</label>}
        {
            onChangeInput ? <Controller 
            name={name}
            control={control}
            rules={errorMessage}
            render={({ field: { onChange } }) => (
                <input
                    // {...field}
                    maxLength={maxLength}
                    minLength={minLength}
                    placeholder={placeholder}
                    defaultValue={initialValue}
                    // {...register(name, errorMessage )}
                    className={`${errors[name] ? 'invalid' : ''}`}
                    readOnly={readonly}
                    type={type} id={id}  
                    onChange={onCallBackChange(onChange)}
                    // :className="{ 'invalid': !!errorMessage }"
                />
            )}
            
            /> : initialData ? <input
        
                maxLength={maxLength}
                minLength={minLength}
                placeholder={placeholder}
                defaultValue={initialValue}
                {...register(name, errorMessage )}
                className={`${errors[name] ? 'invalid' : ''}`}
                readOnly={readonly}
                type={type} id={id}  
            /> : <input 
            readOnly={readonly}

            type={type} id={id} {...register(name, errorMessage )} placeholder={placeholder} className={`${errors[name] ? 'invalid' : ''}`}/>
        }
        { errors[name] && <div className="w-full text-right"> <span className="invalid_msg">{ errors[name].message }</span></div>}

    </div>
}

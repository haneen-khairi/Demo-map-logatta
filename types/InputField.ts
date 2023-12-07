export type InputFieldProps = {
    label?: string,
    id: string,
    type?: string,
    name: string,
    classNameHeight?:string,
    placeholder: string,
    initialValue?: string[] | string | number,
    minLength?: number,
    maxLength?: number,
    withLabelPositioned?: string,
    readonly?: boolean,
    register?: any,
    errors: any,
    initialData?: boolean,
    field?: any,
    errorMessage?: any,
    validations?: { name: string; message: string }[],
    onChangeInput?: boolean,
    control?: any,
    onCallBackChangeForParent?: (e: any) => void,
    getInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
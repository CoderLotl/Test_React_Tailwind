export interface LoginInputProps
{
    placeholder: string,
    type: string,
    value: string,
    setValue: (value: string) => void;
    className: string
}

export function LoginInput({placeholder, type, value, setValue, className} : LoginInputProps )
{
    return (
        <input placeholder={placeholder} type={type} className={className} value={value} onChange={(e)=>setValue(e.target.value)}>
        </input>
    );
}
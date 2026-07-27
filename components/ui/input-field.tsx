
type Props = {
    className?: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean
}
export default function InputField({ className, type, name, value, onChange, required }: Props) {
    return (
        <input type={type}
            name={name}
            className={`${className} border w-full rounded text-sm py-2 px-2 mt-2 bg-white shadow focus:outline-none`}
            value={value}
            onChange={onChange}
            required={required}
        />
    )
}
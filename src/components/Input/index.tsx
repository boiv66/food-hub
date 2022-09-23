interface IInputProps {
  className?: string;
  id: string, 
  type: string
}

const Input = ({ className, id, type}: IInputProps) => {
  return (
    <div className={`${className} mx-7`}>
        <label className="text-base text-labelColor " htmlFor={id}>{id}</label>
      <div className="flex mt-3">
        <input
          id={id}
          className={`border  border-[#EEE] flex-auto h-16 rounded-xl `}
          type={type}
        ></input>
      </div>
    </div>
  );
};

export default Input;

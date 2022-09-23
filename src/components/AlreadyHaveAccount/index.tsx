interface IAlreadyHaveAccountProp{
  option: {content: string, color?: string}, 
  color: string, 
  className: string
}


const AlreadyHaveAccount = ({option, color, className}: IAlreadyHaveAccountProp) => {
  return (
    <div className={`flex ${color} ${className}`}>
      <p >Already have an account? {<span className={`border-b ${option.color}`}>{option.content}</span>} </p>
     
    </div>
  );
};

export default AlreadyHaveAccount;

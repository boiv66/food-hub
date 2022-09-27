interface IAlreadyHaveAccountProp{
  option?: {content: string, color?: string}, 
  color: string, 
  className: string, 
  text?: string
  
}


const AlreadyHaveAccount = ({option, color, className, text}: IAlreadyHaveAccountProp) => {
  
  
  return (
    <div className={`flex ${color} ${className}`}>
      <p>{text} {<span className={`border-b ${option?.color}`}>{option?.content}</span>} </p>
     
    </div>
  );
};

export default AlreadyHaveAccount;

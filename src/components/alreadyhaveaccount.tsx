const AlreadyHaveAccount = (props: {option: {content: string, color: string }, color: string, className: string}) => {
  return (
    <div className={`flex ${props.color} ${props.className}`}>
      <p >Already have an account? {<span className={`border-b ${props.option.color}`}>{props.option.content}</span>} </p>
     
    </div>
  );
};

export default AlreadyHaveAccount;

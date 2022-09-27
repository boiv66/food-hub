interface IConfirmButtonProps {
  className?: string;
  title: string;
}

const ConfirmButton = ({ className, title }: IConfirmButtonProps) => {
  return <div className={`flex ${className}`}>
    <button className="bg-primary mx-16 flex-auto text-white h-15 rounded-full font-semibold shadow-lg">{title}</button> </div>;
};

export default ConfirmButton;

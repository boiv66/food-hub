interface IHeaderProps {
  title: string;
  className?: string;
}
const Header = ({ className, title }: IHeaderProps) => {
  return <h1 className={`font-bold ml-7 ${className}`}>{title}</h1>;
};

export default Header;

const Header = (props: {title:string, className: string}) => {
    return (<h1 className={`font-bold text-[45px] ml-[30px] ${props.className}`}>{props.title}</h1>)
}

export default Header; 
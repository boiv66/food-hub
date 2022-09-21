import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SignInWithButton = (props: {btnName: string, position: string, src: string}) => {
  return (
    <button className={`bg-white rounded-[27.41px] flex-auto flex p-[12px] w-[139.26px] items-center`}>
      {/* <FontAwesomeIcon icon={"facebook"} /> */}
      <img src={props.src} className="mr-[9px]"></img>
      <div className="mr-[2px] font-medium text-sm items-center">{props.btnName}</div>
    </button>
  );
};
export default SignInWithButton;

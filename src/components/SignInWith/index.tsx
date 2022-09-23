import SignInWithButton from "./SignInWithButton";
import Facebook from "./assets/facebook.png"; 
import Google from "./assets/google.png"

interface ISignInWithProps{
  color: {
    text: string, 
    divider: string
  }
  className: string
}
const SignInWith = ({color, className}: ISignInWithProps) => {
  return (
    <div>
      <div className={`flex mx-[40px] ${className} ${color.text} items-center`}>
        <span className={`${color.divider} h-px w-4/12 flex-1 `}></span>
        <p className="flex-auto text-14 text-center">Sign in with</p>
        <span className={`${color.divider} h-px w-4/12 flex-1`}></span>
      </div>
      <div>
      <div className="flex mx-[40px] mt-[19px] space-x-[15px]"> 
    <SignInWithButton btnName="FACEBOOK" position="top-0 left-0" src={Facebook}></SignInWithButton>
    <SignInWithButton btnName="GOOGLE" position="top-0 left-[154px]" src={Google}></SignInWithButton>

    </div>
      </div>
    </div>
  );
};
export default SignInWith;

import SignUpWithButton from "./SignUpWithButton";
import Facebook from "./assets/facebook.png"; 
import Google from "./assets/google.png"

const SignUpWithOption = () => {
    return (<div className="flex mx-[40px] mt-[19px] space-x-[15px]"> 
    <SignUpWithButton btnName="FACEBOOK" position="top-0 left-0" src={Facebook}></SignUpWithButton>
    <SignUpWithButton btnName="GOOGLE" position="top-0 left-[154px]" src={Google}></SignUpWithButton>

    </div>)

}

export default SignUpWithOption; 
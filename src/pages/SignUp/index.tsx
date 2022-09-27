import AlreadyHaveAccount from "components/AlreadyHaveAccount";
import ConfirmButton from "components/ConfirmButton";
import Decorator from "components/Decorator";
import Header from "components/Header";
import Input from "components/Input";
import SignInWith from "components/SignInWith";

const SignUp = () => {
  return (
    <div className="">
        <Decorator></Decorator>
      <Header title="Sign Up" className=" text-4xl mt-24"></Header>
      <Input id="Full Name" className="mt-8" type="text"></Input>
      <Input id="E-mail" className="mt-10" type="email"></Input>
      <Input id="Password" className="mt-5" type="password"></Input>
      <ConfirmButton title="SIGN UP" className="mt-7"></ConfirmButton>
      <AlreadyHaveAccount
        color="text-grayAccount"
        className="mx-20 mt-8 font-medium"
        option={{ color: "text-primary", content: "Login" }} text= "Already have an account? "
      ></AlreadyHaveAccount>
      <SignInWith color={{text:"text-grayAccount", divider: "bg-[#B3B3B3] bg-opacity-50"}}className="mt-6"></SignInWith>
    </div>
  );
};

export default SignUp;

import AlreadyHaveAccount from "components/AlreadyHaveAccount"
import ConfirmButton from "components/ConfirmButton"
import Decorator from "components/Decorator"
import Header from "components/Header"
import Input from "components/Input"
import SignInWith from "components/SignInWith"


const Login = () => {
    return(<div>
        <Decorator></Decorator>
        <Header title= "Login" className="text-4xl mt-40"></Header>
        <Input id="E-mail" type="text" className="mt-8" ></Input>
        <Input id="Password" type="password" className="mt-8"></Input>
        <AlreadyHaveAccount color="text-primary" className="mt-8 justify-center" text="Forgot password?"></AlreadyHaveAccount>
        <ConfirmButton title="LOG IN" className="mt-8"></ConfirmButton>
        <AlreadyHaveAccount text="Don't have an account? " color="text-grayAccount" className="mt-8 justify-center" option={{color:"text-primary", content:"Sign Up"}}></AlreadyHaveAccount>
        <SignInWith color={{text: "grayAccount", divider:"bg-[#B3B3B3] bg-opacity-50"}} className="mt-12"></SignInWith>
    </div>)
}

export default Login;
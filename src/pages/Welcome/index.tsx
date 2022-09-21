import BackgroundWelcome from "./assets/background-image.png";
import Header from "components/header";
import Subtitle from "components/subtitle";
import SignUpWith from "components/SignIn/signupwith";
import AlreadyHaveAccount from "components/alreadyhaveaccount";

const Welcome = () => {
  return (
    <div
      className="h-screen w bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundWelcome})`,
      }}
    >
      <div className="bg-gradient-to-t from-[#191B2F] h-screen">
        {/* <div className="z-20"> */}
        <button className="text-primary rounded-[27.41px] px-5 py-2 bg-white my-8 absolute top-[29px] right-[27.5px] mr-4 font-semibold z-0">
          {" "}
          Skip{" "}
        </button>
        <Header title="Welcome to" className="mt-[181px]"></Header>
        <Header title="FoodHub" className="text-primary"></Header>
        <Subtitle
          content="Your favorite foods delivered fast at your door"
          className="ml-[30px] mt-[19px] mr-[79px]"
        ></Subtitle>
        <SignUpWith color="text-white"></SignUpWith>
        {/* </div> */}
        <div className="mt-[23px] mx-[40px] flex">
          <button className="rounded-[30px] border border-white text-white bg-white/30 flex-auto py-[18px] text-[17px] font-medium ">
            Start with email or phone
          </button>
        </div>
        <AlreadyHaveAccount className="mx-[79px] mt-[28px] text-sm" option={{content: "Sign In", color: "text-white"}} color="text-white"></AlreadyHaveAccount>
      </div>
    </div>
  );
};

export default Welcome;

import SignUpWithOption from "./SignUpWithOption";

const SignUpWith = (props: { color: string }) => {
  return (
    <div>
      <div className={`flex mx-[40px] mt-[191px] ${props.color} items-center`}>
        <span className="bg-white h-px w-4/12 flex-1 "></span>
        <p className="flex-auto text-14 text-center">sign in with</p>
        <span className="bg-white h-px w-4/12 flex-1"></span>
      </div>
      <div>
        <SignUpWithOption></SignUpWithOption>
        {/* <div className="mt-[23px] mx-[40px] flex">
          <button className="rounded-[30px] border border-white text-white bg-white/30 flex-auto py-[18px] text-[17px] font-medium ">
            Start with email or phone
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default SignUpWith;

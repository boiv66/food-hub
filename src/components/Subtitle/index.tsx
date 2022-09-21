

const Subtitle = (props: { content: string; className: string }) => {
  return <p className={`text-[18px] leading-7 font-normal ${props.className}`}>{props.content}</p>;
};

export default Subtitle;

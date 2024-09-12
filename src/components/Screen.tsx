import { commalise } from "../constants";

interface Props {
  screen: string;
}

function Screen({ screen }: Props) {
  return (
    <div className="text-right bg-screen-bg mt-8 p-6 rounded-[10px] text-[40px] text-main md:text-[60px] leading-none md:leading-[1.25] overflow-x-scroll no-scrollbar">
      {screen.replace(/(-?)(\d*)((?:\.\d*)?)/g, commalise)}
    </div>
  );
}

export default Screen;

import { commalise } from "../constants";

interface Props {
  screen: string;
}

function Screen({ screen }: Props) {
  return (
    <div className="text-right bg-screen-bg mt-8 p-6 rounded-[10px] text-[40px] text-main leading-none overflow-x-scroll">
      {screen.replace(/(-?)(\d*)((?:\.\d*)?)/g, commalise)}
    </div>
  );
}

export default Screen;

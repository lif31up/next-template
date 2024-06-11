import TailProperties, { TailClassName } from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";

export function CommonComp({ className }: DefaultProps<never>) {
  // tailname area
  const tailName: TailProperties = {
    box: "w-24 h-24  md:w-16 md:h-16",
    layout: "flex",
  };
  // html area
  return <div className={`${TailClassName(tailName)} ${className}`}></div>;
} // CommonComp(): this is paradigm to define a JSX element.

type DataCompData = { number: number };
export function DataComp({ data, className }: DefaultProps<DataCompData>) {
  // data area
  const { number }: DataCompData = data;
  const tailName: TailProperties = {
    box: "w-fit h-fit",
    typo: "font-bold text-xs",
  };
  return (
    <h1 className={`${TailClassName(tailName)} ${className}`}>{number}</h1>
  );
} // DataComp(): they are to be passed the data from parent

export function ClickComp({ id, onClick, className }: DefaultProps<never>) {
  // prop area
  if (!onClick || !id) return <></>;

  // click area
  const clickHandler = (): void => {
    onClick(id);
  };
  const tailName: TailProperties = {
    box: "w-fit h-fit",
    typo: "font-bold text-xs",
  };
  return (
    <button
      className={`${TailClassName(tailName)} ${className}`}
      onClick={clickHandler}
    >
      button
    </button>
  );
} // ClickComp(): they are to be passed the onClick() function from parent

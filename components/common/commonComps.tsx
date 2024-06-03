import TailProperties, { TailClassName } from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";

export function CommonComp({ className }: DefaultProps<never>) {
  const tailName: TailProperties = {
    box: "w-24 h-24",
    layout: "flex",
  };
  return <div className={`${TailClassName(tailName)} ${className}`}></div>;
} // CommonComp(): this kind of comps are to be considered as smaller scope compared to feature comps

type DataCompData = { number: number };
export function DataComp({ data, className }: DefaultProps<DataCompData>) {
  const { number }: DataCompData = data;
  const tailName: TailProperties = {
    box: "w-fit h-fit",
    typo: "font-bold text-xs",
  };
  return (
    <h1 className={`${TailClassName(tailName)} ${className}`}>{number}</h1>
  );
} // DataComp(): this kind of comps are to be passed the data from parent

export function ClickComp({ id, onClick, className }: DefaultProps<never>) {
  if (!onClick || !id) return;
  const tailName: TailProperties = {
    box: "w-fit h-fit",
    typo: "font-bold text-xs",
  };
  return (
    <button
      className={`${TailClassName(tailName)} ${className}`}
      onClick={() => {
        onClick(id);
      }}
    ></button>
  );
}

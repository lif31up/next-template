import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { TailClassName } from "@/styles/TailProperties";

const TopBarData = {
  title: "next template",
  desc: "desc of layout",
};
export default function TopBar({
  data,
  className,
}: DefaultProps<typeof TopBarData>) {
  const { title, desc }: typeof TopBarData = data;

  const tailname: TailProperties = {
    box: "w-full h-16",
    bg_border: "bg-blue text-white",
  };
  return (
    <section className={`${TailClassName(tailname)} ${className}`}>
      {title + " - " + desc}
    </section>
  );
}

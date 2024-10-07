import DefaultProps from "@/utils/DefaultProps";
import TailProperties, { TailClassName } from "@/styles/TailProperties";

export default HorizGallery;

interface HorizGalleryProps extends DefaultProps<never> {
  children: JSX.Element[];
  tailnameOfFrame: string;
} // HorizGalleryProps
function HorizGallery({
  children,
  tailnameOfFrame,
  className,
}: HorizGalleryProps) {
  const frames: JSX.Element[] = [];
  children.forEach((child: JSX.Element, index: number): void => {
    frames.push(
      <Frame key={index} className={tailnameOfFrame}>
        {child}
      </Frame>
    ); // push
  }); //forEach

  const tailname: TailProperties = {
    box: "w-full h-full",
    layout: "overflow-hidden snap-mandatory flex items-cennter",
  }; // tailname
  return (
    <section className={`${TailClassName(tailname)} ${className}`}>
      {frames}
    </section>
  ); // return
} // HorizGallery

function Frame({ children, className }: DefaultProps<never>) {
  const tailname: TailProperties = {
    box: "w-fit h-fit",
  }; // tailname
  return (
    <div className={`${TailClassName(tailname)} ${className}`}>{children}</div>
  ); // return
} // Frame

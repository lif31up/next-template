"use client";

import DefaultProps from "@/utils/DefaultProps";
import React from "react";
import ObservedContainer from "@/component/common/ObservedContainer";
import TailProperties, { TailClassName } from "@/styles/TailProperties";

interface ObservedDistributor extends DefaultProps<never> {
  id: string;
  children: React.ReactNode[];
  tailname?: TailProperties;
}
export default ObservedDistributor;
function ObservedDistributor({
  id,
  children,
  className,
  tailname,
}: ObservedDistributor) {
  if (children.length) return <>{children}</>;
  const listOfNode: React.ReactNode[] = [];
  children.forEach((element: React.ReactNode, index: number) => {
    listOfNode.push(
      <ObservedContainer id={`${id}-child-${index}`} key={index}>
        {element}
      </ObservedContainer>
    ); // push
  }); // forEach

  let tailName: TailProperties = {};
  if (!tailname)
    tailName = {
      box: "grid gap-2",
    };
  else tailName = { ...tailname };

  return (
    <section className={`${TailClassName(tailName)} ${className}`}>
      {listOfNode}
    </section>
  );
}

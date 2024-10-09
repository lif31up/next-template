"use client";

import React, { useEffect, useRef } from "react";
import DefaultProps from "@/utils/DefaultProps";

interface ObservedComponentProps extends DefaultProps<never> {
  children: React.ReactNode;
  animation: string;
  id: string;
  threshold?: number | undefined;
  delay?: number | undefined;
}
export default ObservedContainer;
function ObservedContainer({
  id,
  animation,
  threshold,
  children,
  delay,
}: ObservedComponentProps) {
  const observerRef = useRef<null | IntersectionObserver>(null);
  let options: object = {
    root: null,
    rootMargin: "0px",
    threshold: threshold ? threshold : 0.5,
  }; // options
  useEffect(() => {
    const element: HTMLElement | null = document.getElementById(id);
    if (!element) return;

    const intersectHandler = (entries: Array<any>): void => {
      const effectHandler = () => {
        if (!element) return () => observerRef.current?.disconnect();
        element.style.animationPlayState = "running";
        return () => observerRef.current?.disconnect();
      }; // effectHandler

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!delay) effectHandler();
          else setTimeout(effectHandler, delay);
        } // if
      }); // forEach
    }; // intersectHandler

    observerRef.current = new IntersectionObserver(intersectHandler, options);
    observerRef.current.observe(element);
  }, []);
  return (
    <div id={id} className={animation}>
      {children}
    </div>
  );
}

interface ObservedDistributorProps extends DefaultProps<never> {
  animation: string;
  id: string;
  threshold?: number | undefined;
  delay?: number | undefined;
}
export function ObservedDistributor({
  children,
  animation,
  id,
  threshold,
  delay,
}: ObservedDistributorProps) {
  const listOfNode: React.ReactNode[] = [];
  children.forEach((node: any, index: number) => {
    if (React.isValidElement(node))
      listOfNode.push(
        <ObservedContainer
          animation={animation}
          id={`${id}-children--${index}`}
          key={index}
          threshold={threshold}
          delay={delay}
        >
          {node}
        </ObservedContainer>
      ); // push
  }); // forEach
  return <section id={id}>{listOfNode}</section>;
}

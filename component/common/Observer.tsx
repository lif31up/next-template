"use client";

import React, { useEffect, useRef } from "react";
import DefaultProps from "@/utils/DefaultProps";

type ObserverDataType = {
  animation: string;
  options?: {
    root: HTMLElement | any;
    rootMargin: string;
    threshold: number;
  }; // options
  delay?: number;
}; // ObserverDataType

function Observer({ data, children }: DefaultProps<ObserverDataType>) {
  const observerRef = useRef<IntersectionObserver | any>(null);
  const elementRef = useRef<HTMLElement | any>(null);
  useEffect(() => {
    if (!data || !children || !elementRef.current) return;

    const intersectHandler = (entries: Array<any>): void => {
      const effectHandler = () => {
        if (!elementRef.current) return () => observerRef.current?.disconnect();
        elementRef.current.style.animationPlayState = "running";
        return () => observerRef.current?.disconnect();
      }; // effectHandler

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (data.delay === undefined) effectHandler();
          else setTimeout(effectHandler, data.delay);
        } // if
      }); // forEach
    }; // intersectHandler

    observerRef.current = new IntersectionObserver(
      intersectHandler,
      data.options
        ? data.options
        : {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
          }
    );
    observerRef.current.observe(elementRef.current);
  }, []);
  if (!data || !children) return <></>;
  return (
    <div ref={elementRef} className={data.animation}>
      {children}
    </div>
  ); // return
} // Observer
export default Observer;

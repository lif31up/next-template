"use client";

import React, { useEffect, useRef } from "react";
import DefaultProps from "@/utils/DefaultProps";

interface ObservedComponentProps extends DefaultProps<never> {
  children: React.ReactNode;
  threshold?: number;
  id: string;
  delay?: number;
}
export default ObservedContainer;
function ObservedContainer({
  id,
  threshold,
  children,
  delay,
}: ObservedComponentProps) {
  const observerRef = useRef<null | IntersectionObserver>(null);
  let options: object = {
    root: null,
    rootMargin: "0px",
    threshold: threshold !== null ? threshold : 0.5,
  }; // options
  useEffect(() => {
    let element: HTMLElement | null = document.getElementById(id);
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
  return <div id={id}>{children}</div>;
}
'use client';

/* notion: this component is an example/instruction for template all the components for later
* 1: every style is controlled by the style object; and the place should be right after prerender logic which also means right before JSX return.
* 2: the props should be intercepted by DefaultProps. If you need more props to define, extend some from DefaultProps
* 3: every component convention should be like 'function comp() {...}' not 'const comp = () => {...}'
* 4: variables in pre-render logic should be named by the own convention.*/

import DefaultProps from "@/utils/props/DefaultProps";
import TailwindProperties from "@/styles/TailwindProperties";
import {useEffect} from "react";

function Navigator({className}:DefaultProps){
	const id: string = "navigator--0"
	const height: string = "4rem"; const shrunkHeight: string = "3rem";
	useEffect(():void=>{
		const target: HTMLElement | null = document.getElementById(id);
		if (!target) return;
		window.addEventListener("scroll",():void=>{
			if (window.scrollY > 0) target.style.height = shrunkHeight;
			else target.style.height = height;
		})
	},[]);
	const style: TailwindProperties = {
		xl: "",
		base: "",
	}
	return (<div className={`${style.xl} ${style.base} ${className}`} id={id}></div>)
}
export default Navigator
"use client"

import { useEffect, useRef } from "react"

const ButtonScroll = () => {
    const ref = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const element = ref.current;
        if (element) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 150) {
                    element.classList.replace("invisible","visible");
                } else {
                    element.classList.replace("visible","invisible");
                }
            })
            element.addEventListener("click", () => {
                window.scrollTo({
                    top: 0
                });
            });
        }

        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 150) {
                    element?.classList.replace("invisible","visible");
                } else {
                    element?.classList.replace("visible","invisible");
                }
            })
            element?.removeEventListener("click", () => {
                window.scrollTo({
                    top: 0
                });
            });
        }
    }, [])
  return (
    <button ref={ref} className="fixed transition invisible z-10 bottom-4 right-4 w-12 h-12 flex items-center justify-center bg-slate-800 rounded-full">
        <i className="bx bx-up-arrow text-slate-200"></i>
    </button>
  )
}

export default ButtonScroll

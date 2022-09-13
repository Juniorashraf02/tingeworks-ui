// React import
import Link from "next/link";
import React from "react";

// Third party import

// Domestic import

// interface
interface buttonWithProps {
  children?: React.ReactNode;
  text: string;
  path: string;
  className?: string;
  type: "button"|"submit"|"reset";
  style: "primary"|"secondary";
}

const ButtonGroup: React.FC<buttonWithProps> = (props, { children }) => {
    return (
<>
      {children}
      <Link href={props.path}>
        <a>
          <button
            type={props.type}
            className={`
            ${ props.style == "primary" && "inline-block px-6 py-2.5 bg-rose-500 text-white font-bold text-xs leading-tight rounded-full shadow-md hover:bg-rose-600 hover:shadow-lg focus:bg-rose-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-600 active:shadow-lg transition duration-300 ease-in-out tracking-wider"}


            ${ props.style == "secondary" && "inline-block px-6 py-2.5 bg-slate-900 text-white font-bold text-xs leading-tight rounded-full shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-900 active:shadow-lg transition duration-300 ease-in-out tracking-widest"}
           
            ${ props.className !== null && props.className}
            `}
          >
            {props.text}
          </button>
        </a>
      </Link>
    </>
	);
}

export default ButtonGroup;

import Link from 'next/link';
import React from "react";



interface ButtonProps {
	children?: React.ReactNode;
	types: 'Block' | 'Pill' | 'Link';
	onClick?: any;
	className?: string;
	name?: any;
	url?: string;
	text?: string;
}



const Button: React.FC<ButtonProps> = (props:ButtonProps, { children }) => {
	return (
	  <>
		{children}
		<Link href={props.url}>
		  <a>
			<button
			  className={`
			  ${ props.types == "Pill" && "inline-block px-10 py-2 hover:bg-rose-500 text-white font-bold text-xs leading-tight rounded-full shadow-md bg-slate-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg duration-300 ease-in-out tracking-wider"}


			  ${ props.types == "Block" && "inline-block px-6 py-3.5 bg-rose-400 text-white font-bold text-md leading-tight uppercase rounded-md shadow-md hover:bg-rose-500 hover:shadow-lg focus:bg-rose-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-500 active:shadow-lg transition hover:translate-y-3 duration-300 ease-in-out tracking-widest dark:bg-green-500 dark:hover:bg-lime-500"}


			  ${ props.types == "Link" && "inline-block px-12 py-3 bg-rose-500 text-white  text-base leading-tight rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-lg duration-300 ease-in-out tracking-wider"}
			  
			  ${ props.className !== null && props.className}
			  `}
			>
			  {props.text}
			</button>
		  </a>
		</Link>
	  </>
	);
  };
  
  export default Button;

// export default function Button : React.FC<buttonProps> =(props: ButtonProps, { children }) => {
// 	return <button onClick={props.onClick} className="flex items-center gap-2">{props.children}</button>;
// }

// const Button: React.FC<ButtonProps> = (props) => (
// 	<Button
// 		onClick={() => props.onClick}
// 		type={props.type}
// 		className={`
//             ${props.type == 'Pill' && ' bg-red-700 text-white hover:bg-black '}
//             ${
// 				props.type == 'Block' &&
// 				'bg-gray-200 text-gray-500 hover:bg-gray-300 '
// 			}
//             ${
// 				props.type == 'Link' &&
// 				'bg-red-500 text-gray-500 hover:bg-gray-300 '
// 			}
             
//             ${props.className !== null && props.className}
             
//           }`}
// 	>{props.name}</Button>
// );


// export default Button;



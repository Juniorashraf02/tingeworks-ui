interface props {
    children: React.ReactNode;
    type: "Block" | "Pill" | "Link";
    onClick: any;
}

export default function Button(props: props) {
	return <button onClick={props.onClick} className="flex items-center gap-2" >{props.children}</button>;
}

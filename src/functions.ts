import { SayHelloProps } from "./types";

export function SayHello(props: SayHelloProps) {
	console.log(`Hello ${props.name}`);
}

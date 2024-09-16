import { SayHelloProps } from "./types";

export function SayHello(props: SayHelloProps) {
	return `Hello ${props.name}`;
}

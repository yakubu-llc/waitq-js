import { SayHelloProps } from "./types/hello";

export function SayHello(props: SayHelloProps) {
	return `Hello ${props.name}`;
}

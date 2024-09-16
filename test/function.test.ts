import { SayHello } from "../src/functions";

describe("Function tests", () => {
	it("should return \"Hello world\"", () => {
		expect(SayHello({ name: "world" })).toEqual("Hello world");
	});
});
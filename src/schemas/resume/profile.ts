import { z } from "astro:content";

export default z.object({
	network: z.string().describe("e.g. Facebook or Twitter"),
	username: z.string().describe("e.g. neutralthoughts"),
	url: z.string().url().describe("e.g. http://twitter.example.com/neutralthoughts"),
});

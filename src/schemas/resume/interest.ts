import { z } from "astro:content";

export default z.object({
	name: z.string().describe("e.g. Philosophy"),
	keywords: z.string().array().describe("e.g. Friedrich Nietzsche"),
});

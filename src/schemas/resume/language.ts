import { z } from "astro:content";

export default z.object({
	language: z.string().describe("e.g. English, Spanish"),
	fluency: z.string().describe("e.g. Fluent, Beginner"),
});

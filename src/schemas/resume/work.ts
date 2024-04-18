import experience from "./experience";
import { z } from "astro:content";

export default experience.extend({
	name: z.string().describe("e.g. Facebook"),
	location: z.string().optional().describe("e.g. Menlo Park, CA"),
	description: z.string().optional().describe("e.g. Social Media Company"),
});

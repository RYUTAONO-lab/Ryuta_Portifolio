import experience from "./experience";
import { z } from "astro:content";

export default experience.extend({
	organization: z.string().describe("e.g. Facebook"),
});

import { z } from "astro:content";

export default z.object({
	name: z.string().describe("e.g. Certified Kubernetes Administrator"),
	date: z.coerce.date(),
	url: z.string().url().optional().describe("e.g. http://example.com"),
	issuer: z.string().describe("e.g. CNCF"),
});

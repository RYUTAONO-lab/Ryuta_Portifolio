import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
	const collection = await getCollection("resume");
	return collection.map((entry) => ({
		params: { locale: entry.id.split("/")[0] },
		props: { entry },
	}));
}

export const GET: APIRoute = ({ props }) => {
	// I don't really like this but unfortunately I couldn't come up with a better solution
	const data = JSON.parse(JSON.stringify(props.entry.data));

	if (data.basics.image) data.basics.image = `${import.meta.env.VITE_BASE_URL}${data.basics.image.src}`;

	return new Response(JSON.stringify(data), {
		headers: { "Content-Type": "application/json" },
	});
};

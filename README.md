# Minimalist Astro CV

A simple Astro CV inspired by [Minimalist CV by Bartosz Jarocki](https://github.com/BartoszJarocki/cv) with some extra features.

Built with Astro and Tailwind.

## Features

- i18n
- JSON Resume support
- Responsive

## Content

[Astro content collections](https://docs.astro.build/en/guides/content-collections/) were used to define the content, however the pages have to be assembled *manually*. I decided to do so to have more control over how each page looks. After all this is just a starting template which should be further customized.

## JSON Resume

The content collection schema for the resume basically matches the [JSON Resume schema](https://jsonresume.org/schema/) and under `/api/{locale}.json` one can find a json representation of your resume. 

The path to the image gets replaced but you have to set the `VITE_BASE_URL` environment variable with a path to the root of the project, it has to include trailing slash (`https://example.com/` is going to result in  `https://example.com/_astro/photo.MK1hhBVF.jpg` for example)

## Development

1. Clone repository
	
1. Install dependencies
	```sh
	pnpm i
	```
1. Start the dev server
	```sh
	pnpm dev
	```
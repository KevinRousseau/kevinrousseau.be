// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	app: {
		head: {
			title: "Kevin Rousseau | Full-stack Developer",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			htmlAttrs: {
				lang: "en",
			},
			link: [
				{
					rel: "canonical",
					href: "https://kevinrousseau.be",
				},
				{ rel: "icon", type: "image/x-icon", href: "favicon.png" },
			],
			script: [
				{
					hid: "spline",
					type: "module",
					src: "https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js",
				},
			],
		},
	},
});

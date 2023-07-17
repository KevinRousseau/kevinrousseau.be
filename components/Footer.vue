<script setup lang="ts">
import HeroWave from "./HeroWave.vue";
import FooterLink from "./FooterLink.vue";

interface FooterLink {
	url: string;
	icon: string;
}

const footerLinks: FooterLink[] = [
	{
		url: "mailto:hallo@kevinrousseau.be",
		icon: "fa-solid fa-paper-plane",
	},
	{
		url: "https://github.com/KevinRousseau",
		icon: "fa-brands fa-github",
	},
];
</script>

<template>
	<footer class="w-full absolute bottom-0 z-10">
		<div class="container mx-auto flex justify-between items-center py-5">
			<p>&copy; {{ new Date().getFullYear() }} - Kevin Rousseau</p>

			<ul class="flex items-center gap-5">
				<li
					v-for="(footerLink, footerLinkIndex) in footerLinks"
					:key="footerLinkIndex"
				>
					<FooterLink
						:url="footerLink.url"
						:icon="footerLink.icon"
					></FooterLink>
				</li>
			</ul>
		</div>
	</footer>

	<HeroWave class="absolute bottom-0" />
</template>

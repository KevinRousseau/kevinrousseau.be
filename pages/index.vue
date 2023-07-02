<script setup lang="ts">
import FooterLink from '../components/FooterLink.vue';
import HeroWave from '../components/HeroWave.vue';

interface FooterLink {
	url: string,
	icon: string
}

const footerLinks: FooterLink[] = [
	{
		url: 'mailto:hallo@kevinrousseau.be',
		icon: 'fa-solid fa-paper-plane'
	}, {
		url: 'tel:+32 476 34 91 63',
		icon: 'fa-solid fa-mobile-screen-button'
	}, {
		url: 'https://github.com/KevinRousseau',
		icon: 'fa-brands fa-github'
	}
]

</script>

<template>
	<div id="hero" class="w-screen min-h-screen">
		<footer class="w-full absolute bottom-0 left-0 z-10 flex justify-between items-center p-5">
			<p>&copy; {{ new Date().getFullYear() }} - Kevin Rousseau </p>

			<ul class="flex items-center gap-5">
				<li v-for="(footerLink, footerLinkIndex) in footerLinks" :key="footerLinkIndex">
					<FooterLink :url="footerLink.url" :icon="footerLink.icon"></FooterLink>
				</li>
			</ul>
		</footer>

		<HeroWave class="absolute bottom-0" />
	</div>
</template>

<style lang="scss">
@keyframes move_gradient {
	0% {
		background-position: 0 85%;
	}

	50% {
		background-position: 100% 20%;
	}

	100% {
		background-position: 0% 85%;
	}
}

#hero {
	background-image: linear-gradient(60deg, #A7DCE3, #8D8BBE);
	background-size: 600% 600%;
	animation: move_gradient 20s infinite ease-in-out;
}
</style>

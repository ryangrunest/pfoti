<template>
	<v-app-bar absolute class="black white--text" app>
		<v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon>
		<v-app-bar-title class="px-0">
			<div class="text-h5 white--text">
				pfoti <span class="text-subtitle-1">- pagefront of the internet</span>
			</div>
		</v-app-bar-title>

		<v-spacer></v-spacer>
		<v-btn class="white--text" icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<v-btn class="white--text" icon @click="toggleSettingsModal">
			<v-icon>mdi-cog-outline</v-icon>
		</v-btn>
		<img class="logo" src="~/assets/smiley.svg" alt="logo" />
	</v-app-bar>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	name: 'DefaultHeader',
	computed: {
		...mapState(['isDarkMode']),
	},
	methods: {
		...mapActions(['toggleSettingsModal']),
	},
}
</script>

<style lang="scss" scoped>
.logo {
	width: 50px;
	fill: white;
	stroke: white;
}
</style>

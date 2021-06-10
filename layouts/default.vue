<template>
	<v-app>
		<v-app-bar
			absolute
			color="#fcb69f"
			dark
			app
			src="https://images.unsplash.com/photo-1605940169841-60884072a854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2748&q=80"
		>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<v-app-bar-title class="px-0">
				<div class="text-h5">
					pfoti <span class="text-subtitle-1">- pagefront of the internet</span>
				</div>
			</v-app-bar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-btn icon @click="toggleModal">
				<v-icon>mdi-cog-outline</v-icon>
			</v-btn>
		</v-app-bar>
		<v-main class="mt-4">
			<SettingsModal></SettingsModal>

			<Nuxt />
		</v-main>
	</v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SettingsModal from './components/SettingsModal.vue'

export default {
	components: {
		SettingsModal,
	},
	data() {
		return {}
	},
	methods: {
		...mapActions(['toggleModal']),
	},
}
</script>

<template>
	<v-app>
		<DefaultHeader />
		<v-main class="mt-4">
			<SettingsModal />
			<Nuxt />
		</v-main>
	</v-app>
</template>

<script>
import DefaultHeader from './components/DefaultHeader.vue'
import SettingsModal from './components/SettingsModal.vue'

export default {
	components: {
		DefaultHeader,
		SettingsModal,
	},
	data() {
		return {}
	},
}
</script>

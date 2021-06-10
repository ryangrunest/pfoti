<template>
	<v-app color="black">
		<DefaultHeader />
		<v-main :class="getMainContentClass()">
			<SettingsModal />
			<Nuxt />
		</v-main>
	</v-app>
</template>

<script>
import { mapState } from 'vuex'
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
	computed: {
		...mapState(['isDarkMode']),
	},
	methods: {
		getMainContentClass() {
			let contentClass = ''
			if (this.isDarkMode) contentClass += 'grey darken-4'
			return contentClass
		},
	},
}
</script>

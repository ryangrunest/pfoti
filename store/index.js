export const state = () => ({
	settingsModalOpen: false,
	isDarkMode: false,
})

export const mutations = {
	toggleSettingsModal(state) {
		state.settingsModalOpen = !state.settingsModalOpen
	},
	toggleDarkMode(state) {
		state.isDarkMode = !state.isDarkMode
	},
}

export const actions = {
	toggleSettingsModal(context) {
		context.commit('toggleSettingsModal')
	},
	toggleDarkMode(context) {
		context.commit('toggleDarkMode')
	},
}

export const state = () => ({
	settingsModalOpen: false,
})

export const mutations = {
	toggleModal(state) {
		state.settingsModalOpen = !state.settingsModalOpen
	},
}

export const actions = {
	toggleModal(context) {
		context.commit('toggleModal')
	},
}

export const state = () => ({
  settingsModalOpen: false,
})

export const mutations = {
  toggleModal(state) {
    state.settingsModalOpen = !state.settingsModalOpen
  },
}

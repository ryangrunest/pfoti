<template>
	<v-dialog
		v-model="settingsModalOpen"
		fullscreen
		hide-overlay
		transition="dialog-top-transition"
	>
		<v-card :dark="isDarkMode">
			<v-toolbar :dark="isDarkMode">
				<v-toolbar-title>Settings</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn icon @click="toggleSettingsModal">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-toolbar>
			<v-divider></v-divider>
			<v-list subheader>
				<v-subheader>Widgets</v-subheader>
				<v-list-item>
					<v-list-item-action>
						<v-switch color="info"></v-switch>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Recipes</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action>
						<v-switch color="info"></v-switch>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Quotes</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action>
						<v-switch color="info"></v-switch>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Music</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action>
						<v-switch color="info"></v-switch>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Notes</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action>
						<v-switch color="info"></v-switch>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>National Events</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action>
						<v-switch color="info"></v-switch>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Local Events</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action>
						<v-switch color="info"></v-switch>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Investments</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<v-list subheader>
				<v-subheader>App</v-subheader>
				<v-list-item>
					<v-list-item-action>
						<v-switch v-model="isDarkMode" color="info" @change="toggleDarkMode"></v-switch>
					</v-list-item-action>
					<v-list-item-content> Dark Mode </v-list-item-content>
				</v-list-item>
			</v-list>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: 'SettingsModal',
	computed: {
		...mapState(['settingsModalOpen', 'isDarkMode']),
	},
	methods: {
		...mapActions(['toggleSettingsModal', 'toggleDarkMode']),
	},
}
</script>

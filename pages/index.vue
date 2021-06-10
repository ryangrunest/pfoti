<template>
	<v-row no-gutters justify="center">
		<v-col :cols="1" class="red pt-8" @click="toggleShow">{{ show }}</v-col>
		<v-col v-show="show" :cols="1" class="green pt-8" @click="toggleShow">{{ show }}</v-col>
	</v-row>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			show: true,
		}
	},
	methods: {
		toggleShow() {
			this.show = !this.show
		},
	},
}
</script>

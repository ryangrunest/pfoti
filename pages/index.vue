<template>
  <v-row justify="center">
    <v-col :cols="1" class="red" @click="toggleShow">{{ show }}</v-col>
    <v-col v-show="show" :cols="1" class="green" @click="toggleShow">{{
      show
    }}</v-col>
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

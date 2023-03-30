<template>
  <div id="app">
    <toogle-switch :fastType="onTyped" />
  </div>
</template>

<script>
import ToogleSwitch from './ToggleSwitch';

export default {
  name: 'nav-bar',
  props: {
    onTyped: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ToogleSwitch,
  },
  methods: {
    check() {
      console.log(this.onTyped);
    },
  },
};
</script>

<style scoped></style>

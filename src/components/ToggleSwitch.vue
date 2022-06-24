<template>
  <div class="d-flex">
    <p class="me-2">Normal type speed</p>
    <label class="switch">
      <input type="checkbox" v-model="checked" @change="check()" />
      <div></div>
    </label>
    <p class="ms-2">Fast type speed</p>
  </div>
</template>

<script>
export default {
  name: "toogle-switch",
  data() {
    return {
      checked: null,
    };
  },
  created () {
    this.init();
  
  },
  methods: {
    init() {
      this.checked = JSON.parse(localStorage.getItem('fastType')) || false;
    },
    check() {
        localStorage.setItem('fastType', this.checked);
        this.$emit('myEvent', this.checked);
      }
    
  },
};
</script>

<style scoped>
/** Switch
 -------------------------------------*/

.switch input {
  position: absolute;
  opacity: 0;
}

/**
 * 1. Adjust this to size
 */

.switch {
  display: inline-block;
  font-size: 20px; /* 1 */
  height: 1em;
  width: 2em;
  background: #bdb9a6;
  border-radius: 1em;
}

.switch div {
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background: #fff;
  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
  -webkit-transition: all 300ms;
  -moz-transition: all 300ms;
  transition: all 300ms;
}

.switch input:checked + div {
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
</style>
<template v-code>
  <pre class="d-flex m-0 font-weight-bold fs-6 text-white overflow-auto m-0">
      <code class="typer">{{ text }}</code>
  </pre>
</template>

<script>
export default {
  name: "typist",

  props: {
    typeInterval: {
      type: Number,
      required: false,
      default: 50,
    },

    words: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      text: "",
      index: 0,
    };
  },

  mounted() {
    this.addLetter();
  },

  methods: {
    addLetter() {
      if (this.words.length > 0) {
        let wordCurrent = [this.words];

        const nextLetter = wordCurrent[this.index][this.text.length];

        // Adds the next letter in a word
        this.text = this.text + nextLetter;

        if (!(this.text === wordCurrent[this.index])) {
          setTimeout(this.addLetter, this.typeInterval);
        }
      }
    },
    reset() {
      this.text = "";
      this.index = 0;
      this.addLetter();
    },
    shallowEquals(a1, a2) {
      if (a1.length !== a2.length) {
        return false;
      }

      for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
          return false;
        }
      }
      return true;
    },
  },

  watch: {
    words(newText, oldText) {
      if (newText === oldText || this.shallowEquals(newText, oldText)) {
        return;
      }
      this.reset();
    },
  },
};
</script>

<style scoped>
.typer {white-space: pre-line;}
</style>
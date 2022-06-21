<template>
  <section id="app" class="bg-light">
   
    <div id="home" class="home d-flex flex-column justify-content-between p-4 p-lg-0">
      <div class="container wrapper flex-grow-1">
         <nav-bar />
        <div class="row">
          <div class="col-md-4">
            <h1 class="h2 fw-bold">
              Liquid <span class="text-green-grad">Command</span> Explorer
            </h1>
            <p class="mb-5">
              {{
                locale == "en"
                  ? "Find the right commands you need without digging through the web."
                  : "Encuentre los comandos correctos que necesita"
              }}
            </p>
            <div class="">
              <p class="text-green-grad fw-bold">{{ locale == "en" ? " I want to:" : "Quiero:" }}</p>
              <v-select
                class="rounded-3 shadow-sm p-2"
                placeholder="..."
                :clearable="false"
                v-model="selectedFirst"
                :options="optionsFirst"
                label="label"
                @input="onFirstChange"
              >
              </v-select>

              <div v-if="showSecond">
                <v-select
                  class="rounded-3 shadow-sm p-2"
                  placeholder="..."
                  :clearable="false"
                  v-model="selectedSecond"
                  :options="optionsSecond[selectedFirst.value]"
                  label="label"
                  @input="onSecondChange"
                >
                </v-select>
              </div>

              <div v-if="showThird">
                <v-select
                  class="rounded-3 shadow-sm p-2"
                  placeholder="..."
                  :clearable="false"
                  v-model="selectedThird"
                  :options="optionsThird[selectedSecond.value]"
                  label="label"
                  @input="onThirdChange"
                >
                </v-select>
              </div>
            </div>
          </div>

          <div class="col-md-7 offset-md-1 mb-5  mb-lg-0">
            <p class="h5 mb-2">Snippet</p>

            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                snippet-code snippet-1
                mb-5
              "
            >
              <Typist :words="usage" />

              <button class="bg-transparent border-0" @click="onCopy">
                <svg
                  v-if="usage.length"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-copy"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path
                    d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                  ></path>
                </svg>
              </button>
            </div>

            <div v-if="nb.length">
              <p class="h5 mb-2">Nota</p>

              <div class="snippet-code snippet-2">
                <Typist :words="nb" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="d-flex justify-content-around">
        <p class="text-center">Made with <span>💚</span></p>
        <p>Based on Gitexplorer</p>
      </footer>
    </div>
  </section>
</template>
<script>
import NavBar from "./components/NavBar.vue";

import {
  optionsFirstES,
  optionsFirstEN,
  optionsSecondaryES,
  optionsSecondaryEN,
  optionsThirdES,
  optionsThirdEN,
} from "./data";

import Typist from "./components/Typist.vue";

export default {
  components: { NavBar, Typist },
  name: "App",
  data() {
    return {
      locale: "",
      optionsFirst: null,
      optionsSecond: null,
      optionsThird: null,
      selectedFirst: "",
      selectedSecond: "",
      selectedThird: "",
      showSecond: false,
      showThird: false,
      usage: "",
      nb: "",
    };
  },
  created() {
    this.translate();
  },

  methods: {
    translate() {
      this.locale = "es";
      //this.locale = window.navigator.languages[1];
      // window.location.href = `/${this.locale}`
      this.optionsFirst = this.locale == "en" ? optionsFirstEN : optionsFirstES;
      this.optionsSecond =
        this.locale == "en" ? optionsSecondaryEN : optionsSecondaryES;
      this.optionsThird = this.locale == "en" ? optionsThirdEN : optionsThirdES;
    },

    onFirstChange(selected) {
      if (this.optionsSecond[selected.value]) {
        this.usage = "";
        this.nb = "";
        this.showSecond = true;
        this.showThird = false;
        this.selectedSecond = "";
      }
    },

    onSecondChange(selected) {
      this.showThird = false;
      this.selectedThird = "";

      if (selected.nb) {
        this.usage = selected.usage;
        this.nb = selected.nb;
      } else if (this.optionsThird[selected.value]) {
        this.showThird = true;
        this.usage = "";
        this.nb = "";
      } else {
        this.usage = selected.usage;
        this.nb = "";
      }
    },

    onThirdChange(selected) {
      if (selected.nb) {
        this.usage = selected.usage;
        this.nb = selected.nb;
      } else {
        this.usage = selected.usage;
        this.nb = "";
      }
    },

    onCopy() {
      const selected = this.usage;
      navigator.clipboard.writeText(selected).then(() => {
        
      });
    },
  },
};
</script>

<style>
.home {
  height: 100vh;
}

.home .wrapper {
  padding-top: 10rem;
}

.text-green-grad {
   background: -webkit-linear-gradient(#3dc681, #36bc18);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* selects */

.v-select.vs--single.vs--searchable {
  margin-bottom: 1.5rem;
  background: #fff;
}

.vs--searchable .vs__dropdown-toggle {
  border: none;
}

.snippet-code {
  background: #292c33;
  border-radius: 1rem;
  border-left: 0.9rem solid #3dc681;
  padding: 2rem;
  transition: 0.3s background cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>

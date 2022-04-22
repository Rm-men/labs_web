<template>
<!-- eslint-disable max-len -->
    <div>
    <input id="input" type="number">
    <button id="send" v-on:click="Calculate">OK</button>
    <span id="result"></span>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
const inputs : HTMLInputElement = document.getElementById('input') as HTMLInputElement;
const sendBtn : HTMLButtonElement = document.getElementById('send') as HTMLButtonElement;
const resultText : HTMLSpanElement = document.getElementById('result') as HTMLSpanElement;

export default {
  components: {
  },
  props: {
    results: [],
  },
  methods: {
    Calculate() {
      if ('WebAssembly' in window) {
        console.log('+');
        //WebAssembly.instantiateStreaming(fetch('functions.wasm')) 
        fetch("functions.wasm")
        .then(respoonce)
          .then((bytes) => {
            WebAssembly.instantiate(bytes, importObject)

          })
          .then(result => {
              const number = inputs.value;
              const results = result.instance.exports.factorial(number);
              resultText.innerHTML = results;
          })
          .catch(console.error);
      }
    },
  },
};
</script>

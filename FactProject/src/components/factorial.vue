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
import factorial from "./functions.wasm";
import * as factorials from "./functions";
const inputs : HTMLInputElement = document.getElementById('input') as HTMLInputElement;
const sendBtn : HTMLButtonElement = document.getElementById('send') as HTMLButtonElement;
const resultText : HTMLSpanElement = document.getElementById('result') as HTMLSpanElement;
let instance = {
  ready: new Promise<void>(resolve => {
    factorial({
      onRuntimeInitialized() {
        instance = Object.assign(this, {
          ready: Promise.resolve()
      });
      resolve();
    }
  })
  })
}

export default {
  data () {
    return {result : null}
  },
  
  components: {
  },
  props: {
    results: [],
  },
  methods: {
    Calculate() {
      instance.ready.then(_ => this.result = instance._factorial(3))
      // if ('WebAssembly' in window) {
      //   console.log('+');
      //   //WebAssembly.instantiateStreaming(fetch('functions.wasm')) 
      //   fetch("functions.wasm")
      //   .then(respoonce => respoonce.arrayBuffer())
      //     .then((bytes) => {
      //       WebAssembly.instantiate(bytes, importObject)
      //     })
      //     .then(result => {
      //         const number = inputs.value;
      //         const results = result.instance.exports.factorial(number);
      //         resultText.innerHTML = results;
      //     })
      //     .catch(console.error);
      // }
    },
  },
};
</script>

function importObject(bytes: ArrayBuffer, importObject: any) {
	throw new Error('Function not implemented.');
}

function importObject(bytes: ArrayBuffer, importObject: any) {
	throw new Error('Function not implemented.');
}

function importObject(bytes: ArrayBuffer, importObject: any) {
	throw new Error('Function not implemented.');
}

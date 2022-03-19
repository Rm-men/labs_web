<template>
<!-- eslint-disable max-len -->
<div class="wrapper">
<form>
    <div class="login-text">
          <input type="text" id="pass-mobile" placeholder="Логин" class="pas_box">
        <div class="password pasw_label">
          <input type="text" id="pass-mobile" placeholder="Пароль" class="pas_box">
          <button v-on:click="changeVis" id="password-mobile"
            class="password-">
            <img src="https://snipp.ru/demo/495/no-view.svg" Width="25" Height="25">
          </button>
        </div>
    </div>
</form>
 </div>
<!-- eslint-enable max-len -->
</template>

<script>
import { defineComponent } from 'vue';

export default {
  data() {
    return {
    };
  },
  methods: {
    changeVis() {
      this.hide = !this.hide;
      const pass = document.querySelector('.pas_box');
      const btn = document.querySelector('.password-control');
      if (pass.type === 'text') {
        pass.type = 'password';
      } else {
        pass.type = 'text';
      }
    },
  },
};
</script>
<style>

</style>

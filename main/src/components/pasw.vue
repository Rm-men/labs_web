<template>
    <div id="">
  <input :type="passwordFieldType" v-model="password">
  <button type="password" @click="switchVisibility">show / hide</button>

    </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      passwordFieldType: 'password',
    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
      this.style.background = 'url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat';
    },
  },
};
</script>

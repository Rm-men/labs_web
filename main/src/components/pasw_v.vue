<template>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          :type="pwdType"
          auto-complete="off"
          placeholder="пароль"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
          <svg-icon :icon-class="eyeType" slot="suffix" class="el-input__icon input-icon" @click="changeType()" />
        </el-input>
      </el-form-item>
</template>

<script lang="ts">

import VuePassword from 'vue-password';

export default {
  components: {
    VuePassword,
  },
  props: {
    results: [],
  },
};
</script>

<template>
<!-- eslint-disable max-len -->
    <div id="MainBlock" class="right">
        <stats-bars></stats-bars>
    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import StatsBars from './statsBar.vue';

const url = 'http://localhost:8080/admission/';

export default Vue.extend({
  components: {
    StatsBars,
  },
});
</script>

<style >
</style>

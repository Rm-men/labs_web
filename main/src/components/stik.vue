<template>
<!-- eslint-disable max-len -->
    <div class="stick">

    </div>
<!-- eslint-enable max-len -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

const url = 'http://localhost:8080/admission/';

export default Vue.extend({
  name: 'App',
  props: {
  },
  components: {
  },
});
</script>

<style >
    .stick {
        width: 4px;
        height: 348px;
        left: 490px;
        top: 584px;
        color: #6C6CEA;
        background: #6C6CEA;
    }
     @media (max-width: 765px) {
.stick{
        width: 85vw;
        height: 4px;
        margin: 150px;
}}

</style>

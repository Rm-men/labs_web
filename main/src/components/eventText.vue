 <template>
<!-- eslint-disable -->
    <div class="eventBlock">
        <p class="textTasksDate textEventMargin">08/01 - 19:00 - 20:00</p>
        <p class="textEventBig textEventMargin">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default Vue.extend({
  name: 'App',
  props: {
  },
  components: {
  },
});
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
    .r {
        float: right;
    }
        .textTasksDate{
font-family: 'Roboto Slab';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
/* identical to box height */

display: flex;
align-items: center;
text-align: justify;

color: #6C6CEA;
    }
    .textEventMargin {
        margin-left: 11px;
        margin-top: 6px;;
        margin-bottom: 11px;
    }
    .textTextBig {
        font-family: 'Roboto Slab', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        /* identical to box height */
        display: flex;
        align-items: center;
        text-align: center;
        color: #333333;
    }
    .eventBlock {
width: 220px;
height: 73px;
        background: #FFFFFF;
        border-radius: 10px;
    }
        .textEventBig {
font-family: 'Roboto Slab';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
color: #333333;
    }
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;900&display=swap');
</style>

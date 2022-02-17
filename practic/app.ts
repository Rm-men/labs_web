//import createApp from 'Vue';
declare let Vue: any;
const app = Vue.createApp({
    data() {
        return {
            Name: 'Роман',
            Family: 'Суслов',
            Patronomic: 'Владимирович',
        }
    },
}).mount('#app');
//import createApp from 'Vue';
//declare let Vue: any;
const App2 = Vue.createApp({
  data() {
    return {
      firstName: "Роман",
      lastName: "Суслов",
      middleName: "Владимирович",
    };
  },
  template: `<div>{{ lastName }} {{ firstName }} {{ middleName }}</div>`,
}).mount("#app");

// declare var Vue: any;
// const App2 = Vue.createApp({});
// App2.component("naming", {
// data() {
// return {
// firstName: "Роман",
// lastName: "Суслов",
// middleName: "Владимирович",
// };
// },
// template: `<div>{{ lastName }} {{ firstName }} {{ middleName }}</div>`,
// });
// App2.mount("#app");

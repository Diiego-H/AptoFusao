import Navbar from "./components/Navbar.js";
import Tabbar from "./components/Tabbar.js";
import Search from "./components/Search.js";
import Modal from "./components/Modal.js";
import RutinaTab from "./components/RutinaTab.js";

import Menjar1 from "./components/Menjar1.js";
import Exercicis from "./components/Exercicis.js";
import Squats from "./components/Squats.js";
import Home from "./components/Home.js";
import Nutricio from "./components/Nutricio.js";
import Fruita from "./components/Fruita.js";
import Mango from "./components/Mango.js";

//import router from '@/router';

const routes = [
  {path: '/rutina', component: RutinaTab },
  {path: "/exercicis", component: Exercicis},
  {path: '/exercicis/squats', component: Squats},
  {path: '/nutricio', component: Nutricio},
  {path: '/nutricio/fruita', component: Fruita},
  {path: '/nutricio/fruita/mango', component: Mango},
  {path: '/', component: Home },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,

  scrollBehavior (to, from, savedPosition) {
    return {top: 0};
  }
})



const app = Vue.createApp({
    components:{
      Navbar,
      Tabbar,
      Search,
      Modal,
      RutinaTab,
      Menjar1,
      Exercicis,
      Squats,
    },

    data() {
      return {
        message: "Hello World!",
        showModal: false,
        
        
        title1:"Pollastre",
        title2:"Filet de porc",
        title3:"Mango",
        title4:"Plàtan",
        title5:"Poma",
        title6:"Pera",
        title7:"Mandarina",
        title8:"Meló",
        title9:"Síndria",
        title10:"Préssec",
        title11:"Caqui",
        title12:"Raïm",
        title13:"Taronja",
        title14:"Papaia",

        grams: "100",
        kcal1: "100",
        carbs1: "0",
        fat1: "10",
        protein1: "10",

        kcal2: "88",
        carbs2: "30",
        fat2: "1",
        protein2: "3",

        kcal3: "150",
        carbs3: "40",
        fat3: "0",
        protein3: "1",

        carbs4: "55",
        carbs5: "60",
        carbs6: "35",
        carbs7: "50",

        kcal4: "133",
        kcal5: "60",
        kcal6: "155",
        kcal7: "200",
        kcal8: "230",
    
      };
    },
  });

app.use(router);

app.mount("#app");
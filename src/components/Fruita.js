import Modal from "./Modal.js";
import Search from "./Search.js";
import Menjar1 from "./Menjar1.js";



export default {
    components: {
        Modal,
        Search,
        Menjar1,
    },

    data() {
        return {
            

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
            aliments_list:[{"text":"Patata"},
            {"text":"Poma"},
            {"text":"Pastanaga"},
            {"text":"Pollastre"},
            {"text":"Llet"},
            {"text":"Mango"},
            {"text":"Raïm"},
            {"text":"Taronja"},
            {"text":"Platan"},
            {"text":"Pera"},
            {"text":"Mandarina"},
            {"text":"Meló"},
            {"text":"Síndria"},
            {"text":"Pressec"},
            {"text":"Acedia"},    
            {"text":"Albergínia"},    
            {"text":"All"},    
            {"text":"Aranya"},    {"text":"Bacallà"},    {"text":"Berenjena"},    {"text":"Bleda"},    {"text":"Broquil"},    {"text":"Carabassa"},    {"text":"Ceba"},    {"text":"Ceps"},    {"text":"Cervell"},    {"text":"Cirera"},    {"text":"Citronella"},    {"text":"Cogombre"},    {"text":"Col"},    {"text":"Coliflor"},    {"text":"Coneixement"},    {"text":"Corb"},    {"text":"Esparrec"},    {"text":"Espinac"},    {"text":"Formatge"},    {"text":"Fruita de la passió"},    {"text":"Gambes"},    {"text":"Gira-sol"},    {"text":"Gra"},    {"text":"Grelo"},    {"text":"Groc"},    {"text":"Herba dolça"},    {"text":"Kiwi"},    {"text":"Llenties"},    {"text":"Mandonguilla"},      {"text":"Mel"},    {"text":"Meló"},    {"text":"Mocador"},    {"text":"Nabiu"},    {"text":"Nou"},    {"text":"Oli"},    {"text":"Oliva"},    {"text":"Ostra"},    {"text":"Pebrot"},    {"text":"Peix"},    {"text":"Pinya"},    {"text":"Porc"},    {"text":"Pota blava"},    {"text":"Ratafia"},    {"text":"Rúcula"},    {"text":"Safata"},    {"text":"Tomàquet"}]
            
        }
    },

    methods:{
        changeStyle(button) {        
            const remainingText = button.textContent.slice(1);
            if (button.classList.contains("button-green")) {
                button.classList.remove("button-green");
                button.classList.add("button-blue");
                button.textContent = "+" + remainingText;
            } else {
                button.classList.remove("button-blue");
                button.classList.add("button-green");
                button.textContent = "-" + remainingText;
            }                                                       
        },
        searchResults(list, searchText) {
            if (searchText=="Mango" || searchText=="mango" ){
                this.$router.push("/nutricio/fruita/mango");
            }else{
                this.showModal=true;
            }
        },
    },

    mounted() {
        document.addEventListener('click', this.away);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.away);
    },

    template: `
    <ul class="breadcrumb">
        <li><router-link to="/">Aptofusao</router-link></li>
        <li><router-link to="/nutricio">Nutrició</router-link></li>
        <li>Fruita</li>
    </ul>
    <div class="container" id="exercicisGeneral">
    <div class="contenidor_search">
        <Search place-holder-text="Busca a aliments" :results-list="aliments_list" @search-results="searchResults"></Search>
        </div>
        <div style="padding: 10px;"></div>
        
        <!--<div style="display: flex; align-items: center; justify-content: center; ">Filtres no funcionals</div>-->
        <div class="button-box">
            <button class="button button-blue" @click="changeStyle($event.target)">+ Vegà          </button>
            <button class="button button-blue" @click="changeStyle($event.target)">+ Sense Gluten  </button>
            <button class="button button-blue" @click="changeStyle($event.target)">+ 0 Carbs       </button>
            <button class="button button-blue" @click="changeStyle($event.target)">+ Keto          </button>
            <button class="button button-blue" @click="changeStyle($event.target)">+ Baix en greixos</button>
          </div>


        <br>

        <div class="gallery2">
        
            <div class="gallery2-item" data-id="1">
            <router-link to="" class="link-style">            
                <Menjar1 :title="title12" :grams="grams" :protein="protein1" :fat="fat2" :carbs="carbs1" :kcal="kcal1"/>
                <!--<div class="overlay"></div> -->
                </router-link>
              </div>
            <div class="gallery2-item" data-id="2">
            <router-link to="" class="link-style">
                <Menjar1 :title="title13" :grams="grams" :protein="protein2" :fat="fat1" :carbs="carbs2" :kcal="kcal2"/>
                <!--<div class="overlay"></div> -->
                </router-link>
            </div>
            <div class="gallery2-item" data-id="3" >
                <router-link to="/nutricio/fruita/mango" class="link-style">
                    <Menjar1 :title="title3" :grams="grams" :protein="protein1" :fat="fat2" :carbs="carbs3" :kcal="kcal3"><Menjar1/>
                    <!--<div class="overlay"></div> -->
                </router-link>
            </div>
            <div class="gallery2-item" data-id="4">
            <router-link to="" class="link-style">
                <Menjar1 :title="title4" :grams="grams" :protein="protein1" :fat="fat1" :carbs="carbs4" :kcal="kcal4"><Menjar1/>
                <!--<div class="overlay"></div> -->
                </router-link>
            </div>
            <div class="gallery2-item" data-id="5">
            <router-link to="" class="link-style">
                <Menjar1 :title="title5" :grams="grams" :protein="protein3" :fat="fat3" :carbs="carbs5" :kcal="kcal5"><Menjar1/>
                <!--<div class="overlay"></div> -->
                </router-link>
            </div>
            <div class="gallery2-item" data-id="6">
            <router-link to="" class="link-style">
                <Menjar1 :title="title6" :grams="grams" :protein="protein1" :fat="fat1" :carbs="carbs5" :kcal="kcal6"><Menjar1/>
                <!--<div class="overlay"></div> -->
                </router-link>
            </div>
            <div class="gallery2-item" data-id="7">
            <router-link to="" class="link-style">
                <Menjar1 :title="title7" :grams="grams" :protein="protein3" :fat="fat3" :carbs="carbs6" :kcal="kcal7"><Menjar1/>
                <!--<div class="overlay"></div> --> 
                </router-link>
            </div>
            <div class="gallery2-item" data-id="8">
            <router-link to="" class="link-style">
                <Menjar1 :title="title8" :grams="grams" :protein="protein1" :fat="fat2" :carbs="carbs7" :kcal="kcal8"><Menjar1/>
                <!--<div class="overlay"></div> -->
                </router-link>
            </div>
            <div class="gallery2-item" data-id="9">
            <router-link to="" class="link-style">
                <Menjar1 :title="title9" :grams="grams" :protein="protein2" :fat="fat1" :carbs="carbs3" :kcal="kcal3"><Menjar1/>
                <!--<div class="overlay"></div> --> 
                </router-link>
            </div>
            <div class="gallery2-item" data-id="10">
            <router-link to="" class="link-style">
                <Menjar1 :title="title10" :grams="grams" :protein="protein1" :fat="fat1" :carbs="carbs5" :kcal="kcal8"><Menjar1/>
                <!--<div class="overlay"></div> -->
                </router-link>
            </div>
  
            
          </div>
            
        
    </div>
    <div style="padding: 10px;"></div>
    `

}
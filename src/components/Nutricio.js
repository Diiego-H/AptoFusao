import Modal from "./Modal.js";
import Search from "./Search.js";



export default {
    components: {
        Modal,
        Search,
    },

    data() {
        return {
            img_cos:"./images/cos.png",
            hover_img_cos:"data:,",
            hover_img_opacity: 0,
            drop_text:"Totes les parts",
            active: false,
            showModal: false,
            
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
        

        toggle() {
            this.active = !this.active;
        },

        away(event) {
            if (!event.target.matches('.dropbtn') && !event.target.matches('#exercicis-caret-down')) {
                this.active = false;
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
        <li>Nutrició</li>
    </ul>
    <div class="container" id="exercicisGeneral">
        <div class="contenidor_search">
            <Search place-holder-text="Busca a aliments" :results-list="aliments_list" @search-results="searchResults"></Search>
        </div>
        <Modal v-if="showModal" @close="showModal = false"></Modal>
        <div class="gallery">
          <div class="gallery-item" data-id="1" @click="showModal = true">
            <img src="./images/nutricio/beguda.png">
            <div class="overlay">
            </div>
          <h3>Beguda</h3>
          </div>
          <div class="gallery-item" data-id="2" @click="showModal = true">
            <img src="./images/nutricio/carn.png" alt="Image 2">
            <div class="overlay">
              
            </div>
          <h3>Carn</h3>
          </div>
          <div class="gallery-item" data-id="3" @click="showModal = true">
            <img src="./images/nutricio/cereals2.png" alt="Image 3">
            <div class="overlay">             
            </div>
          <h3>Cereals</h3>
          </div>
          <div class="gallery-item" data-id="4" @click="showModal = true">
            <img src="./images/nutricio/dolços.png" alt="Image 4">
            <div class="overlay">
            </div>
          <h3>Dolços</h3>
          </div>
          <div class="gallery-item" data-id="5">
            <router-link to="/nutricio/fruita">
            <img src="./images/nutricio/fruita2.png" alt="Image 5">
            <div class="overlay">
            </div>
            </router-link>
          <h3>Fruita</h3>
          </div>
          <div class="gallery-item" data-id="6" @click="showModal = true">
            <img src="./images/nutricio/lactics5.png" alt="Image 6">
            <div class="overlay">
            </div>
          <h3>Làctics</h3>
          </div>
          <div class="gallery-item" data-id="7" @click="showModal = true">
            <img src="./images/nutricio/llegums2.png" alt="Image 7">
            <div class="overlay">
            </div>
          <h3>Llegums</h3>
          </div>
          <div class="gallery-item" data-id="8" @click="showModal = true">
            <img src="./images/nutricio/ous4.png" alt="Image 8">
            <div class="overlay">
            </div>
          <h3>Ous</h3>
          </div>
          <div class="gallery-item" data-id="9" @click="showModal = true">
            <img src="./images/nutricio/salses.png" alt="Image 9">
            <div class="overlay">
            </div>
          <h3>Salses/Espècies</h3>
          </div>
          <div class="gallery-item" data-id="10" @click="showModal = true">
            <img src="./images/nutricio/verdura3.png" alt="Image 10">
            <div class="overlay">
            </div>
          <h3>Verdura</h3>
          </div>

        </div>
        
    </div>
    <div style="padding: 10px;"></div>
    `

}
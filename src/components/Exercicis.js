import Modal from "./Modal.js";
import Search from "./Search.js";

class ExerciciItem{
    constructor(text, reps, data, img){
        this.text = text;
        this.reps = reps;
        this.data = data;
        this.img = img;
    }
}

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

            abdominalsList: [
                new ExerciciItem("Crunch estàndard", "2 sèries - 10 reps", "Esforç moderat - Esterilla", "./images/crunch.png"),
                new ExerciciItem("Elevació de cames", "3 sèries - 10 reps", "Esforç elevat - Esterilla", "./images/elevacio.png"),
                new ExerciciItem("Planxa lateral", "1 sèrie - 30 segons", "Esforç moderat - Esterilla", "./images/planxa_lateral.jpg"),
            ],

            squatsList: [
                new ExerciciItem("Esquats estàndard", "2 sèries - 20 reps", "Esforç moderat - Sense material", "./images/squats.png"),
            ],

            gluteosList: [
                new ExerciciItem("Aixecament de cames amb banda", "2 sèries - 10 reps", "Esforç moderat - Banda elàstica", "./images/cames_banda.jpg"),
                new ExerciciItem("Pont de glutis", "2 sèries - 30 reps", "Esforç baix - Esterilla", "./images/pont_glutis.jpg"),
            ],

            pectoralsList: [
                new ExerciciItem("Press banca ", "2 sèries - 10 reps", "Esforç moderat - Banc i barra", "./images/press.png"),
                new ExerciciItem("Apertures de pit", "3 sèries - 10 reps", "Esforç moderat - Gimnàs", "./images/apertura_pit.png"),
                new ExerciciItem("Aleteig amb cable", "2 sèries - 10 reps", "Esforç moderat - Cables amb pes", "./images/cable.png"),
            ],

            esquenaList: [
                new ExerciciItem("Rem amb manuella", "2 sèries - 10 reps", "Esforç moderat - Manuelles", "./images/rem_manuella.png"),
                new ExerciciItem("Dominada", "2 sèries - 10 reps", "Esforç moderat - Barra de dominada", "./images/dominada.png"),
                new ExerciciItem("Rem invertit", "3 sèries - 10 reps", "Esforç moderat - Cintes de suspensió", "./images/rem_invertit.png"),
            ],

            camesList: [
                new ExerciciItem("Step up", "3 sèries - 10 reps", "Esforç moderat - Plataforma Step", "./images/step-up.png"),
                new ExerciciItem("Gambada lateral", "2 sèries - 10 reps", "Esforç moderat - Sense material", "./images/gambada.png"),
                new ExerciciItem("Extensió de cames", "2 sèries - 10 reps", "Esforç moderat - Banc de cames", "./images/extensio_cames.png"),
            ],

            bracosList: [
                new ExerciciItem("Flexions de diamant", "2 sèries - 10 reps", "Esforç elevat - Sense material", "./images/flexions.png"),
                new ExerciciItem("Curl de bíceps", "2 sèries - 10 reps", "Esforç moderat - Manuelles", "./images/curl.png"),
                new ExerciciItem("Dip de tríceps", "3 sèries - 10 reps", "Esforç moderat - Banc", "./images/dip.png"),
            ],

            completeList: null,
            exercicisList: null,
        }
    },

    methods:{
        changeImg(img, text){
            this.img_cos = img;
            this.drop_text = text;
            if (text == "Abdominals") {
                this.exercicisList = this.abdominalsList;
            } else if (text == "Glutis") {
                this.exercicisList = this.gluteosList.concat(this.squatsList);
            } else if (text == "Pectorals") {
                this.exercicisList = this.pectoralsList;
            } else if (text == "Esquena") {
                this.exercicisList = this.esquenaList;
            } else if (text == "Cames") {
                this.exercicisList = this.camesList.concat(this.squatsList);
            } else if (text == "Braços") {
                this.exercicisList = this.bracosList;
            } else {
                this.exercicisList = this.completeList;
            }
        },

        changeHoverImg(img, opacity){
            this.hover_img_cos = img;
            this.hover_img_opacity = opacity;
        },

        toggle() {
            this.active = !this.active;
        },

        away(event) {
            if (!event.target.matches('.dropbtn') && !event.target.matches('#exercicis-caret-down')) {
                this.active = false;
            }
        },

        searchResults(list, searchText) {
            this.drop_text = "Resultat de la cerca '" + searchText + "'";
            this.img_cos = "./images/cos.png";
            this.exercicisList = list;
        },
    },

    created() {
        this.completeList = this.abdominalsList.concat(this.gluteosList, this.pectoralsList, this.esquenaList, this.camesList, this.squatsList, this.bracosList);
        this.exercicisList = this.completeList;
    },

    mounted() {
        document.addEventListener('click', this.away);

        /*
        fetch("../data.json")
        .then(response =>{
            return response.json();
        })
        .then(data => {
            this.searchExercicisList = data["searchExercises"];
        })*/

    },
    beforeDestroy() {
        document.removeEventListener('click', this.away);
    },

    template: `
    <ul class="breadcrumb">
        <li><router-link to="/">Aptofusao</router-link></li>
        <li>Exercicis</li>
    </ul>
    <div class="container" id="exercicisGeneral">
        <div class="row">
            <div class="col-lg" id="exercicisHeader">
                <Search place-holder-text="Busca a exercicis" :results-list="completeList" @search-results="searchResults"></Search>
            </div>
        </div>
        <Modal v-if="showModal" @close="showModal = false"></Modal>
        <div class="row">
            <div class="col-xl-6">
            <div class="d-none d-md-block">
                Selecciona la part del cos que vols treballar
                <div class="imgMapContainer">
                    <img v-bind:src="hover_img_cos" v-bind:style="{ opacity:  hover_img_opacity }" id="hoverImg" usemap="#cosMap" >
                    <img v-bind:src="img_cos" alt="Musculs" usemap="#cosMap" >

                    <map name="cosMap">
                        <area target="" alt="Abdominals" title="Abdominals" style="cursor: pointer" v-on:click="changeImg('./images/abdominals.png', 'Abdominals')" v-on:mouseover="changeHoverImg('./images/abdominals.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)"  coords="113,132,135,142,150,137,169,140,188,133,180,179,182,190,167,224,153,248,150,251,133,217,120,190,122,175" shape="poly">
                        <area target="" alt="Glutis" title="Glutis" style="cursor: pointer" v-on:click="changeImg('./images/gluteos.png', 'Glutis')" v-on:mouseover="changeHoverImg('./images/gluteos.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="345,200,331,243,354,257,381,249,411,259,433,241,414,199,397,199,382,207,362,196" shape="poly">
                        <area target="" alt="Pectorals" title="Pectorals" style="cursor: pointer" v-on:click="changeImg('./images/pectorals.png', 'Pectorals')" v-on:mouseover="changeHoverImg('./images/pectorals.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="109,115,112,130,137,139,166,138,186,134,193,118,178,86,124,86" shape="poly">
                        <area target="" alt="Esquena" title="Esquena" style="cursor: pointer" v-on:click="changeImg('./images/esquena.png', 'Esquena')" v-on:mouseover="changeHoverImg('./images/esquena.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="347,194,365,192,381,200,398,194,413,194,408,181,420,108,401,86,358,86,340,106,355,176" shape="poly">
                        <area target="" alt="Esquena" title="Esquena" style="cursor: pointer" v-on:click="changeImg('./images/esquena.png', 'Esquena')" v-on:mouseover="changeHoverImg('./images/esquena.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="123,84,130,88,144,87,150,91,157,88,171,87,177,84,166,79,161,71,151,77,140,70,139,77,132,82" shape="poly">
                        <area target="" alt="Cames" title="Cames" style="cursor: pointer" v-on:click="changeImg('./images/cames.png', 'Cames')" v-on:mouseover="changeHoverImg('./images/cames.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="118,193,146,254,148,295,141,313,142,338,145,363,140,396,140,426,134,437,129,440,117,438,129,419,128,406,115,364,116,351,120,333,120,317,105,276,100,253,101,238,109,207" shape="poly">
                        <area target="" alt="Cames" title="Cames" style="cursor: pointer" v-on:click="changeImg('./images/cames.png', 'Cames')" v-on:mouseover="changeHoverImg('./images/cames.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="155,251,184,191,195,213,201,240,201,256,191,293,179,322,184,345,187,361,174,406,171,417,185,436,182,440,169,440,161,426,163,408,160,379,157,362,158,349,161,326,159,315,154,293" shape="poly">
                        <area target="" alt="Cames" title="Cames" style="cursor: pointer" v-on:click="changeImg('./images/cames.png', 'Cames')" v-on:mouseover="changeHoverImg('./images/cames.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="332,250,353,262,373,254,377,292,369,314,373,358,370,423,357,424,358,404,346,365,351,322" shape="poly">
                        <area target="" alt="Cames" title="Cames" style="cursor: pointer" v-on:click="changeImg('./images/cames.png', 'Cames')" v-on:mouseover="changeHoverImg('./images/cames.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="386,255,411,263,432,252,410,320,416,355,403,422,392,422,393,388,387,361,392,325,384,293" shape="poly">
                        <area target="" alt="Braços" title="Braços" style="cursor: pointer" v-on:click="changeImg('./images/bracos.png', 'Braços')" v-on:mouseover="changeHoverImg('./images/bracos.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="58,217,64,226,100,178,100,165,110,147,106,115,119,85,105,82,94,94,96,118,87,142,86,159" shape="poly">
                        <area target="" alt="Braços" title="Braços" style="cursor: pointer" v-on:click="changeImg('./images/bracos.png', 'Braços')" v-on:mouseover="changeHoverImg('./images/bracos.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="182,87,194,82,205,92,209,123,214,143,213,157,226,177,245,222,238,226,204,185,202,166,192,150,196,118" shape="poly">
                        <area target="" alt="Braços" title="Braços" style="cursor: pointer" v-on:click="changeImg('./images/bracos.png', 'Braços')" v-on:mouseover="changeHoverImg('./images/bracos.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="289,218,294,225,329,182,330,163,341,142,336,104,353,87,330,86,322,96,324,122,316,144,316,158" shape="poly">
                        <area target="" alt="Braços" title="Braços" style="cursor: pointer" v-on:click="changeImg('./images/bracos.png', 'Braços')" v-on:mouseover="changeHoverImg('./images/bracos.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" coords="406,89,421,82,433,90,440,107,438,123,445,143,446,162,457,180,471,216,466,226,444,196,436,185,433,162,425,155,421,126,423,106" shape="poly">
                    </map>
                    
                </div>
            </div>
            </div>
            <div class="col-xl-6">
                <div class="row" id="dropdownContainer">
                    <button v-on:click="toggle" class="dropbtn"> {{drop_text}} <i class="fa fa-caret-down" id="exercicis-caret-down"></i></button>
                    <ul v-if="active" id="dropdownExercicis">
                        <li v-on:click="changeImg('./images/abdominals.png', 'Abdominals')" v-on:mouseover="changeHoverImg('./images/abdominals.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" class="dropdown-item">Abdominals</li>
                        <li v-on:click="changeImg('./images/gluteos.png', 'Glutis')" v-on:mouseover="changeHoverImg('./images/gluteos.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" class="dropdown-item">Glutis</li>
                        <li v-on:click="changeImg('./images/pectorals.png', 'Pectorals')" v-on:mouseover="changeHoverImg('./images/pectorals.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" class="dropdown-item">Pectorals</li>
                        <li v-on:click="changeImg('./images/esquena.png', 'Esquena')" v-on:mouseover="changeHoverImg('./images/esquena.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" class="dropdown-item">Esquena</li>
                        <li v-on:click="changeImg('./images/cames.png', 'Cames')" v-on:mouseover="changeHoverImg('./images/cames.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" class="dropdown-item">Cames</li>
                        <li v-on:click="changeImg('./images/bracos.png', 'Braços')" v-on:mouseover="changeHoverImg('./images/bracos.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" class="dropdown-item">Braços</li>
                        <hr class="dropdown-divider">
                        <li v-on:click="changeImg('./images/cos.png', 'Totes les parts')" v-on:mouseover="changeHoverImg('./images/cos.png', 0.3)" v-on:mouseout="changeHoverImg('./images/cos.png', 0)" class="dropdown-item">Totes les parts</li>
                    </ul>
                </div>
                <div id="exercicisContainer">
                    <div v-for="obj in exercicisList" class="exerciciItem">
                        <router-link to="/exercicis/squats" v-if="obj.text == 'Esquats estàndard'" class="row" style="text-decoration: none" exact>
                            <div class="col-3 exerciciImgContainer" >
                                <img v-bind:src="obj.img" class="exerciciImg" />
                            </div>
                            <div class="col-9">
                                <div id="nameExercici">
                                    {{ obj.text }}
                                </div>
                                <div id="repsExercici">
                                    {{ obj.reps }}
                                </div>
                                <div id="dataExercici">
                                    {{ obj.data }}
                                </div>
                            </div>
                        </router-link>
                        <div v-else @click="showModal = true" class="row" style="text-decoration: none">
                            <div class="col-3 exerciciImgContainer">
                                <img v-bind:src="obj.img" class="exerciciImg">
                            </div>
                            <div class="col-9">
                                <div id="nameExercici">
                                    {{ obj.text }}
                                </div>
                                <div id="repsExercici">
                                    {{ obj.reps }}
                                </div>
                                <div id="dataExercici">
                                    {{ obj.data }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

}
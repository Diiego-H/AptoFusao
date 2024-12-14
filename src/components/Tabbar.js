import Modal from "./Modal.js";

export default {
    props: {

    },

    data() {
        return {
            showModal: false,

            nav_item1:"Resum",
            nav_item2:"Nutrició",
            nav_item3:"Dieta",
            nav_item4:"Exercicis",
            nav_item5:"Rutina",

        }
    },

    components: {
        Modal,
    },

    template: `
    <Modal v-if="showModal" @close="showModal = false"></Modal>
    <nav class="tabbar d-flex justify-content-center">
        <div class="w-50">
        
            <ol class="nav nav-underline nav-fill">

                <a href="#" @click.prevent="showModal = true" class="nav-item nav-link">Resum</a>

                <router-link
                to="/nutricio"
                class="nav-item nav-link"
                active-class="active-tab"
                :class="$route.path.includes('nutricio') ? 'active-tab' : '' ">
                    Nutrició
                </router-link>


                <a href="#" @click.prevent="showModal = true" class="nav-item nav-link">Dieta</a>

                <router-link
                to="/exercicis"
                class="nav-item nav-link"
                active-class="active-tab"
                :class="$route.path.includes('exercicis') ? 'active-tab' : '' ">
                    Exercicis
                </router-link>
                <router-link
                to="/rutina"
                class="nav-item nav-link"
                active-class="active-tab">
                    Rutina
                </router-link>

            </ol>
        
        </div>
    </nav>
    `
}
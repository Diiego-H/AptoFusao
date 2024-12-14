import Modal from "./Modal.js";

export default {
    components: {
        Modal,
    },

    data() {
        return {
            showModal: false,

            search_placeholder: "Busca al web",
            search_button: "Busca",
            nav_item1: "Qui som",
            nav_item2: "F.A.Q",
            nav_item3: "Perfil",

        }
    },

    template: `
    <Modal v-if="showModal" @close="showModal = false"></Modal>
    <nav class="custom-navbar navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid d-flex">
            <img id="menuImg" src="./images/menu.png" alt="Menú accessibilitat" type="button" @click.prevent="showModal = true">
            <router-link to="/" class="navbar-brand ms-3 nav-item nav-link" exact>
                Aptofusao
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex ms-auto me-5">
                    <input class="form-control" type="search" :placeholder="search_placeholder" aria-label="Search">
                    <button id="search-icon" class="btn btn-outline-success" type="submit">{{search_button}}</button>
                </form>
            
                <ul class="navbar-nav mb-2 mb-lg-0 pe-1">
                    <li class="nav-item">
                        <a href="#" @click.prevent="showModal = true" class="nav-link active" aria-current="page">{{nav_item1}}</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" @click.prevent="showModal = true" class="nav-link active" aria-current="page">{{nav_item2}}</a>
                    </li>
                </ul>
                <img src="./images/profile.png" alt="Perfil" type="button" @click.prevent="showModal = true">
            </div>
        </div>
    </nav>
    `


}
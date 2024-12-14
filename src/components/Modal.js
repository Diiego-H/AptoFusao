export default {
    props: {
    },

    data() {
        return {
            title:"Funcionalitat en desenvolupament",
            text:"Ho sentim. Aquesta part del web està encara en desenvolupament.",
            exit:"Tanca",
        }
    },

    mounted() {
    },

    template: `
        <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <h4 class="modal-title">{{title}}</h4>
                </div>

                <div class="modal-body">
                <slot name="body">
                {{text}}
                </slot>
                </div>
    
                <div class="modal-footer">
                <slot name="footer">
                    <button class="modal-default-button" @click="$emit('close')">
                    {{exit}}
                    </button>
                </slot>
                </div>
            </div>
            </div>
        </div>
        </transition>
    `
}
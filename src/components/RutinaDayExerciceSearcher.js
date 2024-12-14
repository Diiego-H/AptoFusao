export default {
  
    props: {
        value: {
            type: String,
            required: false,
        },
        index: {
            type: Number,
            required: true,
        }
    },

    data() {
        return {
            searchText: this.value, 
            open: false,
            exercicesSearchResults: [
                "Abdominals",
                "Esquats",
                "Flexions",
                "Press militar",
                "Curl de bíceps",
            ],
        }
    },

    computed: {
        filteredList() {
            return this.exercicesSearchResults.filter(res => {
                return res.toLowerCase().includes(this.searchText.toLowerCase());
            })
        },
    },

    methods: {
        onInputFocusLost(){
            this.open = false;
        },
        
        onInputFocusGained(){
            this.open = true;
        },

        onTextInput(event){
            this.searchText = event.target.value;
            this.$emit('updateText', event.target.value, this.index);
        },
        searchItemClick(event, str){
            this.searchText = str;
            this.$emit('updateText', str, this.index);
        },
    },


    mounted() {
    },

    template: `
        <div class="position-relative">
            <input class="w-100" @blur="onInputFocusLost" :value="searchText"
                @focus="onInputFocusGained" @input="onTextInput">
            <div v-if="searchText.length > 0" :style="{'max-height': open ? '300px' : '0px' }" 
                id="day-input-search-dropdown" class="">
                <div v-for="str in filteredList" @mousedown="searchItemClick($event, str)" class="p-1">
                    <a>{{str}}</a>
                </div>
            </div>
        </div>
    `
}
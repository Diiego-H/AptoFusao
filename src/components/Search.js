class SearchResultItem{
    constructor(id, text, link, url){
        this.id = id;
        this.text = text;
        this.link = link;
        this.url = url;
    }
}

export default {
    props: {
        placeHolderText: {
            type: String,
            required: false, 
        },

        resultsList: {
            type: Array,
            required: false,
        }

    },

    data() {
        return {
            searchText: "",
            open: false,
        }
    },

    computed: {
        filteredList() {
            return this.resultsList.filter(res => {
                return res.text.toLowerCase().includes(this.searchText.toLowerCase());
            })
        }
    },

    methods: {
        onInputFocusLost(){
            this.open = false;
        },
        
        onInputFocusGained(){
            this.open = true;
        },

        onEnter() {
            if (this.searchText.length > 0) {
                this.$emit('searchResults', this.filteredList, this.searchText);
                this.searchText = "";
            }
        },

        elementSelected(element) {
            this.$emit('searchResults', [element], element.text);
            this.searchText = "";
        },
    },

    template: `
        <div id="searchWrapper" class="d-flex flex-column m-auto">
            <input v-model="searchText" v-on:keyup.enter="onEnter" :placeholder="placeHolderText" @blur="onInputFocusLost" @focus="onInputFocusGained">
            <div v-if="searchText.length > 0" :style="{'max-height': open ? '300px' : '0px' }" id="searchDropdown" class="">
                <div @mousedown="elementSelected(obj)" v-for="obj in filteredList" class="p-1">
                    <a :href="" target="_blank" role="button">{{obj.text}}</a>
                </div>
            </div>
            <button @click="onEnter" class="search-button">
                <img src="images/search_icon.svg" class="search-icon" />
            </button> 
        </div>
    `
}
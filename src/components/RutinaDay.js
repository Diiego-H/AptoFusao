import RutinaDayExerciceSearcher from "./RutinaDayExerciceSearcher.js";
export default {
    components: {
        RutinaDayExerciceSearcher,
    },
    props: {
        dayTitle: {
            type: String,
            required: true,
        },
        dayNumber: {
            type: [String, Number],
            required: true,
        },
        routine: {
            type: Array,
            required: false,
        },

    },

    data() {
        return {
            addText: "Afegeix un exercici",
            month: "Abril",
            year: "2023",
            editing: false,

            routineEdit: [],
            searchText:"", 
            open: false,
            exercicesSearchResults: [
                "Abdominals",
                "Esquats",
                "Flexions",
                "Press militar",
                "Curl de bíceps",
            ],
            saveErrorMessage: "",
            showSaveErrorMessage: false,
        }
    },

    computed: {
        
    },

    methods: {
        localRoutine(){
            this.routineEdit = this.routine.map(a => {return {...a}} );
        },
        cleanRoutineEdit(){
            this.routineEdit = [];
        },
        handleInputName(str, index){
            this.routineEdit[index].exName = str;
        },
        handleInputSeries(event, index){
            this.routineEdit[index].series = event.target.value;
        },
        handleInputReps(event, index){
            this.routineEdit[index].reps = event.target.value;
        },
        addExercice(){
            let newEx = {
                exName:"",
                series: 2,
                reps: 20
            }
            this.routineEdit.push(newEx);
        },
        removeExercice(event, index){
            this.routineEdit.splice(index, 1);
        },
        saveRoutine(){
            let emptyName = this.routineEdit.findIndex(ex => ex.exName=="");
            if(emptyName >= 0){
                this.saveErrorMessage = "Posa un nom a l'exercici " + (emptyName + 1) + ".";
                this.showSaveErrorMessage = true;
                setTimeout(() => this.showSaveErrorMessage = false, 2000);
                return;
            }
            this.$emit('updateExs', this.dayNumber, this.routineEdit); 
            this.editing = false;
        }
    },

    mounted() {
    },

    template: `
        <div class="col-3 me-2 one-day-wrapper">
            <div class="p-1">
                <strong>{{dayTitle}} - {{dayNumber}}</strong>
                <a>
                    <img src="images/edit_icon.svg" alt="edit icon" class="edit-icon" @click="editing = true; localRoutine()"/>
                </a>
            </div>

            
            <div v-if="!editing">
                <div v-for="(ex,index) in routine" class="my-2">

                    
                    <div class="row">
                        <div class="exercice-info col-6">
                            {{ex.exName}}
                        </div>

                        <div class="exercice-info col-3">
                            {{ex.series}} s.
                        </div>

                        <div class="exercice-info col-3">
                            {{ex.reps}} r.
                        </div>
                    </div>
                </div>
            </div>


                    
            <div v-else>
                    
                <div v-for="(ex,index) in routineEdit" class="my-2">
                        <div class="d-flex position-relative w-100">
                            <Rutina-Day-Exercice-Searcher class="px-2 exname-input" :value="ex.exName" :index="index" 
                            @update-text="handleInputName"/>
                            <input class="series-input" :value="ex.series" type="number" min="1" @input="handleInputSeries($event,index)">
                            <input class="reps-input" :value="ex.reps" type="number" min="1" @input="handleInputReps($event,index)">
                            <i class="fa fa-remove remove-exercice-icon" @click="removeExercice($event, index)"></i>

                        </div>
                </div>

            </div>
    



            <button v-if="editing" class="add-exercice-wrapper" @click="addExercice">
                <img src="images/add_icon.svg" alt="add icon" class="add-icon"/>
                {{addText}}
            </button>

            <div v-if="editing">
                <div class="row m-2">
                    <button class="col m-auto cancel-button mx-1" @click="editing = false; cleanRoutineEdit()">Cancel·lar</button>
                    <button class="col m-auto save-button mx-1" @click="saveRoutine()">
                        Guardar
                        <Transition name="error-text">
                            <div v-if="showSaveErrorMessage" class="save-error-text">
                                {{saveErrorMessage}}
                            </div>
                        </Transition>
                    </button>
                </div>
            </div>
        </div>
    `
}
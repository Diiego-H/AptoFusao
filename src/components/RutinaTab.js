import RutinaDay from "./RutinaDay.js";

export default {
    components: {
        RutinaDay,
    },
    
    props: {

    },

    data() {
        return {
            addText: "Afegeix un exercici",
            month: "Maig",
            year: "2023",

            monthRoutines: [
                [
                    {
                        day: new Date("2023-05-01"),

                        routine: [
                            {
                                exName: "Esquats",
                                series: "3",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-02"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                            {
                                exName: "Abdominals",
                                series: "1",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-03"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-04"),
                        routine: [
                            
                        ],
                    },
                    {
                        day: new Date("2023-05-05"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-06"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-07"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                ],
                [
                    {
                        day: new Date("2023-05-08"),

                        routine: [
                            {
                                exName: "Esquats",
                                series: "3",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-09"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-10"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-11"),
                        routine: [
                            
                        ],
                    },
                    {
                        day: new Date("2023-05-12"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-13"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-14"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                ],
                [
                    {
                        day: new Date("2023-05-15"),

                        routine: [
                            {
                                exName: "Esquats",
                                series: "3",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-16"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-17"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-18"),
                        routine: [
                            
                        ],
                    },
                    {
                        day: new Date("2023-05-19"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-20"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-21"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                ],
                [
                    {
                        day: new Date("2023-05-22"),

                        routine: [
                            {
                                exName: "Esquats",
                                series: "3",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-23"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-24"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-25"),
                        routine: [
                            
                        ],
                    },
                    {
                        day: new Date("2023-05-26"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-27"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-28"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                ],
                [
                    {
                        day: new Date("2023-05-29"),

                        routine: [
                            {
                                exName: "Esquats",
                                series: "3",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-30"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                    {
                        day: new Date("2023-05-31"),
                        routine: [
                            {
                                exName: "Esquats",
                                series: "2",
                                reps: "10",
                            },
                        ],
                    },
                ],


            ],
            
            weekTitles: [
            "Setmana 1 (del 1 al 7)",
            "Setmana 2 (del 8 al 14)",
            "Setmana 3 (del 15 al 21)",
            "Setmana 4 (del 22 al 28)",
            "Setmana 5 (del 29 al 31)",
            ]
            ,

            scrollLeftDisabled: Array(5).fill(true) ,
            scrollRightDisabled: Array(5).fill(false),

        }
    },

    computed: {

    },

    methods: {
        scrollRight(index) {
            this.$refs.dayswrapper[index].scrollTo({
                top: 0,
                left: Math.max(this.$refs.dayswrapper[index].scrollLeft += 260),
                behavior: "auto"
            });

        },

        scrollLeft(index) {
            this.$refs.dayswrapper[index].scrollTo({
                top: 0,
                left: Math.max(this.$refs.dayswrapper[index].scrollLeft -= 260),
                behavior: "auto"
            });
        },
        

        onScroll(event, index){
            if(event.target.offsetWidth + event.target.scrollLeft >= event.target.scrollWidth){
                this.scrollRightDisabled[index] = true;
                this.scrollLeftDisabled[index] = false;
            } 
            else if (event.target.scrollLeft <= 0) {
                this.scrollRightDisabled[index] = false;
                this.scrollLeftDisabled[index] = true;
            }
            else {
                this.scrollLeftDisabled[index] = false;
                this.scrollRightDisabled[index] = false;
            }   
        },

        getDayName(date){
            let num = date.getDay();
            switch(num){
                case 1:
                    return "Dilluns";
                    break;
                case 2:
                    return "Dimarts";
                    break;
                case 3:
                    return "Dimecres";
                    break;
                case 4:
                    return "Dijous";
                    break;
                case 5:
                    return "Divendres"
                    break;
                case 6:
                    return "Dissabte"
                    break;

                case 0:
                    return "Diumenge"
                    break;
            }

        },

        updateExercicesCallback(dayNumber, routineEdit){
            let weekDay = -1;
            let week = 0;

            for (week = 0; week < this.monthRoutines.length; week++) {
                weekDay = this.monthRoutines[week].findIndex(d => d.day.getDate() == dayNumber);
                if(weekDay != -1) {
                    break;
                }
            }
           this.monthRoutines[week][weekDay].routine = routineEdit;
        },
    },

    mounted() {
        /*
        //ensure routines are sorted after fetch.
        this.monthRoutines.sort(function(a,b) {
            a.day.getTime() - b.day.getTime();
        })
        */
    },

    template: `
        <ul class="breadcrumb">
            <li><router-link to="/">Aptofusao</router-link></li>
            <li>Rutina</li>
        </ul>
        <div class="container pt-2">
            <div class="d-flex justify-content-center mb-1">
                <h1>{{month}} {{year}}</h1>
            </div>

            <div v-for="(week,index) in monthRoutines" class="mb-4">
                <div class="container-fluid position-relative">

                    <div class="w-100">
                        <div class="d-flex b-outline week-title">
                            <p class="mb-0">{{weekTitles[index]}}</p>
                            <i></i>
                            <i></i>
                        </div>
                    </div>

                    <div class="row flex-nowrap overflow-auto mt-2 mx-0" id="days-wrapper" ref="dayswrapper" @scroll="onScroll($event, index)">

                        <Rutina-Day v-for="rday in week" class="col-3 me-2 one-day-wrapper"
                            :day-title="getDayName(rday.day)" :day-number="rday.day.getDate()" :routine="rday.routine"
                            @update-exs="updateExercicesCallback">

                        </Rutina-Day>


                                
                    </div>

                    <div class="position-absolute goright-wrapper">
                        <img src="images/goright_icon.svg" alt="go right" class="goright-icon" 
                        @click="scrollRight(index)" ref="scrollRightButton" :class="{scrollRightDisabled: scrollRightDisabled[index]}" /> 
                    </div>

                    <div class="position-absolute goleft-wrapper">
                        <img src="images/goright_icon.svg" alt="go right" class="goleft-icon" 
                        @click="scrollLeft(index)" ref="scrollLeftButton" :class="{scrollLeftDisabled: scrollLeftDisabled[index]}" /> 
                    </div>

                </div>

            </div>

        </div>
    `
}
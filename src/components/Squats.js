export default {
    template: `
    <ul class="breadcrumb">
        <li><router-link to="/">Aptofusao</router-link></li>
        <li><router-link to="/exercicis">Exercicis</router-link></li>
        <li>Esquats estàndard</li>
    </ul>
    <div id="squatsGeneral">
        <div class="row">
            <h3>Esquats estàndard</h3>
        </div>
        <div class="row video-row">
            <div class="col-xxl-6">
                <video class="squats-video" controls>
                    <source src="./videos/squats_dona.mp4" type="video/mp4">
                Video no disponible: prova a cambiar de navegador
                </video>
            </div>
            <div class="col-xxl-6">
                <div class="text-squats" >
                    Els <b class="text-marcat">esquats estàndard</b> son un exercici molt comú per treballar
                    les zones del <b class="text-marcat">quàdriceps</b> i els <b class="text-marcat">glutis</b>.
                    És un tipus d'exercici que demanda un <b class="text-marcat">esforç moderat</b> i no es necessita 
                    <b class="text-marcat">cap material</b> per realitzar-lo.
                </div>
                <div class="text-squats" >
                    Sèries recomanades: <b class="text-marcat">2</b> - Repeticions recomanades: <b class="text-marcat">20</b>
                </div>
            </div>
        </div>
        <div class="row flex-column-reverse flex-xxl-row video-row">
            <div class="col-xxl-6" >
                <div class="text-squats">
                    Per fer l'exercici correctament, s'ha de mantenir la <b class="text-marcat">posició correcta</b> 
                    de l'<b class="text-marcat">esquena</b>, mantinguda <b class="text-marcat">recta</b> i 
                    <b class="text-marcat">sense arquejar-la</b>, amb els genolls apuntant cap als dits dels peus i sense 
                    arribar a superar la punta dels dits. Així mateix, s'ha de mantenir el <b class="text-marcat">pes del cos als talons</b> 
                    i no a les puntes dels peus.
                </div>
            </div>
            <div class="col-xxl-6">
                <video class="squats-video" controls>
                    <source src="./videos/squats_musculs.mp4" type="video/mp4">
                Video no disponible: prova a cambiar de navegador
                </video>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="text-squats">
                    Et motiva aquest exercici? Planifica ara la teva <router-link to="/rutina">rutina</router-link>
                </div>
            </div>
        </div>
    </div>
    `
}
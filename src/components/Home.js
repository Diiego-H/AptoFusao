export default {
    props: {
    },

    mounted () {
        const foodCarousel = new bootstrap.Carousel(document.querySelector('#foodCarousel'), {
            touch: false
        }).cycle()
        const exerciseCarousel = new bootstrap.Carousel(document.querySelector('#exerciseCarousel'), {
            touch: false
        }).cycle()
    },

    data() {
    },

    template: `
    <br>
    <br>
    <div class="container" id="mainpage-container">
        <div class="row">
            <div class="col-sm-6">
                <div id="foodCarousel" data-bs-interval="2500" data-bs-pause="false" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./images/homepage/food1.jpg" alt="Menjar 1">
                        </div>
                        <div class="carousel-item">
                            <img src="./images/homepage/food2.jpg" alt="Menjar 2">
                        </div>
                        <div class="carousel-item">
                            <img src="./images/homepage/food3.jpg" alt="Menjar 3">
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-md-none"></div>
            <div class="col-sm-6">
                <h2>Aptofusao uneix esport i alimentació</h2>
                <br>
                <p>Ja es hora de sentir-te còmode amb el teu cos!</p>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-6">
                <h2>Les fites estan per superar-les</h2>
                <br>
                <p>Preparat per conquerir els teus reptes?</p>
            </div>
            <div class="d-md-none"></div>
            <div class="col-sm-6">
                <div id="exerciseCarousel" data-bs-interval="2500" data-bs-pause="false" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./images/homepage/exercici1.jpg" alt="Exercici 1">
                        </div>
                        <div class="carousel-item">
                            <img src="./images/homepage/exercici2.jpg" alt="Exercici 2">
                        </div>
                        <div class="carousel-item">
                            <img src="./images/homepage/exercici3.jpg" alt="Exercici 3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
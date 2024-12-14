export default {

    template: `
    <ul class="breadcrumb">
        <li><router-link to="/">Aptofusao</router-link></li>
        <li><router-link to="/nutricio">Nutrició</router-link></li>
        <li><router-link to="/nutricio/fruita">Fruita</router-link></li>
        <li>Mango</li>
    </ul>
    <div class="container">
        <div class="row">
            <div class="col-6 d-flex">
                <h2 class="mt-1">Mango</h2>
            </div>
            <div class="col-6 right-col d-flex flex-row-reverse align-items-end">
                <div class="row mb-1">
                    <div class="col-4 d-flex flex-row-reverse align-items-end">
                        <p class="mb-2 align-self-end">Porció:</p>
                    </div>
                    <div class="col-8 d-flex">
                        <div id="portion-container" class="container nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                200 g
                            </a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div class="row">
            <div class="container" id="mango-container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="d-none d-xl-block mt-5"></div>
                        <div class="container" id="info-container">
                            <div class="row mt-2">
                                <div class="col-sm-12 center-col">
                                    <p class="center bold">Informació nutricional</p>
                                </div>
                            </div>
                            <div class="row smallText mt-3">
                                <div class="col-6">
                                    <p>Mida porció</p>
                                </div>
                                <div class="col-6 right-col">
                                    <p class="bold">200 g</p>
                                </div>
                            </div>
                            <div class="row smallText">
                                <div class="col-6">
                                    <p>Calories</p>
                                </div>
                                <div class="col-6 right-col">
                                    <p class="bold">120 kcal</p>
                                </div>
                            </div>
                            <div class="row smallText">
                                <div class="col-6">
                                    <p>Carbohidrats</p>
                                </div>
                                <div class="col-6 right-col">
                                    <p class="bold">29,96 g</p>
                                </div>
                            </div>
                            <div class="row smallText">
                                <div class="col-6">
                                    <p>Proteïnes</p>
                                </div>
                                <div class="col-6 right-col">
                                    <p class="bold">1,64 g</p>
                                </div>
                            </div>
                            <div class="row smallText">
                                <div class="col-6">
                                    <p>Greixos</p>
                                </div>
                                <div class="col-6 right-col">
                                    <p class="bold">0,76 g</p>
                                </div>
                            </div>  
                            <div class="row smallText">
                                <div class="col-6">
                                    <p>Aigua</p>
                                </div>
                                <div class="col-6 right-col">
                                    <p class="bold">166,92 g</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="d-block d-lg-none mt-3"></div>
                        <div class="row">
                            <div class="col-12">
                                <img src="./images/nutricio/mango-graphic.png" alt="Macronutrients mango">
                            </div>
                        </div>
                        <div class="d-block d-lg-none mt-3"></div>
                        <div class="row" style="height: 50%; vertical-align: middle; align-items: center">
                            <div class="col-12">
                                <img src="./images/nutricio/mango.png" alt="Mango">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="d-block d-md-none mt-3"></div>
                        <div class="row">
                            <div class="col-12">
                                <div class="container" id="dieta-container">
                                    <div class="row">
                                        <div class="col-sm-12 center-col">
                                            <p class="center bold">Afegeix a la dieta</p>
                                        </div>
                                    </div>
                                    <div class="row smallText">
                                        <div class="col-6 d-flex">
                                            <p class="mb-0 align-self-end">Dia:</p>
                                        </div>
                                        <div class="col-6">
                                            <div class="container item-container">
                                                <p>16/05/2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row smallText">
                                        <div class="col-6 d-flex">
                                            <p class="mb-0 align-self-end">Àpat:</p>
                                        </div>
                                        <div class="col-6">
                                            <div class="container item-container">
                                                <p>Esmorzar</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row smallText">
                                        <div class="col-6 d-flex">
                                            <p class="mb-0 align-self-end">Aliment:</p>
                                        </div>
                                        <div class="col-6">
                                            <div class="container item-container">
                                                <p>Mango</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row smallText">
                                        <div class="col-6 d-flex">
                                            <p class="mb-0 align-self-end">Quantitat:</p>
                                        </div>
                                        <div class="col-6">
                                            <div class="row flex-row-reverse">
                                                <input class="col-3" value="g" type="text">
                                                <input id="amountInput" class="col-7" value="200" type="number">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row smallText flex-row-reverse">
                                        <button class="col-5 save-button" @click="showModal = true">Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none d-xl-block mt-5"></div>
                        <div class="row">
                            <div class="col-12">
                                <p class="bold">Aliments relacionats:</p>
                                <p class="smallText"><a href="javascript:void(0)">Alvocat</a>, <a href="javascript:void(0)">Prèssec</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div class="row">
            <div class="row">
                <h5>Detalls nutricionals:</h5>
            </div>
            <div class="row m-1 mb-4" id="details-row">
                <div class="col-11 col-sm-5 col-xl-3">
                    <div class="row vitamin-row align-items-center">
                        <div class="col-6">
                            Vitamina C
                        </div>
                        <div class="col-6 right-col">
                            72.8 mg
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-11 col-sm-5 col-xl-3">
                    <div class="row vitamin-row align-items-center">
                        <div class="col-6">
                            Colina
                        </div>
                        <div class="col-6 right-col">
                            15.2 mg
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-11 col-sm-5 col-xl-3">
                    <div class="row vitamin-row align-items-center">
                        <div class="col-6">
                            Calci
                        </div>
                        <div class="col-6 right-col">
                            22 mg
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-11 col-sm-5 col-xl-3">
                    <div class="row vitamin-row align-items-center">
                        <div class="col-6">
                            Magnesi
                        </div>
                        <div class="col-6 right-col">
                            20 mg
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-11 col-sm-5 col-xl-3">
                    <div class="row vitamin-row align-items-center">
                        <div class="col-6">
                            Fòsfor
                        </div>
                        <div class="col-6 right-col">
                            28 mg
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
                <div class="col-11 col-sm-5 col-xl-3">
                    <div class="row vitamin-row align-items-center">
                        <div class="col-6">
                            Potasi
                        </div>
                        <div class="col-6 right-col">
                            376 mg
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
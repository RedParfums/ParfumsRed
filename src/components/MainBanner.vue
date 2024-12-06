<template>
    <div id="main-banner" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container">
                    <div class="row p-5">
                        <!-- Section image -->
                        <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img class="img-fluid rounded" src="../assets/images/mainPerfume.png" alt="Image de la bouteille de parfum"
                                style="width: 500px; height: 600px; object-fit: cover;">
                        </div>

                        <!-- Section texte -->
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-left align-self-center">
                                <h1 class="h1 text-success"><b>Red</b> Parfums</h1>
                                <h3 class="h2">Élevez Votre Essence</h3>
                                <p>
                                    Plongez dans un monde de parfums captivants conçus à la perfection. Que ce soit pour
                                    des moments spéciaux ou un luxe quotidien, nos parfums incarnent l'élégance et
                                    l'allure intemporelle.
                                </p>
                                <router-link to="/shop" class="btn btn-success btn-lg mt-3">
                                    Achetez Maintenant
                                </router-link>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<template>
    <div class="col-lg-3">
        <h1 class="h2 pb-4">Catégories</h1>
        <ul class="list-unstyled templatemo-accordion">

            <!-- Types de parfum -->
            <div class="pb-3">
                <label for="priceRange" class="form-label">Prix</label>
                <input type="range" id="priceRange" v-model="filters.price" class="form-range custom-input" min="0"
                    max="5000" step="10" @input="updateFilters" />
                <div class="d-flex justify-content-between">
                    <small>0</small>
                    <small>5000</small>
                </div>
                <small>Selected price: {{ filters.price }} DH</small>
            </div>

            <!-- Promotions -->
            <li class="pb-3">
                <label for="volumeRange" class="form-label">Volume</label>
                <select id="volumeRange" v-model="filters.volume" class="form-select custom-input"
                    @change="updateFilters">
                    <option value="">Tous les volumes</option>
                    <option value="1.5ml">1.5ml</option>
                    <option value="5ml">5ml</option>
                    <option value="15ml">15ml</option>
                    <option value="25ml">25ml</option>
                    <option value="30ml">30ml</option>
                    <option value="40ml">40ml</option>
                    <option value="50ml">50ml</option>
                    <option value="60ml">60ml</option>
                    <option value="70ml">70ml</option>
                    <option value="80ml">80ml</option>
                    <option value="90ml">90ml</option>
                    <option value="100ml">100ml</option>
                    <option value="125ml">125ml</option>
                    <option value="200ml">200ml</option>

                </select>
            </li>

            <!-- Marque de parfum -->
            <li class="pb-3">
                <label for="categoryFilter" class="form-label">Catégories</label>
                <select id="categoryFilter" v-model="filters.category" class="form-select custom-input"
                    @change="updateFilters">
                    <option value="">Toutes les catégories</option>
                    <option value="Parfum">Parfum (or Extrait de Parfum)</option>
                    <option value="EDP">Eau de Parfum (EDP)</option>
                    <option value="EDT"> Eau de Toilette (EDT)</option>
                    <option value="EDC"> Eau de Cologne (EDC)</option>
                    <option value="AF">Eau Fraîche</option>
                </select>
            </li>
        </ul>
    </div>
</template>




<script>
export default {
    name: "FilterBar",
    data() {
        return {
            filters: {
                price: 0,  // Default price range
                volume: "",
                category: "",
            },
        };
    },
    methods: {
        updateFilters() {
            this.$emit("filter-change", { ...this.filters });
        },
    },
};
</script>

<style scoped>
.filter-bar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>


<style scoped>
/* Custom styles for input and select elements */

.custom-input:focus {
    border-color: #28a745;
    /* Darker green for focus state */
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    /* Adds a green glow effect on focus */
}


input[type="range"].custom-input {
    background-color: transparent;
    accent-color: #28a745;
    /* Color for the range input thumb */
}

input[type="range"] {
    width: 100%;
    --litters-range: 75%;
    /* Adjustable to simulate different ranges */
    appearance: none;
    outline: none;
    height: 0.5rem;
    /* Reduced height for range input */
    border-radius: 0.5rem;
    /* Rounded corners for range */

}

input[type="range"]::-webkit-slider-thumb {
    width: 1.2rem;
    background: #28a745;
    /* Green color for the thumb */
}

input[type="range"]::-webkit-slider-thumb:hover {
    background-color: #218838;
    /* Darker green when hovering */
}
</style>
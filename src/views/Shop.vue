<template>

  <Header />
  <div class="container py-5">
    <div class="row">
      <!-- Filter Bar Component -->
      <FilterBar @filter-change="applyFilters" />


      <div class="col-lg-9">
        <div v-if="paginatedData.length === 0" class="row justify-content-center">
          <div class="alert alert-info text-center w-100" role="alert">
            <i class="bi bi-exclamation-circle"></i>
            <p class="mb-0 text-dark">Le produit que vous cherchez est introuvable..</p>
          </div>
        </div>
        <div v-else>
          <!-- Pagination -->
          <div class="row">
            <nav aria-label="Page navigation">
              <ul class="pagination pagination-sm justify-content-end">
                <li :class="{ 'disabled': currentPage === 1 }">
                  <a class="page-link text-dark" href="#" @click="changePage(currentPage - 1)">Previous</a>
                </li>
                <li v-for="page in totalPages" :key="page" class="page-item" :class="{ 'active': currentPage === page }">
                  <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                    :class="{ 'bg-success text-white': currentPage === page }" href="#" @click="changePage(page)">
                    {{ page }}
                  </a>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                  <a class="page-link text-dark" href="#"
                    @click="changePage(currentPage + 1)">Next</a>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Product List -->
          <div class="row">
            <!-- Affichage des cartes -->
            <Card v-for="product in paginatedData" :key="product.id" :product="product" />
          </div>


          <!-- Pagination -->
          <div class="row">
            <ul class="pagination pagination-lg justify-content-end">
              <li :class="{ 'disabled': currentPage === 1 }">
                <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#"
                  @click="changePage(currentPage - 1)">Previous</a>
              </li>
              <li v-for="page in totalPages" :key="page" class="page-item" :class="{ 'active': currentPage === page }">
                <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                  :class="{ 'bg-success text-white': currentPage === page }" href="#" @click="changePage(page)">
                  {{ page }}
                </a>
              </li>
              <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#"
                  @click="changePage(currentPage + 1)">Next</a>
              </li>
            </ul>
          </div>
        </div>



      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import FilterBar from '@/components/FilterBar.vue';
import Card from '@/components/card.vue';
import productData from '@/data/products.json';

export default {
  components: {
    Header,
    FilterBar,
    Card,
    Footer
  },
  data() {
    return {
      productData, // All product data
      filters: {   // Filter settings
        price: "",
        volume: "",
        category: "",
      },
      currentPage: 1,  // Track the current page
      itemsPerPage: 9, // Number of items per page
    };
  },
  computed: {
    // Filtered data based on selected filters
    filteredData() {
      return this.productData.filter((product) => {
        const matchesPrice = !this.filters.price || product.price <= this.filters.price;
        const matchesVolume = !this.filters.volume || product.volumes.includes(this.filters.volume);
        const matchesCategory = !this.filters.category || product.category.toLowerCase().includes(this.filters.category.toLowerCase());

        return matchesPrice && matchesVolume && matchesCategory;
      });
    },
    // Paginated data based on current page and items per page
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredData.slice(startIndex, endIndex);
    },
    // Total number of pages
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    },
  },
  methods: {
    // Handler to update filters
    applyFilters(filters) {
      this.filters = { ...filters };
      this.currentPage = 1;  // Reset to page 1 when filters are applied
    },
    // Change the current page
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>

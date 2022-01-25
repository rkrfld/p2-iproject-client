<template>
  <div>
    <div class="flex flex-row-reverse">
      <div class="col container">
        <img v-if="!searched" src="..\assets\home-bg.png" alt="" />

        <div v-if="searched" class="flex grid grid-cols-4 gap-4 p-5 m-5">
          <!-- card -->

          
          <div v-for="item in recipes" :key='item.idDrink'>
            <recipes-card :item="item" ></recipes-card>
          </div>
          <!-- card -->
        </div>
      </div>
      <div class="flex col">
        <div class="flex items-center justift-center">
          <div>
            <div
              class="container h-screen flex flex-col justify-center items-center ml-10 px-4 sm:px-6 lg:px-8"
            >
              <div class="text-xl mb-2 font-bold">Find your tasty recipe:</div>

              <div class="border-y-2 border-y-stone-200">
                <div class="relative">
                  <form class="flex" action="" @submit.prevent="searchrecipe">
                    <input
                      v-model="searchInput"
                      class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                      type="text"
                      placeholder="Search recipes..."
                    />
                    <button type="submit">search</button>
                  </form>
                  <div class="absolute top-4 right-3"></div>
                  <i
                    class="fa fa-search text-gray-400 z-20 hover:text-gray-500"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RecipesCard from "../components/RecipesCard.vue";
export default {
  name: "Home",
  components: {
    RecipesCard,
  },
  data() {
    return {
      searchInput: "",
      searched: false,
    };
  },
  computed: {
    ...mapState(["recipes"]),
  },
  methods: {
    ...mapActions(["findRecipes"]),
    async searchrecipe() {
      await this.findRecipes(this.searchInput);
      console.log(this.recipes, '<)<)<)<)<)<)<)');
      if (this.recipes.length === 0) {
        this.searched = false;
      } else {
        this.searched = true;
      }
    },
  },
  created() {},
};
</script>

<style>
#gradient {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 57%,
    rgba(0, 212, 255, 0) 100%,
    url("https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80")
  );
}
</style>

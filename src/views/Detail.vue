<template>
  <div class="flex mx-auto my-10 justify-center px-2 sm:px-6 lg:px-8">
    <div class="flex flex-row">
      <div class="flex col">
        <img :src="recipeDetail.strDrinkThumb" alt="" />
      </div>

      <div class="flex col">
        <div class="flex flex-col">
          <div class="text-7xl font-bold" id="title">
            {{ recipeDetail.strDrink }}
          </div>
          <div>
            {{ recipeDetail.strCategory }}
          </div>
          <div>
            {{ recipeDetail.strAlcoholic }}
          </div>
          <div>
            {{ recipeDetail.strGlass }}
          </div>
          <div>
            {{ recipeDetail.strInstructions }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Detail",
  computed: {
    ...mapState(["recipeDetail"]),
  },
  methods: {
    ...mapActions(['findOneRecipes'])
  },
  created() {
    const idDrink = this.$route.params.id
    this.findOneRecipes(idDrink)
  },
};
</script>

<style>
#title {
  color: #1F2937;
}
</style>

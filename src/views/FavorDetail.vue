<template>
   <div class="flex mx-auto my-10 justify-center px-2 sm:px-6 lg:px-8">
    <div class="flex flex-row">
      <div class="flex col">
        <img :src="recipeDetail.strDrinkThumb" alt="" />
      </div>

      <div class="flex col p-4 m-2">
        <div class="flex flex-col">
          <div class="text-7xl font-bold p-4" id="title">
            {{ recipeDetail.strDrink }}
          </div>
          <div class="text-xl font-semibold p-4">
            Name: {{ recipeDetail.strCategory }}
          </div>
          <div class="text-xl font-semibold p-4">
          Type:
            {{ recipeDetail.strAlcoholic }}
          </div>
          <div class="text-xl font-semibold p-4">
            Glass: {{ recipeDetail.strGlass }}
          </div>
          <div class="text-xl font-semibold p-4">
            <div class="font-normal">
              Instruction:
            </div>
            {{ recipeDetail.strInstructions }}
          </div>

          <div class="text-xl font-semibold p-4">
            <div class="font-normal">
            Ingredients:

            </div>
            <div class="flex flex-col">
              <div>
                {{ recipeDetail.strIngredient1 }}
                {{ recipeDetail.strMeasure1 }}
              </div>
              <div>
                {{ recipeDetail.strIngredient2 }}
                {{ recipeDetail.strMeasure2 }}
              </div>
              <div>
                {{ recipeDetail.strIngredient3 }}
                {{ recipeDetail.strMeasure3 }}
              </div>
              <div>
                {{ recipeDetail.strIngredient4 }}
                {{ recipeDetail.strMeasure4 }}
              </div>
              <div>
                {{ recipeDetail.strIngredient5 }}
                {{ recipeDetail.strMeasure5 }}
              </div>
              <div>
                {{ recipeDetail.strIngredient6 }}
                {{ recipeDetail.strMeasure6 }}
              </div>
              <div>
                {{ recipeDetail.strIngredient7 }}
                {{ recipeDetail.strMeasure7 }}
              </div>
              <div>
                {{ recipeDetail.strIngredient8 }}
                {{ recipeDetail.strMeasure8 }}
              </div>
              <div>
                {{ recipeDetail.strIngredient9 }}
                {{ recipeDetail.strMeasure9 }}
              </div>
              <div>
                {{ recipeDetail.strIngredient10 }}
                {{ recipeDetail.strMeasure10 }}
              </div>
            </div>
          </div>

          <div class="font-mediun text-gray-50 text-xl">
            <a
            @click.prevent="backToFavorite"
              class="inline-flex m-2 ml-0 items-center py-2 px-3 text-sm font-medium text-justify text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Back to favorite
            </a>
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
    ...mapActions(["findOneRecipes"]),
    backToFavorite() {
      this.$router.push({name: "Favorite"})
    }
    
  },
  created() {
    const idDrink = this.$route.params.id;
    this.findOneRecipes(idDrink);
  },
};
</script>

<style>
#title {
  color: #1f2937;
}
</style>

<template>
  <div class="flex flex-col ml-10 mr-10 mt-10">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow-md sm:rounded-lg">
          <table class="min-w-full">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Type
                </th>
                <th
                  scope="col"
                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Category
                </th>
                <th scope="col" class="relative py-3 px-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody v-for="data in favorites" :key="data.idDrink">
              <!-- Product 1 -->
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{data.name}}
                </td>
                <td
                  class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                >
                  {{data.type}}
                </td>
                <td
                  class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                >
                  {{data.Category}}
                </td>
                
                <td
                  class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap"
                >
                  <a
                  @click.prevent='toSeeDetail(data.idDrink)'
                    href="#"
                    class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                    >See Recipes Detail</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Favorite",
  computed: {
    ...mapState(["favorites"]),
  },
  methods: {
    ...mapActions(["fetchFavorite"]),
    toSeeDetail(idDrink) {
      this.$router.push({name: 'FavoriteDetail', params:{id: idDrink}})
    }
  },
  created() {
    this.fetchFavorite();
    console.log(this.favorites);
  },
};
</script>

<style></style>

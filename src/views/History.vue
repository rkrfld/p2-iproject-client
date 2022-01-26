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
                  OrderId
                </th>
                <th
                  scope="col"
                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Item Id
                </th>
                <th
                  scope="col"
                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                 Status
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
                  {{data.order_id}}
                </td>
                <td
                  class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                >
                  {{data.AuctionId}}
                </td>
                <td
                  class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                >
                  {{data.status}}
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
import { mapActions, mapState } from 'vuex';
export default {
  name: "History",
  computed: {
    ...mapState(['history'])
  },
  methods: {
    ...mapActions(['fetchOrderHistory'])
  },created() {
    this.fetchOrderHistory()
  },
};
</script>

<style></style>



<div>
    history table
    <table>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Item Id</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody v-for="data in history" :key="data.id">
        <tr>
          <td>{{data.order_id}}</td>
          <td>{{data.AuctionId}}</td>
          <td>{{data.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>

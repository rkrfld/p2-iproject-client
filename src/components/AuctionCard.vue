<template>
  <div
    class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center m-4 h-full"
  >
    <div>
      <a href="#">
        <img class="rounded-lg max-h-96 m-2" :src="item.imageUrl" />
      </a>
    </div>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ item.title }}
        </h5>
      </a>
      <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
        {{ item.year }}
        
      </p>
      <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
        Sale ends {{ convertDate }}
        
      </p>
      <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
        Highest Bid:
        <span class="font-bold text-gray-700 dark:text-gray-400"
          >Rp. {{ item.currentBid }}</span
        >
      </p>

      <div>
        <input
        v-model="bid"
          type="number"
          class="text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 font-bold m-2 ml-0 px-4 py-2"
        />
        <a
        @click.prevent="actionBid(item.id)"

          class="inline-flex m-1 ml-0 mb-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        >
          Place Bid
        </a>
      </div>

      <div class="font-mediun text-gray-50 text-xl">
        Price: <span class="font-bold">Rp. {{ item.buyNow }}</span>
        <a
          @click.prevent="actionBuynow(item.id)"
          class="inline-flex m-2 ml-0 items-center py-2 px-3 text-sm font-medium text-justify text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        >
          Buy It Now
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "AuctionCard",
  props: ["item"],
  data() {
    return {
      bid: this.item.currentBid
      
    }
  },
  computed: {
    convertDate() {
      let newDate = this.item.dueDate.slice(8, 10) + "-" + this.item.dueDate.slice(5, 7) + '-' + this.item.dueDate.slice(0, 4)
      return newDate
    }
  },
  methods: {
    ...mapActions(['placeBid', 'fetchAuctionItem', 'buyItNow']),
    async actionBid(id) {
      try {
        const data = {
          id: id,
          amount: +this.bid
        };
        await this.placeBid(data)
        
      } catch (err) {
        console.log(err);
      }

    },

    async actionBuynow(id) {
      try {
        await this.buyItNow(id)
        this.$router.push('/payment')
        
      } catch (err) {
        console.log(err);
      }
    }
  },

};
</script>

<style>
input[type="number"] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>

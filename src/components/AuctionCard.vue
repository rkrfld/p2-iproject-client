<template>
  <div
    class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img class="rounded-t-lg" src="" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          item title
        </h5>
      </a>
      <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
        Highest Bid:
        <span class="font-bold text-gray-700 dark:text-gray-400"
          >Rp. 101010</span
        >
      </p>

      <div>
        <input
          type="number"
          class="text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 font-bold m-2 px-4 py-2"
        />
        <a
          href="#"
          class="inline-flex m-1 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Place Bid
        </a>
      </div>

      <div class="font-mediun text-gray-50 text-xl">
        Price: <span class="font-bold">Rp.</span>
        <a
          href="#"
          class=" inline-flex m-2 items-center py-2 px-3 text-sm font-medium text-justify text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buy It Now
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuctionCard",
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

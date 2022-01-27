<template>
  <div>
    <div class="m-10 flex">
      <div v-for="item in auctionItem" :key="item.id">
        <auction-card :highestBid='item.currentBid' :item="item"></auction-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AuctionCard from "../components/AuctionCard.vue";
export default {
  name: "Auction",
  components: {
    AuctionCard,
  },
  computed: {
    ...mapState(["auctionItem"]),
  },
  methods: {
    ...mapActions(["fetchAuctionItem"]),
  },
  created() {
    this.fetchAuctionItem();
  },
};
</script>

<style></style>

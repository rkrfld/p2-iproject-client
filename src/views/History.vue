<template>
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


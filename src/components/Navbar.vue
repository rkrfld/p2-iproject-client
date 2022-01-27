<template>
  <section id="navbar">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-8 w-auto"
                src="..\assets\tipsytip-logos_transparent_white.png"
              />
              <img
                class="hidden lg:block h-12 w-auto"
                src="..\assets\tipsytip-logos_transparent_white.png"
              />
            </div>
            <div class="flex hidden sm:block sm:ml-6 items-center mt-2">
              <div v-if="isLogin" class="flex space-x-4">
                <a
                  @click.prevent="toHome"
                  href="#"
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                  >Home</a
                >

                <a
                @click.prevent="toFavorite"
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Favorite</a
                >

                <a
                  @click.prevent="toAuction"
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Auction</a
                >
                <a
                  @click.prevent="toOrderHistory"
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Order History</a
                >
              </div>
            </div>
          </div>

          <a
            v-if="isLogin"
            @click.prevent="actionLogout"
            class="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Sign Out</a
          >

          <!-- PROFILE -->
          <div
            v-if="isLogin"
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  type="button"
                  class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img class="h-8 w-8 rounded-full" :src="ava" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      ava: localStorage.avatar,
    };
  },
  computed: {
    ...mapState(["isLogin"]),
  },
  methods: {
    ...mapActions(["doLogout"]),
    ...mapMutations(['MUTATE_ISLOGIN']),
    toHome() {
      this.$router.push("/");
    },
    toAuction() {
      this.$router.push("/auction");
    },
    toFavorite() {
      this.$router.push("/favorite");
    },
    actionLogout() {
      this.doLogout();
      this.$router.push("/login");
    },
    toOrderHistory() {
      this.$router.push("/orderhistory");
    },
  },
  created() {
    if (localStorage.access_token) {
      this.MUTATE_ISLOGIN(true)
    }
  },
};
</script>

<style></style>

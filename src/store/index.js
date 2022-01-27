import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // baseUrl: 'http://localhost:3300/',
    baseUrl: '  https://tipsytips.herokuapp.com/',
    isLogin: false,
    recipes: [],
    recipeDetail: [],
    auctionItem: [],
    url: '',
    history: [],
    favorites: []
  },
  mutations: {
    MUTATE_ISLOGIN(state, payload) {
      state.isLogin = payload
    },
    MUTATE_RECIPES(state, payload) {
      state.recipes = payload
    },
    MUTATE_DETAIL(state, payload) {
      state.recipeDetail = payload
    },
    MUTATE_AUCTIONITEM(state, payload) {
      state.auctionItem = payload
    },
    MUTATE_URL(state, payload) {
      state.url = payload
    },
    MUTATE_ORDERHISTORY(state, payload) {
      state.history = payload
    },
    MUTATE_FAVORITES(state, payload) {
      state.favorites = payload
    },
  },
  actions: {
    
    async doRegister(context, payload) {
      try {
        const value = {
          email: payload.email,
          password: payload.password,
          username: payload.username
        }

        await axios.post(`${context.state.baseUrl}account/register`, value)

      } catch (err) {
        console.log(err);
      }
    },

    async doLogin(context, payload) {
      try {
        const value = {
          email: payload.email,
          password: payload.password
        }

        const result = await axios.post(`${context.state.baseUrl}account/login`, value)

        localStorage.access_token = result.data.access_token;
        localStorage.username = result.data.username;
        localStorage.avatar = result.data.avatar;
        context.commit('MUTATE_ISLOGIN', true)

        localStorage.acces
      } catch (err) {
        console.log(err);
      }
    },

    doLogout(context) {
      localStorage.clear();
      context.commit('MUTATE_ISLOGIN', false)
    },

    async findRecipes(context, payload) {
      try {
        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${payload}`)

        context.commit('MUTATE_RECIPES', result.data.drinks)
      } catch (err) {
        console.log(err);
      }
    },

    async findOneRecipes(context, payload) {
      try {
        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${payload}`)

        context.commit('MUTATE_DETAIL', result.data.drinks[0])
      } catch (err) {
        console.log(err);
      }
    },

    async fetchAuctionItem(context) {
      try {
        const result = await axios.get(`${context.state.baseUrl}auction/`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        
        context.commit('MUTATE_AUCTIONITEM', result.data)

      } catch (err) {
        console.log(err);
      }
    },

    async placeBid(context, payload) {
      try {
        const result = await axios.patch(`${context.state.baseUrl}auction/${payload.id}`, payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        if (result.data) {
          context.dispatch('fetchAuctionItem')
        }

      } catch (err) {
        console.log(err);
      }
    },

    async buyItNow(context, payload) {
      try {
        const result = await axios.post(`${context.state.baseUrl}auction/payment/${payload}`, {}, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        console.log(result.data.redirect_url);
        context.commit('MUTATE_URL', result.data.redirect_url)
      } catch (err) {
        console.log(err);
      }
    },

    async fetchOrderHistory(context) {
      try {
        const result = await axios.get(`${context.state.baseUrl}auction/orderHistory`, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        context.commit('MUTATE_ORDERHISTORY', result.data)
      } catch (err) {
        console.log(err);
      }
    },

    async addToFavo(context, payload) {
      try {
        await axios.post(`${context.state.baseUrl}favorite/addtofavo`, payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
      } catch (err) {
        console.log(err);
      }
    },

    async fetchFavorite(context) {
      try {
        const result = await axios.get(`${context.state.baseUrl}favorite/`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        context.commit('MUTATE_FAVORITES', result.data)
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})

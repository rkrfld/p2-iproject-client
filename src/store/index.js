import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    recipes: [],
  },
  mutations: {
    MUTATE_ISLOGIN(state, payload) {
      state.isLogin = payload
    },
    MUTATE_RECIPES(state, payload) {
      state.recipes = payload
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

        await axios.post('http://localhost:3300/account/register', value)

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

        const result = await axios.post('http://localhost:3300/account/login', value)

        localStorage.access_token = result.data.access_token;
        context.commit('MUTATE_ISLOGIN', true)

        localStorage.acces
      } catch (err) {
        console.log(err);
      }
    },

    async findRecipes(context, payload) {
      try {
        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${payload}`)
       
        context.commit('MUTATE_RECIPES', result.data.drinks)
      } catch (err) {
        console.log(err);
      }
    }

  },
  modules: {
  }
})

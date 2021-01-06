import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {'name':'First','pic':'c1.png','id':0,'isSecret':false},
      {'name':'First','pic':'c2.png','id':1,'isSecret':false},
      {'name':'First','pic':'c3.png','id':2,'isSecret':false},
      {'name':'First','pic':'c4.png','id':3,'isSecret':false},
      {'name':'First','pic':'c5.png','id':4,'isSecret':false}
    ],
    rooms:[
      {'id':0,secretCard:null,stage:0},
      {'id':0,secretCard:null,stage:0},
      {'id':0,secretCard:null,stage:0},
      {'id':0,secretCard:null,stage:0}
    ]
  },
  getters:{
    SECRET:s=>id=>s.rooms[id].secretCard,
    CARDS: s=>s.cards,
    STAGE: s => id=> s.rooms[id].stage
  },
  mutations: {
    CHOOSE_SECRET: (s,[id,idx]) => s.rooms[id].secretCard=idx,
    NEXT_STAGE:(s,id) => s.rooms[id].stage++,
    RESET:(s,id) => s.rooms[id].stage=0
  },
  actions: {
    START_GAME({commit},[id,idx]){
      commit('CHOOSE_SECRET',[id,idx])
    }
  },
  modules: {
  }
})

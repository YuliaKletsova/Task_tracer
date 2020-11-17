import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
      //localStorage.clear(); 
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    
  },
  modules: {
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)

  }
})

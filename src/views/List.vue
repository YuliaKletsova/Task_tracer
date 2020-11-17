<template>
  <div>
    <div class="row filters">
      <div class="input-field col s3">
        <select ref="select" v-model="filter">
          <option value="" disabled selected>Filter status</option>
          <option value="active">active</option>
          <option value="outdeted">outdated</option>
          <option value="completed">completed</option>
        </select>
      </div>
      <button v-if="filter" class="btn btn-small clear red lighten-1" @click="filter = null">Clear</button>
    </div>
    <hr>

    <table v-if="tasks.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, id) of displayTasks" :key="task.id">
          <td>{{ id + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>{{ new Date(task.date).toLocaleDateString() }}</td>
          <td class="description_td"><div class="text">{{ task.description }}</div></td>
          <td class="status">{{ task.status }}</td>
          <td class="btn_info">
            <router-link tag="button" class="btn btn-small deep-purple accent-1" :to="'/task/:' + task.id">
              SEE INFO
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No tasks to trace</p>
  </div>
</template>

<script>
import M from 'materialize-css';

export default {
  data: () => ({
    filter: null
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if(!this.filter) {
          return true
        }
        return t.status === this.filter 
      })
    }
  },
  mounted() {
    M.FormSelect.init(this.$refs.select)
  }
}
</script>

<style lang="scss" scoped>
  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .description_td {
    max-width: 25rem;
  }
  .btn_info {
    width:8rem;
  }
  .clear {
    margin-top: 1.75rem;
  }
</style>
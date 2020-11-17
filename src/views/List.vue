<template>
  <div>
    <h1>List</h1>

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
        <tr v-for="(task, id) of tasks" :key="task.id">
          <td>{{ id + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>{{ new Date(task.date).toLocaleDateString() }}</td>
          <td class="description_td"><div class="text">{{ task.description }}</div></td>
          <td>{{ task.status }}</td>
          <td class="btn_info">
            <router-link tag="button" class="btn btn-small" :to="'/task/:' + task.id">
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
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks
    }
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
</style>
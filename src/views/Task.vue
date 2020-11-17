<template>
  <div class="row">
    <div v-if="task" class="col s12">
      <h1>{{ task.title }}</h1>
      <form class="col s6" @submit.prevent="submitHandler">
          <div class="chips input-field" ref="chips"></div>
          <div class="input-field description">
              <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
              <label for="description">Description</label>
              <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
          </div>
          <input type="text" class="datepicker" ref="datepicker">
          <div class="buttons" v-if="task.status !== 'completed'">
            <button class="btn" type="submit">Edit</button>
            <button class=" complete btn deep-purple darken-4" 
              type="button" 
              @click="completeTask"
            >Complete task</button>  
          </div>
      </form>
    </div>
    <h2 class="else" v-else>Task cannot be found</h2>
  </div>
</template>

<script>
import M from 'materialize-css';

export default {
  computed: {
    task() {
      return this.$store.getters.taskById(+String(this.$route.params.id).slice(1))
    }
  },
  data: () => ({
        description: "",
        chips: null,
        date: null
  }),
  mounted() {
    this.description = this.task.description;
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Tags',
      data: this.task.tags
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      placeholder: "Choose deadline date",
      minDate: new Date(this.task.date),
      disableWeekends: true,
      firstDay: 1,
      setDefaultDate: true,
      defaultDate: new Date(this.task.date)
    })
    setTimeout(() => {
      M.updateTextFields()
    },0)
    console.log(this.$store.state)
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('editTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      })
      this.$router.push('/list')
    },
    completeTask() {
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/list')
    }
  },
  unmounted() {
    if (this.date && this.date.destroy){
      this.date.destroy();
    }
    if (this.chips && this.chips.destroy){
      this.chips.destroy();
    }       
  }
}
</script>

<style scoped>
.else {
  position: absolute;
  left:30%;
  top:40%;
}
.complete {
  color: white;
}
.buttons {
  display:flex;
  justify-content: space-between;
}
</style>>

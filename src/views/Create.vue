<template>
    <div class="row">
        <div class="offset-s3">
            <h1>Create task</h1>
            <form class="col s6" @submit.prevent="submitHandler">
                <div class="input-field">
                    <input v-model="title" id="title" type="text" class="validate" required>
                    <label for="title">Title</label>
                    <span class="helper-text" data-error="Title is required"></span>
                </div>
                <div class="chips input-field" ref="chips"></div>
                <div class="input-field">
                    <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
                    <label for="description">Description</label>
                    <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
                </div>
                <input type="text" class="datepicker" ref="datepicker">
                <button class="btn" type="submit">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css';

export default {
    name: 'create',
    data: () => ({
        description: "",
        title: "",
        chips: null,
        date: null
    }),
    components: {},
    mounted() {
        this.chips = M.Chips.init(this.$refs.chips, {
            placeholder: 'Tags'
        });
        this.date = M.Datepicker.init(this.$refs.datepicker, {
            placeholder: "Choose deadline date",
            minDate: new Date(),
            disableWeekends: true,
            firstDay: 1,
            setDefaultDate: true,
            defaultDate: new Date()
        })
        console.log(this.$store.state)

    },
    methods: {
        submitHandler() {
            const task = {
                title: this.title,
                description: this.description,
                id: Date.now(),
                status: 'active',
                tags: this.chips.chipsData,
                date: this.date.date
            }
            this.$store.dispatch('createTask', task)
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

<style lang="scss" scoped>
input .datepicker {
   box-sizing: border-box;
   padding: 0 2rem;
}

button {
    margin-top: 1rem;
}

</style>
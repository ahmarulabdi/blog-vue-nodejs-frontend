<template>
    <div class="submit-form">
        <div v-if="!submited">
            <div class="form-group">
                <label for="title">Title</label>
                <input
                        type="text"
                        class="form-control"
                        id="title"
                        required
                        v-model="tutorial.title"
                        name="title"
                >
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input
                        class="form-control"
                        type="text"
                        id="description"
                        required
                        v-model="tutorial.description"
                        name="description"
                >
            </div>
            <button @click="saveTutorial" class="btn btn-success">Submit</button>
        </div>
        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="addTutorial">Add</button>
        </div>
    </div>
</template>

<script>
    import TutorialDataService from '../services/TutorialDataService'

    export default {
        name: 'AddTutorial',
        data() {
            return {
                tutorial: {
                    title: null,
                    description: '',
                    published: false
                },
                submited: false
            }
        },
        methods: {
            saveTutorial() {
                let data = {
                    title: this.tutorial.title,
                    description: this.tutorial.description
                }

                TutorialDataService.create(data)
                    .then(response => {
                        this.tutorial.id = response.data.id
                        console.log(response.data)
                        this.submited = true
                    }).catch(e => {
                    console.log(e)
                })
            },

            addTutorial() {
                this.submited = false
                this.tutorial = {}
            }
        }
    }
</script>
<style>
    .submit-form {
        max-width: 300px;
        margin: auto;
    }
</style>

/* 
Reference: https://langvad.dev/blog/working-with-nuxt-and-vuex/

Vuex comes along with Nuxt by default. When scaffolding a new project you might have noticed an empty folder called store. 
This is where we work with Vuex. It is disabled by default but will be activated as soon as a .js file is created in this folder. 
Each file in this folder will be converted to a Vuex module. The index.js file will be the root module.

The following are the four building blocks of a Vuex module:

export const state = () => ({})

export const mutations = {}

export const actions = {}

export const getters = {}
*/

export const state = () => ({
    tasks: []
})

export const getters = {
    GET_TASKS(state) {
        return state.tasks;
    }
}

export const mutations = {
    // Nuxt.js convention to use all-caps for mutation name
    // Mutation to add new task
    ADD_TASK(state, task) {
        // state.tasks = [
        //     {
        //         content: task, status: false
        //     }, ...state.tasks
        //     // ... = Array/Object spread/rest operator used
        //     // In this context, it means that we add the new task object first on top
        //     // Before adding the rest of the tasks
        // ]
        // Add new task at the end
        state.tasks.push({ content: task, status: false })
        // // Add new task at the start
        // state.tasks.unshift({content: task, status: false})
    },

    // Mutation to remove task
    REMOVE_TASK(state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1);
    },

    // Mutation to toggle task status
    TOGGLE_TASK(state, task) {
        task.status = !task.status;
    },
}

export const actions = {}


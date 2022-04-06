<template>
  <div class="flex justify-center items-center">
    <div class="flex flex-col pt-8 lg:w-2/5 sm:w-3/5 w-11/12 gap-4">
      <div class="lg:text-center">
        <h2
          class="
            text-base text-indigo-600
            font-semibold
            tracking-wide
            uppercase
          "
        >
          2022 © Muhd Rahiman
        </h2>
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Ray's Todo App
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          A simple todo app created using Nuxt.js, Vuex and Tailwind CSS.
        </p>
      </div>
      <div class="flex gap-2">
        <input
          placeholder="New Task"
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          v-model="newTask"
          @keyup.enter="addTask"
        />
        <button
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
          aria-label="Add task"
          @click="addTask"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      <TransitionGroup name="fade" tag="div">
        <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
      </TransitionGroup>
    </div>
  </div>
</template>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(
    30px
  ); /* -30px for animation from top, 30px for animation from bottom */
}
</style>

<script>
export default {
  name: "Todo",

  data() {
    return {
      newTask: "",
    };
  },

  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>
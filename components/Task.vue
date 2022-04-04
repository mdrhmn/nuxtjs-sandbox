<template>
  <div class="flex items-center gap-2">
    <div
      class="
        flex flex-grow
        items-center
        gap-6
        bg-gray-200
        p-2
        rounded
        cursor-pointer
      "
    >
      <input
        v-if="task.status"
        class="
          flex-none
          focus:ring-blue-500
          h-4
          w-4
          ml-4
          text-blue-500
          border-gray-300
          rounded
        "
        type="checkbox"
        v-model="toggleStatus"
        checked
      />
      <input
        v-else
        class="
          flex-none
          focus:ring-blue-500
          h-4
          w-4
          ml-4
          text-blue-500
          border-gray-300
          rounded
        "
        type="checkbox"
        v-model="toggleStatus"
      />
      <div class="flex-grow pr-4">
        {{ task.content }}
        {{ task.status }}
      </div>
    </div>
    <button
      class="
        flex-none
        bg-red-500
        hover:bg-red-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
      @click="removeTask"
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
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ["task"],

  methods: {
    removeTask() {
      this.$store.commit("REMOVE_TASK", this.task);
    },
  },

  computed: {
    toggleStatus: {
      get: function () {
        return this.$store.state.tasks[this.task];
      },
      set: function (val) {
        this.$store.commit("TOGGLE_TASK", this.task);
      },
    },
  },
};
</script>


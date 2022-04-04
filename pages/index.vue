<template>
  <main>
    <Todo />
  </main>
</template>

<script>
export default {
  name: "Index",

  // When you use SSR you don't have access to the browser storage.
  // To do a workaround, you can dispatch an action on the mounted component hook.
  // References:
  // https://stackoverflow.com/questions/62789608/how-do-i-access-localstorage-in-store-of-nuxtjs
  // https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store/
  // https://css-tricks.com/quick-localstorage-usage-in-vue/
  // https://www.section.io/engineering-education/vue2-crud-app-with-localstorage/

  watch: {
    tasks: {
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.$store.state.tasks));
      },
      deep: true,
    },
  },

  mounted() {
    if (!process.client) return;
    const savedData = localStorage.getItem("tasks");

    if (savedData) {
      this.$store.commit("INITIALISE_STORE");
    }
  },
};
</script>

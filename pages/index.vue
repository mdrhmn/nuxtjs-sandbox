<template>
  <main>
    <ClientOnly>
      <Todo />
    </ClientOnly>
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
  // https://medium.com/js-dojo/how-to-permanently-save-data-with-vuex-localstorage-in-your-vue-app-f1d5c140db69

  head() {
    return {
      title: "Ray's Todo App",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "Ray's Todo App",
          content:
            "A simple todo app created using Nuxt.js, Vuex and Tailwind CSS.",
        },
      ],
    };
  },

  // watch: {
  //   tasks: {
  //     handler() {
  //       localStorage.setItem("tasks", JSON.stringify(this.$store.state.tasks));
  //     },
  //     deep: true,
  //   },
  // },

  beforeCreate() {
    if (!process.client) return;
    const savedData = localStorage.getItem("store");

    if (savedData) {
      this.$store.commit("INITIALISE_STORE");
    }
  },
};
</script>

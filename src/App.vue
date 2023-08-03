<template>
  <div>
    <header>
      <h2 class="q-ml-lg">Bday Reminder</h2>
    </header>
    <main>
      <div class="main-container">
        <the-navigation></the-navigation>
        <div class="outline q-mt-lg">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TheNavigation from "./components/TheNavigation.vue";
//import MainLayout from "./layouts/MainLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    TheNavigation,
    //  MainLayout,
  },
});
</script>
<style lang="scss" scoped>
header {
  height: 10vh;
  background-color: $primary;
  color: $secondary;
  display: flex;
  align-items: center;
  box-shadow: 0 0 20px 2px rgba(240, 235, 235, 0.2);

  & h2 {
    font-family: "Chicle", cursive;
    font-size: 3rem;
    letter-spacing: 1.5px;
    font-weight: 400;
  }
}

main {
  display: flex;
  justify-content: center;

  & .main-container {
    width: 100vw;
    max-width: 500px;
    height: 88vh;
  }
}

.outline {
  width: 90%;
  height: 85%;
  border: 2px solid $primary;
  border-radius: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top: 0px;

  margin: 2rem auto;
  overflow: scroll;
}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

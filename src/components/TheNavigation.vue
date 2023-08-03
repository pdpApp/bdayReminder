<template>
  <div class="navbar q-mt-lg bgcolor">
    <div class="nav-item">
      <router-link to="/addFriend">Add Friend</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/friends">Friends ( {{ friendsCount }} )</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TheNavigation",

  setup() {
    const friendsCount = ref(75);
    return {
      friendsCount,
    };
  },
});
</script>

<style lang="scss" scoped>
.bgcolor {
  //background-color: rgb(211, 211, 211);
}
.navbar {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-evenly;
  //border-bottom: 2px solid $primary;
}

.nav-item {
  padding: 0.7rem;
  border-top: 2px solid $primary;
  border-left: 2px solid $primary;
  border-right: 2px solid $primary;
  border-bottom: 2px solid $primary;
  border-radius: 9px;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: rgba(206, 196, 196, 0.082);
    //background-color: #7a7373;
  }
}

a {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  color: $primary;
  font-family: "Chicle", cursive;
  font-size: 1.3rem;
}

a:hover,
a:active,
a.router-link-active {
}
</style>

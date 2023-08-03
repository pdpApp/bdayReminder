import MainLayout from "../layouts/MainLayout.vue";
import ViewFriend from "../components/view_friend/ViewFriend.vue";
import AddFriend from "../components/add_friend/AddFriend.vue";

const routes = [
  {
    path: "/",
    component: AddFriend,
  },
  {
    path: "/friends",
    component: ViewFriend,
  },
  {
    path: "/addFriend",
    component: AddFriend,
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

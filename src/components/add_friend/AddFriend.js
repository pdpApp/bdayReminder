import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AddFriend",

  setup() {
    const friendsCount = ref(75);
    const friendName = ref("");
    const friendBirthdate = ref("");
    const reminderDays = ref(null);
    const options = [
      { label: "On the day", value: "1" },
      { label: "1 day prior", value: "2" },
      { label: "1 week prior", value: "3" },
      { label: "1 month prior", value: "4" },
    ];
    const group = ref([]);
    function addFriend() {
      console.log(friendName.value);
      console.log(friendBirthdate.value);
      console.log(group.value);
      console.log(reminderDays.value);
    }

    return {
      friendsCount,
      friendName,
      friendBirthdate,
      reminderDays,
      group,
      options,
      addFriend,
    };
  },
});

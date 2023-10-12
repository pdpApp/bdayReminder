<template>
  <div class="form-container q-mt-xl bgcolor">
    <q-input
      dark
      clearable
      filled
      color="primary"
      width="100px"
      label-color="secondary"
      v-model.trim="friendName"
      label="Friend's  Name"
    />
    <q-input
      dark
      color="primary"
      v-model="friendBirthdate"
      filled
      type="date"
      label="Friend's Birth date"
      stack-label
      class="q-mt-lg"
    />
    <div class="reminder-block">
      <div class="reminder-block__header">Reminder days</div>
      <div class="reminder-block__content">
        <q-option-group
          :options="options"
          type="checkbox"
          dark
          v-model="group"
        />
        <div class="reminder-block__custom-days-container row items-baseline">
          <q-input
            v-model.number="reminderDays"
            type="number"
            dense
            outlined
            dark
            min="0"
            max="365"
            style="max-width: 5.5rem; font-size: 1.3rem"
          />
          <span class="q-ml-sm">days prior</span>
        </div>
      </div>
    </div>

    <q-btn
      class="q-mt-xl m-btn"
      color="accent"
      size="18px"
      label="Make Reminder"
      @click="addFriendAndMakeReminder()"
    />
  </div>
</template>

<script src="./AddFriend.js"></script>
<style src="./AddFriend.scss" lang="scss" scoped></style>

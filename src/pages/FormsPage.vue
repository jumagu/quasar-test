<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const form = ref({
  fullName: '',
  age: 0,
  accept: false,
  errorInAccept: false,
});

const onSubmit = () => {
  // alert(
  //   `Full name: ${form.value.fullName}\nAge: ${form.value.age}\nLicense accepted: ${form.value.accept}`
  // );

  $q.notify({
    message: `
    <div>Full name: ${form.value.fullName}</div>
    <div>Age: ${form.value.age}</div>
    <div>License accepted: ${form.value.accept}</div>
    `,
    color: 'primary',
    html: true,
    multiLine: true,
    actions: [{ label: 'OK', color: 'amber', handler: () => {} }],
  });
};

const onReset = () => {
  form.value = {
    fullName: '',
    age: 0,
    accept: false,
    errorInAccept: false,
  };
};
</script>

<template>
  <q-page class="q-pa-md">
    <span class="text-h4">Forms</span>

    <q-separator spaced />

    <div class="q-mx-auto q-mt-xl" style="max-width: 400px">
      <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="form.fullName"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="form.age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle
          v-model="form.accept"
          label="I accept the license and terms"
        />

        <div class="row justify-end">
          <q-btn label="Reset" type="reset" color="primary" flat />
          <q-btn label="Submit" type="submit" color="primary" class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

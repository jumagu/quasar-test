<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const name = ref('');

const alert = () => {
  $q.dialog({
    title: 'Alert',
    message: 'Some message',
  })
    .onOk(() => {
      console.log('OK');
    })
    .onCancel(() => {
      console.log('Cancel');
    })
    .onDismiss(() => {
      console.log('I am triggered on both OK and Cancel');
    });
};

const confirm = () => {
  $q.dialog({
    title: 'Confirm',
    message: 'Would you like to turn on the wifi?',
    cancel: true,
    persistent: true,
  })
    .onOk(() => {
      console.log('>>>> OK');
    })
    .onOk(() => {
      console.log('>>>> second OK catcher');
    })
    .onCancel(() => {
      console.log('>>>> Cancel');
    })
    .onDismiss(() => {
      console.log('I am triggered on both OK and Cancel');
    });
};

const prompt = () => {
  $q.dialog({
    title: 'Prompt',
    message: 'What is your name?',
    position: 'bottom',
    prompt: {
      model: '',
      type: 'text', // optional
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      name.value = data;
    })
    .onCancel(() => {
      console.log('>>>> Cancel');
    })
    .onDismiss(() => {
      console.log('I am triggered on both OK and Cancel');
    });
};
</script>

<template>
  <q-page class="q-pa-md">
    <h1 class="q-gutter-none text-h4">Dialogs</h1>

    <span v-if="name" class="text-accent">Name: {{ name }}</span>

    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert" />
      <q-btn label="Confirm" color="primary" @click="confirm" />
      <q-btn label="Prompt" color="primary" @click="prompt" />
    </div>
  </q-page>
</template>

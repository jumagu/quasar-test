<script setup lang="ts">
defineOptions({
  name: 'TypographyPage',
});
</script>

<template>
  <q-page>
    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col bg-accent"></div>
    </div>

    <q-separator spaced />

    <div class="row">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col-6 bg-accent"></div>
    </div>

    <div class="row reverse">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col-6 bg-accent"></div>
    </div>

    <q-separator spaced />

    <div class="row">
      <div class="col-12 col-md bg-primary"></div>
      <div class="col-12 col-md bg-secondary"></div>
      <div class="col-12 col-md col-lg-6 bg-accent"></div>
    </div>

    <q-separator spaced />

    <div class="column items-center bg-dark">
      <div class="square-box bg-primary"></div>
      <div class="square-box bg-secondary"></div>
      <div class="square-box bg-accent"></div>
    </div>

    <q-separator spaced />

    <div class="column justify-center items-center custom-height bg-dark">
      <div class="bg-primary"></div>
      <div class="bg-secondary"></div>
      <div class="bg-accent"></div>
    </div>

    <q-separator spaced />

    <div class="column justify-evenly items-center custom-height bg-dark">
      <div class="bg-primary"></div>
      <div class="bg-secondary"></div>
      <div class="bg-accent"></div>
    </div>
  </q-page>
</template>

<style lang="css" scoped>
.col,
.col-12 {
  height: 16rem;
}

.square-box {
  width: 16rem;
  height: 16rem;
}

.custom-height {
  height: 300px;
}

.custom-height > div {
  width: 3rem;
  height: 3rem;
}
</style>

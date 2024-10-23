<script setup lang="ts">
import { useUiStore } from 'src/stores/ui-store';

defineOptions({
  name: 'TypographyPage',
});

const uiStore = useUiStore();
</script>

<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <span class="text-subtitle1"> Subtitle 1</span>
    <span class="text-subtitle2"> Subtitle 2</span>

    <p class="text-body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
      officiis? Ab iste natus praesentium, molestias quisquam maiores illum
      soluta quae voluptatem ipsam sed minus qui beatae voluptas fugiat magni
      consequuntur!
    </p>
    <p class="text-body2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
      officiis? Ab iste natus praesentium, molestias quisquam maiores illum
      soluta quae voluptatem ipsam sed minus qui beatae voluptas fugiat magni
      consequuntur!
    </p>

    <span class="text-weight-thin">
      Deserunt veniam cillum enim consectetur.
    </span>
    <span class="text-weight-light">
      Deserunt veniam cillum enim consectetur.
    </span>
    <span class="text-weight-regular">
      Deserunt veniam cillum enim consectetur.
    </span>
    <span class="text-weight-medium">
      Deserunt veniam cillum enim consectetur.
    </span>
    <span class="text-weight-bold">
      Deserunt veniam cillum enim consectetur.
    </span>
    <span class="text-weight-bolder">
      Deserunt veniam cillum enim consectetur
    </span>
    <q-btn
      color="primary"
      :label="uiStore.isSideMenuOpen ? 'Close side menu' : 'Open side menu'"
      class="q-mt-lg"
      @click="uiStore.toggleSideMenu"
    ></q-btn>
  </q-page>
</template>

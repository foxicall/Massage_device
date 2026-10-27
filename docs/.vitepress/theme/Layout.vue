<script setup>
import DefaultTheme from 'vitepress/theme'
import InteractiveModel from '../components/InteractiveModel.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-after>
      <ClientOnly>
        <InteractiveModel />
      </ClientOnly>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import InteractiveModel from '../components/InteractiveModel.vue'
import { useData } from 'vitepress'
import FasciaVillage from '../components/village/FasciaVillage.vue'
const { frontmatter } = useData()
</script>

<template>
  <FasciaVillage v-if="frontmatter.village" />
  <DefaultTheme.Layout v-else>
    <template #home-hero-after>
      <ClientOnly>
        <InteractiveModel />
      </ClientOnly>
    </template>
  </DefaultTheme.Layout>
</template>

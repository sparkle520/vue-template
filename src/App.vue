<script setup lang="ts">
</script>

<template>
 <div id="main">
    <router-view v-slot="{ Component }">
        <component :is="Component" :key="$route.fullPath" />
    </router-view>
  </div>
</template>

<style scoped>

</style>

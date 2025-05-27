<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const data = ref(null)

const fetchData = async () => {
  const response = await axios.get(API_BASE_URL)
  data.value = response.data
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <p>{{ data }}</p>
</template>

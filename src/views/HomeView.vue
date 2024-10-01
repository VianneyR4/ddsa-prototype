<script setup>
import { onMounted, ref } from 'vue'
import { useGuidelineJson } from '../stores/store'
import PerformProtocol from '../components/PerformProtocol.vue'
import { Protocol } from '@openclinical/proformajs'

// Make protocolList a reactive variable
const protocolList = ref(null)
const store = useGuidelineJson()

onMounted(() => {
  store.assignDataFromJson()
  const json = store.guidelines['matt'] ? store.guidelines['matt']['ddsa_adult8'] : null
  console.log(JSON.stringify(json, null, 2))
  // Set the reactive variable with the new value
  protocolList.value = json && json.class ? new Protocol[json.class](json) : null
})
</script>

<template>
  <div>
    <div v-if="protocolList" class="mb-3">
      Proforma
      <PerformProtocol :protocol="protocolList" />
    </div>
    <div v-else>
      <span>Empty or null...</span>
    </div>
    <h1>Guidelines</h1>
    <div v-if="protocolList">
      <pre>{{ protocolList }}</pre>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

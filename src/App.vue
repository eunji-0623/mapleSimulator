<script setup>
import { ref } from 'vue'

const radioTest = ref(false)
</script>

<template>
  <q-card>
    <p>메이플 시뮬레이터</p>
    <q-btn outline flat>테스트</q-btn>
    <q-radio v-model="radioTest" val="Y" label="테스트 라디오" />
  </q-card>
</template>

<style scoped></style>

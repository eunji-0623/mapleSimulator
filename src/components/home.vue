<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const royal = () => {
  router.push({
    path: '/royal',
  })
}
</script>

<template>
  <q-page class="flex justify-center items-center" style="min-height: 100vh">
    <q-card class="flex justify-center items-center no-box-shadow">
      <q-card-section>
        <h2 class="text-center">메이플 시뮬레이터</h2>
        <div class="q-pa-md flex gap-10">
          <q-btn
            class="color-darkgrey"
            label="로얄스타일"
            outline
            @click="royal"
          />
          <q-btn class="color-darkgrey" label="플래티넘애플" outline />
          <q-btn class="color-darkgrey" label="소울" outline />
          <q-btn class="color-darkgrey" label="해방무기큐브" outline />
          <q-btn class="color-darkgrey" label="자석펫" outline />
          <q-btn class="color-darkgrey" label="반지상자" outline />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped></style>

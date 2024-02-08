<template>
  <div
    v-if="!isInputError && cowCeckData.cowId"
    class="rounded-lg border border-slate-300 m-5 p-6"
  >
    <ul
      role="list"
      class="marker:text-blue-600 list-disc grid grid-cols-4 text-sm text-gray-600 dark:text-gray-400"
    >
      <li>個体ID: {{ cowCeckData.cowId }}</li>
      <li>個体識別番号: {{ cowCeckData.identificationNumber }}</li>
      <li>月齢: {{ cowCeckData.ageInMonths }}</li>
      <li>入牧日: {{ cowCeckData.inDay }}</li>
      <li>退牧日: {{ cowCeckData.outDay }}</li>
      <li>牛群・牛房: {{ cowCeckData.group }}</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isInputError: Boolean,
  cowCeckData: Object,
});
</script>

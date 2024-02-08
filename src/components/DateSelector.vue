<template>
  <div style="display: flex; justify-content: center; align-items: center">
    <button
      type="button"
      @click="decreaseDate"
      class="m-2 py-3 px-4 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      ≪
    </button>
    <input
      type="date"
      v-model="localSelectedDate"
      class="block w-36 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-xs focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
    />
    <button
      type="button"
      @click="increaseDate"
      class="m-2 py-3 px-4 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      ≫
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// Props
const props = defineProps({
  modelValue: String,
});

// Local state
const localSelectedDate = ref(props.modelValue);

// Emit
const emit = defineEmits(['update:modelValue']);

// Watch for prop changes to update local state
watch(
  () => props.modelValue,
  (newValue) => {
    localSelectedDate.value = newValue;
  }
);

// Watch for local changes to emit update
watch(localSelectedDate, (newValue) => {
  emit('update:modelValue', newValue);
});

// Actions
const decreaseDate = () => {
  const date = new Date(localSelectedDate.value);
  date.setDate(date.getDate() - 1);
  localSelectedDate.value = date.toISOString().split('T')[0];

  const jsonData = JSON.stringify({ date: localSelectedDate.value });
  FileMaker.PerformScript('tiryouData', jsonData);
  FileMaker.PerformScript('datechange', jsonData);
};

const increaseDate = () => {
  const date = new Date(localSelectedDate.value);
  date.setDate(date.getDate() + 1);
  localSelectedDate.value = date.toISOString().split('T')[0];

  const jsonData = JSON.stringify({ date: localSelectedDate.value });
  FileMaker.PerformScript('tiryouData', jsonData);
  FileMaker.PerformScript('datechange', jsonData);
};
</script>

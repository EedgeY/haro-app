// usetokubetsuData.js
import { ref } from 'vue';

export const tiryouData = ref([]);

export async function tiryouDataFM(jsonData) {
  const data = JSON.parse(jsonData);
  tiryouData.value = data;
}

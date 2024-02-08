// useOwnerMaster.js
import { ref } from 'vue';

export const ownerMaster = ref([]);

export async function ownerMasterFM(jsonData) {
  const data = JSON.parse(jsonData);
  ownerMaster.value = data;
}

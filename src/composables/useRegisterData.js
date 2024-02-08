// useRegisterData.js
import { ref } from 'vue';

let isRegisterDataFMCalled = false;

export const registerData = ref([]);

export async function registerDataFM(jsonData) {
  if (isRegisterDataFMCalled) {
    return;
  }
  const data = JSON.parse(jsonData);
  registerData.value = [...registerData.value, ...data];

  setTimeout(() => {
    FileMaker.PerformScript('registerDataFM2');
  }, 1000);

  setTimeout(() => {
    FileMaker.PerformScript('registerDataFM3');
  }, 2000);

  setTimeout(() => {
    FileMaker.PerformScript('registerDataFM4');
  }, 5000);

  setTimeout(() => {
    FileMaker.PerformScript('registerDataFM5');
  }, 10000);

  isRegisterDataFMCalled = true;
}

export async function registerDataFM2(jsonData) {
  const data = JSON.parse(jsonData);
  registerData.value = [...registerData.value, ...data];
}
export async function registerDataFM3(jsonData) {
  const data = JSON.parse(jsonData);
  registerData.value = [...registerData.value, ...data];
}
export async function registerDataFM4(jsonData) {
  const data = JSON.parse(jsonData);
  registerData.value = [...registerData.value, ...data];
}

export async function registerDataFM5(jsonData) {
  const data = JSON.parse(jsonData);
  registerData.value = [...registerData.value, ...data];
}

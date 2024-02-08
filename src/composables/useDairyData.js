import { ref } from 'vue';

let isDairyDataFMCalled = false;

export const data = ref([]);
export const hansyokuData = ref([]);

export async function fetchFileMakerData() {
  if (isDairyDataFMCalled) {
    return;
  }
  FileMaker.PerformScript('dashboardData');
  isDairyDataFMCalled = true;
}

export async function hansyokuDataFM(hansyokuDataJson) {
  try {
    const hansyokuDataParsed = JSON.parse(hansyokuDataJson);
    hansyokuData.value = hansyokuDataParsed;
  } catch (error) {
    console.error('データ処理エラー:', error);
  }
}

export async function diaryDataFM(diaryDataJson) {
  try {
    const diaryData = JSON.parse(diaryDataJson);
    data.value = diaryData;
  } catch (error) {
    console.error('データ処理エラー:', error);
  }
}

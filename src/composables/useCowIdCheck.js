//管理番号＋畜主ID（個体ID）で個体checkとデータを表示
import { ref, watch } from 'vue';

export function useCowIdCheck(ownerId, cowNumber) {
  const isInputError = ref(false);
  const cowCeckData = ref({});

  // FileMakerから呼び出される関数を定義
  window.setCowIdCheckResult = (result, data = '{}') => {
    if (result === 'true') {
      isInputError.value = false;
      console.log(data);
      // 文字列形式のdataをオブジェクトに変換してから設定
      cowCeckData.value = JSON.parse(data);
      console.log(cowCeckData);
    } else {
      isInputError.value = true;
      cowCeckData.value = {}; // 結果がfalseの場合はデータをクリア
    }
  };

  function cowIdCheckFM() {
    const cowId = `${ownerId.value}${cowNumber.value}`;
    FileMaker.PerformScript('cowIdCheck', cowId); // 結果はsetCowIdCheckResultで受け取る
  }

  watch([ownerId, cowNumber], () => {
    isInputError.value = false; // ownerIdまたはcowNumberが変更されたらエラー状態をリセット
  });

  return { isInputError, cowCeckData, cowIdCheckFM };
}

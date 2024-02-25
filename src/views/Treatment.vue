<script setup>
import {
  ref,
  reactive,
  nextTick,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import { useCowIdCheck } from '../composables/useCowIdCheck';
import { tiryouData, tiryouDataFM } from '../composables/useTityouData';
import CowDataDisplay from '../components/CowDataDisplay.vue';
import DateSelector from '../components/DateSelector.vue';
import Title from '../components/Title.vue';

const selectedDate = ref(new Date().toISOString().split('T')[0]);
setTimeout(() => {
  FileMaker.PerformScript('GetOwnerMaster');
  const jsonData = JSON.stringify({ date: selectedDate.value });
  FileMaker.PerformScript('tiryouData', jsonData);
}, 100);
window.tiryouDataFM = tiryouDataFM;

const ownerId = ref('');
const cowNumber = ref('');
const classificationId = ref('');
const bodyTemperature = ref('');
const diseaseId = ref('');
const symptomsId = ref('');
const medicineId1 = ref('');
const medicinedosage1 = ref('');
const medicinedays1 = ref('');

const medicineId2 = ref('');
const medicinedosage2 = ref('');
const medicinedays2 = ref('');

const medicineId3 = ref('');
const medicinedosage3 = ref('');
const medicinedays3 = ref('');

const medicineId4 = ref('');
const medicinedosage4 = ref('');
const medicinedays4 = ref('');

const reservationDate = ref('');
const veterinarianId = ref('');

//これは表示のみ使う
const ownerSelectedName = ref('');
const diseaseNameSelectedName = ref('');
const classificationSelectedName = ref('');
const medicineSelectedName1 = ref('');
const medicineSelectedName2 = ref('');
const medicineSelectedName3 = ref('');
const medicineSelectedName4 = ref('');
const veterinarianSelectedName = ref('');
const symptomsSelectedName = ref('');

// ownerMasterのデータを取得して扱うコードをここに追加
const ownerMaster = ref();
const diseaseMster = ref();
const veterinarianMster = ref();
const classificationMster = ref();
const symptomsMster = ref('');

function ownerMasterFM(jsonData) {
  const data = JSON.parse(jsonData);
  ownerMaster.value = data;
}

window.ownerMasterFM = ownerMasterFM;

watch(ownerId, (newId) => {
  const selectedownerItem = ownerMaster.value.find((item) => item.id == newId);
  if (selectedownerItem) ownerSelectedName.value = selectedownerItem.name;
});

watch(ownerSelectedName, (newName) => {
  const selectedownerItem = ownerMaster.value.find(
    (item) => item.name === newName
  );
  if (selectedownerItem) ownerId.value = selectedownerItem.id;
});

//個体checkとデータ表示
const { isInputError, cowCeckData, cowIdCheckFM } = useCowIdCheck(
  ownerId,
  cowNumber
);

const resetFocus = () => {
  nextTick(() => {
    const inputElement = document.querySelector('[tabindex="1"]');
    if (inputElement) inputElement.focus();
  });
};

function diseaseMsterFM(jsonData) {
  const data = JSON.parse(jsonData);
  diseaseMster.value = data;
}
window.diseaseMsterFM = diseaseMsterFM;

watch(diseaseId, (newId) => {
  const selectedDiseaseItem = diseaseMster.value.find(
    (item) => item.id == newId
  );
  if (selectedDiseaseItem)
    diseaseNameSelectedName.value = selectedDiseaseItem.name;
});

watch(diseaseNameSelectedName, (newName) => {
  const selectedDiseaseItem = diseaseMster.value.find(
    (item) => item.name === newName
  );
  if (selectedDiseaseItem) diseaseId.value = selectedDiseaseItem.id;
});

function symptomsMsterFM(jsonData) {
  const data = JSON.parse(jsonData);
  symptomsMster.value = data;
}
window.symptomsMsterFM = symptomsMsterFM;

watch(symptomsId, (newId) => {
  const selectedSymptomsItem = symptomsMster.value.find(
    (item) => item.id == newId
  );
  if (selectedSymptomsItem)
    symptomsSelectedName.value = selectedSymptomsItem.name;
});

watch(symptomsSelectedName, (newName) => {
  const selectedSymptomsItem = symptomsMster.value.find(
    (item) => item.name === newName
  );
  if (selectedSymptomsItem) symptomsId.value = selectedSymptomsItem.id;
});

function classificationMsterFM(jsonData) {
  const data = JSON.parse(jsonData);
  classificationMster.value = data;
}
window.classificationMsterFM = classificationMsterFM;

watch(classificationId, (newId) => {
  const selectedClassificationItem = classificationMster.value.find(
    (item) => item.id == newId
  );
  if (selectedClassificationItem)
    classificationSelectedName.value = selectedClassificationItem.name;
});

watch(classificationSelectedName, (newName) => {
  const selectedClassificationItem = classificationMster.value.find(
    (item) => item.name === newName
  );
  if (selectedClassificationItem)
    classificationId.value = selectedClassificationItem.id;
});

const medicineMster = ref();
function medicineMsterFM(jsonData) {
  const data = JSON.parse(jsonData);
  medicineMster.value = data;
}
window.medicineMsterFM = medicineMsterFM;

watch(medicineId1, (newId) => {
  const selectedMedicine1Item = medicineMster.value.find(
    (item) => item.id == newId
  );
  if (selectedMedicine1Item)
    medicineSelectedName1.value = selectedMedicine1Item.name;
});

watch(medicineSelectedName1, (newName) => {
  const selectedMedicine1Item = medicineMster.value.find(
    (item) => item.name === newName
  );
  if (selectedMedicine1Item) medicineId1.value = selectedMedicine1Item.id;
});
watch(medicineId2, (newId) => {
  const selectedMedicine2Item = medicineMster.value.find(
    (item) => item.id == newId
  );
  if (selectedMedicine2Item)
    medicineSelectedName2.value = selectedMedicine2Item.name;
});

watch(medicineSelectedName2, (newName) => {
  const selectedMedicine2Item = medicineMster.value.find(
    (item) => item.name === newName
  );
  if (selectedMedicine2Item) medicineId2.value = selectedMedicine2Item.id;
});

watch(medicineId3, (newId) => {
  const selectedMedicine3Item = medicineMster.value.find(
    (item) => item.id == newId
  );
  if (selectedMedicine3Item)
    medicineSelectedName3.value = selectedMedicine3Item.name;
});

watch(medicineSelectedName3, (newName) => {
  const selectedMedicine3Item = medicineMster.value.find(
    (item) => item.name === newName
  );
  if (selectedMedicine3Item) medicineId3.value = selectedMedicine3Item.id;
});
watch(medicineId4, (newId) => {
  const selectedMedicine4Item = medicineMster.value.find(
    (item) => item.id == newId
  );
  if (selectedMedicine4Item)
    medicineSelectedName4.value = selectedMedicine4Item.name;
});

watch(medicineSelectedName4, (newName) => {
  const selectedMedicine4Item = medicineMster.value.find(
    (item) => item.name === newName
  );
  if (selectedMedicine4Item) medicineId4.value = selectedMedicine4Item.id;
});

function veterinarianMsterFM(jsonData) {
  const data = JSON.parse(jsonData);
  veterinarianMster.value = data;
}
window.veterinarianMsterFM = veterinarianMsterFM;

watch(veterinarianId, (newId) => {
  const selectedVeterinarianItem = veterinarianMster.value.find(
    (item) => item.id == newId
  );
  if (selectedVeterinarianItem)
    veterinarianSelectedName.value = selectedVeterinarianItem.name;
});

watch(veterinarianSelectedName, (newName) => {
  const selectedVeterinarianItem = veterinarianMster.value.find(
    (item) => item.name === newName
  );
  if (selectedVeterinarianItem)
    veterinarianId.value = selectedVeterinarianItem.id;
});

// resetNewItem関数を定義
const resetNewItem = () => {
  ownerId.value = '';
  cowNumber.value = '';
  classificationId.value = '';
  bodyTemperature.value = '';
  diseaseId.value = '';
  symptomsId.value = '';
  medicineId1.value = '';
  medicinedosage1.value = '';
  medicinedays1.value = '';
  medicineId2.value = '';
  medicinedosage2.value = '';
  medicinedays2.value = '';
  medicineId3.value = '';
  medicinedosage3.value = '';
  medicinedays3.value = '';
  medicineId4.value = '';
  medicinedosage4.value = '';
  medicinedays4.value = '';
  reservationDate.value = '';
  veterinarianId.value = '';
  ownerSelectedName.value = '';
  diseaseNameSelectedName.value = '';
  classificationSelectedName.value = '';
  medicineSelectedName1.value = '';
  medicineSelectedName2.value = '';
  medicineSelectedName3.value = '';
  medicineSelectedName4.value = '';
  veterinarianSelectedName.value = '';
  symptomsSelectedName.value = '';
};

// tokubetsuAdd関数を定義
function CreateData() {
  // FileMakerに渡すデータオブジェクトを作成
  const data = {
    date: selectedDate.value,
    ownerId: ownerId.value,
    cowNumber: cowNumber.value,
    classificationId: classificationId.value,
    bodyTemperature: bodyTemperature.value,

    diseaseId: diseaseId.value,
    symptomsId: symptomsId.value,
    medicineId1: medicineId1.value,
    medicinedosage1: medicinedosage1.value,
    medicinedays1: medicinedays1.value,

    medicineId2: medicineId2.value,
    medicinedosage2: medicinedosage2.value,
    medicinedays2: medicinedays2.value,

    medicineId3: medicineId3.value,
    medicinedosage3: medicinedosage3.value,
    medicinedays3: medicinedays3.value,

    medicineId4: medicineId4.value,
    medicinedosage4: medicinedosage4.value,
    medicinedays4: medicinedays4.value,
    reservationDate: reservationDate.value,
    veterinarianId: veterinarianId.value,
  };

  // データオブジェクトをJSON文字列に変換
  const jsonData = JSON.stringify(data);

  //FileMakerのスクリプトを実行し、JSONデータを渡す
  FileMaker.PerformScript('CreateTiryouData', jsonData);
  //入力フィールドをリセット
  resetNewItem();
  resetFocus();
  setTimeout(() => {
    const jsonData = JSON.stringify({ date: selectedDate.value });
    FileMaker.PerformScript('tiryouData', jsonData);
  }, 1000);
}

function deleteData(item) {
  // 確認ダイアログを表示
  console.log(item.pk);
  const isConfirmed = confirm('このデータを削除しますか？');
  if (!isConfirmed) {
    return; // キャンセルされた場合は何もしない
  }

  FileMaker.PerformScript('DeleteData', item.pk);
  setTimeout(() => {
    const jsonData = JSON.stringify({ date: selectedDate.value });
    FileMaker.PerformScript('tiryouData', jsonData);
  }, 1000);
}

const formRef = ref(null); // フォームの参照を保持するref

// Enterキーが押されたときの処理
const handleEnterKey = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // デフォルトのフォーム送信を防止

    // 現在の要素のタブインデックスを取得
    const currentIndex = event.target.tabIndex;

    // 次の要素を探す
    let nextElement = document.querySelector(
      `[tabindex="${currentIndex + 1}"]`
    );

    // 次の要素が見つかればフォーカスを移動
    if (nextElement) {
      nextElement.focus();
    } else {
      // 次の要素がなければ、フォームの最初の要素にフォーカスを移動
      let firstElement = formRef.value.querySelector('[tabindex="1"]');
      if (firstElement) {
        firstElement.focus();
      }
    }
  }
};

// コンポーネントがマウントされたらイベントリスナーを設定
onMounted(() => {
  if (formRef.value) {
    formRef.value.addEventListener('keydown', handleEnterKey);
  }
});

// コンポーネントがアンマウントされる前にイベントリスナーを削除
onBeforeUnmount(() => {
  if (formRef.value) {
    formRef.value.removeEventListener('keydown', handleEnterKey);
  }
});
const handleButtonKeydown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // ボタンのデフォルトのEnterキーの挙動（フォーム送信など）を防ぐ
    CreateData(); // データを確定する関数を実行
  }
  // Tabキーが押された場合は、デフォルトの挙動（次の要素へのフォーカス移動）を利用するため、何もしない
};
</script>

<template>
  <Title />
  <DateSelector v-model="selectedDate" />
  <CowDataDisplay :isInputError="isInputError" :cowCeckData="cowCeckData" />
  <div class="overscroll-none">
    <div class="flex mx-20 justify-center bg-slate-100">
      <form ref="formRef" class="flex w-full gap-1 p-4">
        <div class="flex flex-col w-52">
          <br />
          <label
            for="cowNumber"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >管理番号</label
          >
          <input
            v-model="cowNumber"
            :class="{ 'border-red-500': isInputError }"
            type="text"
            required
            tabindex="1"
            class="p-2 w-full border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          />
          <h6 v-if="isInputError" class="text-red-600">個体が存在しません</h6>
        </div>

        <div class="flex flex-col w-96">
          <br />
          <label
            for="ownerId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >畜主名</label
          >
          <div class="flex w-full">
            <input
              v-model="ownerId"
              :class="{ 'border-red-500': isInputError }"
              type="text"
              required
              tabindex="2"
              @blur="cowIdCheckFM"
              class="p-2 w-1/5 border-gray-200 rounded-l-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="ownerSelectedName"
              @blur="cowIdCheckFM"
              class="p-2 w-4/5 border-gray-200 rounded-r-lg text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="item in ownerMaster"
                :key="item.id"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex flex-col w-72">
          <label
            for="classificationId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >治療区分</label
          >
          <label
            for="bodyTemperature"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >体温</label
          >
          <div class="flex w-full">
            <input
              v-model="classificationId"
              type="text"
              required
              tabindex="3"
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="classificationSelectedName"
              class="p-2 w-4/5 border-gray-200 rounded-lg rounded-l-none text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="item in classificationMster"
                :key="item.id"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="flex w-full">
            <input
              v-model="bodyTemperature"
              type="text"
              required
              tabindex="4"
              class="p-2 w-full border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
        </div>
        <div class="flex flex-col w-72">
          <label
            for="diseaseId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >病名</label
          >
          <label
            for="symptomsId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >症状</label
          >
          <div class="flex w-full">
            <input
              v-model="diseaseId"
              type="text"
              required
              tabindex="5"
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="diseaseNameSelectedName"
              class="p-2 w-4/5 border-gray-200 rounded-lg rounded-l-none text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="item in diseaseMster"
                :key="item.id"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="flex w-full">
            <input
              v-model="symptomsId"
              type="text"
              required
              tabindex="6"
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="symptomsSelectedName"
              class="p-2 w-4/5 border-gray-200 rounded-lg rounded-l-none text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="item in symptomsMster"
                :key="item.id"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex flex-col">
          <label
            for="medicineId1"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >薬品1</label
          >
          <label
            for="medicineId2"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >薬品2</label
          >
          <div class="flex w-full">
            <input
              v-model="medicineId1"
              type="text"
              required
              tabindex="7"
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="medicineSelectedName1"
              class="p-2 w-4/5 border-gray-200 text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="item in medicineMster"
                :key="item.id"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
            <input
              v-model="medicinedosage1"
              type="text"
              required
              tabindex="8"
              placeholder="量"
              class="p-2 w-1/5 border-gray-200 text-xs focus:border-blue-500 placeholder:text-gray-400 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <input
              v-model="medicinedays1"
              type="text"
              required
              tabindex="9"
              placeholder="指示"
              class="p-2 w-1/5 border-gray-200 rounded-l-none rounded-lg text-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="flex w-full">
            <input
              v-model="medicineId2"
              type="text"
              required
              tabindex="10"
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="medicineSelectedName2"
              class="p-2 w-4/5 border-gray-200 text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="item in medicineMster"
                :key="item.id"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
            <input
              v-model="medicinedosage2"
              type="text"
              required
              tabindex="11"
              placeholder="量"
              class="p-2 w-1/5 border-gray-200 text-xs focus:border-blue-500 placeholder:text-gray-400 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <input
              v-model="medicinedays2"
              type="text"
              required
              tabindex="12"
              placeholder="指示"
              class="p-2 w-1/5 border-gray-200 rounded-l-none rounded-lg text-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label
            for="medicineId3"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >薬品3</label
          >
          <label
            for="medicineId4"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >薬品4</label
          >
          <div class="flex w-full">
            <input
              v-model="medicineId3"
              type="text"
              required
              tabindex="13"
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="medicineSelectedName3"
              class="p-2 w-4/5 border-gray-200 text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="item in medicineMster"
                :key="item.id"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
            <input
              v-model="medicinedosage3"
              type="text"
              required
              tabindex="14"
              placeholder="量"
              class="p-2 w-1/5 border-gray-200 text-xs focus:border-blue-500 placeholder:text-gray-400 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <input
              v-model="medicinedays3"
              type="text"
              required
              tabindex="15"
              placeholder="指示"
              class="p-2 w-1/5 border-gray-200 rounded-l-none rounded-lg text-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="flex w-full">
            <input
              v-model="medicineId4"
              type="text"
              required
              tabindex="16"
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="medicineSelectedName4"
              class="p-2 w-4/5 border-gray-200 text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="item in medicineMster"
                :key="item.id"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
            <input
              v-model="medicinedosage4"
              type="text"
              required
              tabindex="17"
              placeholder="量"
              class="p-2 w-1/5 border-gray-200 text-xs focus:border-blue-500 placeholder:text-gray-400 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <input
              v-model="medicinedays4"
              type="text"
              required
              tabindex="18"
              placeholder="指示"
              class="p-2 w-1/5 border-gray-200 rounded-l-none rounded-lg text-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
        </div>
        <div class="flex flex-col w-72">
          <label
            for="reservationDate"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >次回予約</label
          >
          <label
            for="veterinarianId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            >獣医師</label
          >
          <div class="flex w-full">
            <input
              v-model="reservationDate"
              type="date"
              required
              tabindex="19"
              class="p-2 border-gray-200 w-full rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="flex w-full">
            <input
              v-model="veterinarianId"
              @blur="isInputError ? resetFocus() : null"
              type="text"
              required
              tabindex="20"
              class="p-2 w-1/4 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="veterinarianSelectedName"
              class="p-2 w-full border-gray-200 rounded-lg rounded-l-none text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option
                v-for="item in veterinarianMster"
                :key="item.id"
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex flex-col">
          <label
            for="height"
            class="px-2 py-1 text-xs font-medium uppercase text-gray-500"
            ><br
          /></label>
          <br />
          <button
            @blur="resetFocus"
            @click="CreateData"
            @keydown="handleButtonKeydown"
            :disabled="isInputError"
            tabindex="21"
            type="button"
            class="transform rounded-lg bg-blue-600 px-6 py-2 text-xs font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 disabled:bg-opacity-50"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="flex justify-end mx-20 gap gap-10">
    <div>
      <p class="text-xs text-gray-600">次へ</p>
      <span
        class="flex flex-wrap items-center gap-x-1 text-sm text-gray-600 dark:text-gray-400"
      >
        <kbd
          class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-gray-700 dark:text-gray-200"
        >
          tab
        </kbd>
        or
        <kbd
          class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-gray-700 dark:text-gray-200"
        >
          enter
        </kbd>
      </span>
    </div>
    <div>
      <p class="text-xs text-gray-600">戻る</p>
      <span
        class="flex flex-wrap items-center gap-x-1 text-sm text-gray-600 dark:text-gray-400"
      >
        <kbd
          class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-gray-100 font-mono text-sm text-gray-800 rounded-md dark:bg-gray-700 dark:text-gray-200"
        >
          shift
        </kbd>
        +
        <kbd
          class="min-h-[30px] inline-flex justify-center items-center py-1 px-1.5 bg-gray-100 font-mono text-sm text-gray-800 rounded-md dark:bg-gray-700 dark:text-gray-200"
        >
          tab
        </kbd>
      </span>
    </div>
  </div>
  <div class="flex flex-col my-5">
    <div class="overflow-x-auto">
      <div class="min-w-full inline-block align-middle">
        <div class="overflow-hidden">
          <div class="overflow-auto mx-20 h-[500px]">
            <table
              class="min-w-full table-fixed border-collapse border border-gray-200"
            >
              <thead class="bg-gray-100 sticky top-0">
                <tr>
                  <!-- 各ヘッダーに均等な幅を設定 -->
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    治療日
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    管理番号
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    畜主名
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    区分
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    病名
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    症状
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    薬品名1
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    量
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    指示
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    薬品名2
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    量
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    指示
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    薬品名3
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    量
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    指示
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    薬品名4
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    量
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    指示
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    次回
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    獣医
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    Action
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
                <tr v-for="item in tiryouData" :key="item.pk">
                  <td
                    class="px-6 py-4 w-32 whitespace-nowrap text-xs text-center font-medium text-gray-800"
                  >
                    {{ item.date }}
                  </td>
                  <td
                    class="px-6 py-4 w-32 text-xs text-center font-medium text-gray-800"
                  >
                    {{ item.cowNumber !== 'null' ? item.cowNumber : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-32 text-xs text-center font-medium text-gray-800"
                  >
                    {{ item.ownerName !== 'null' ? item.ownerName : '' }}
                  </td>

                  <td
                    class="px-6 py-4 w-32 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.kubun !== 'null' ? item.kubun : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-32 text-xs text-center font-medium text-gray-800"
                  >
                    {{ item.byoumei !== 'null' ? item.byoumei : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-32 whitespace-nowrap text-xs text-center font-medium text-gray-800"
                  >
                    {{ item.syoujou !== 'null' ? item.syoujou : '' }}
                  </td>

                  <td
                    class="px-6 py-4 w-32 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs font-bold focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin1 !== 'null' ? item.yakuhin1 : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-10 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin1ryo !== 'null' ? item.yakuhin1ryo : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-10 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin1sizi !== 'null' ? item.yakuhin1sizi : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-32 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs font-bold focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin2 !== 'null' ? item.yakuhin2 : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-10 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin2ryo !== 'null' ? item.yakuhin2ryo : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-10 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin2sizi !== 'null' ? item.yakuhin2sizi : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-32 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs font-bold focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin3 !== 'null' ? item.yakuhin3 : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-10 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin3ryo !== 'null' ? item.yakuhin3ryo : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-10 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin3sizi !== 'null' ? item.yakuhin3sizi : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-32 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs font-bold focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin4 !== 'null' ? item.yakuhin4 : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-10 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin4ryo !== 'null' ? item.yakuhin4ryo : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-10 text-center whitespace-nowrap border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {{ item.yakuhin4sizi !== 'null' ? item.yakuhin4sizi : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-32 text-xs text-center font-medium text-gray-800"
                  >
                    {{ item.zikai !== 'null' ? item.zikai : '' }}
                  </td>
                  <td
                    class="px-6 py-4 w-32 whitespace-nowrap text-xs text-center font-medium text-gray-800"
                  >
                    {{ item.juui !== 'null' ? item.juui : '' }}
                  </td>

                  <!-- Add more <td> elements for other properties as needed -->
                  <td
                    class="w-32 flex-col items-center whitespace-nowrap px-6 py-4 text-xs font-medium"
                  >
                    <div class="gap flex w-full justify-center gap-4">
                      <span
                        class="m-1 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full bg-teal-100 text-teal-800 cursor-pointer hover:bg-teal-300"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-edit"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
                          />
                          <path
                            d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
                          />
                          <path d="M16 5l3 3" />
                        </svg>
                      </span>
                      <span
                        class="m-1 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full bg-gray-100 text-gray-800 cursor-pointer hover:bg-gray-300"
                        type="button"
                      >
                        <svg
                          @click="deleteData(item)"
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-trash"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M4 7l16 0" />
                          <path d="M10 11l0 6" />
                          <path d="M14 11l0 6" />
                          <path
                            d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                          />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

<template>
  <div class="overscroll-none animate-pulse">
    <div class="flex mx-20 justify-center bg-slate-100">
      <form class="flex w-full gap-1 p-4">
        <div class="flex flex-col w-52">
          <br />
          <label
            for="cowNumber"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
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
            ><br
          /></label>
          <div class="flex w-full">
            <input
              v-model="ownerId"
              :class="{ 'border-red-500': isInputError }"
              type="text"
              required
              tabindex="2"
              @blur="cowIdCheckFM"
              class="p-2 w-1/5 border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              v-model="ownerSelectedName"
              @blur="cowIdCheckFM"
              class="p-2 w-4/5 border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500"
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
            ><br
          /></label>
          <label
            for=""
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
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
              type="text "
              required
              tabindex="4"
              class="p-2 border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
        </div>
        <div class="flex flex-col w-72">
          <label
            for="ownerId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <label
            for="ownerId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
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
            for="ownerId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <label
            for="ownerId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
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
            for="ownerId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <label
            for="ownerId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
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
            for="ownerId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <label
            for="veterinarianId"
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
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
            :disabled="isInputError"
            tabindex="21"
            type="button"
            class="transform rounded-lg bg-gray-600 px-6 py-2 text-xs font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 disabled:bg-opacity-50"
          ></button>
        </div>
      </form>
    </div>
  </div>
  <div class="flex flex-col my-5 animate-pulse">
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
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-10"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase w-32"
                  >
                    <br />
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
                        <IconEdit
                          :size="20"
                          stroke-width="1"
                          class="text-teal-800"
                        />
                      </span>
                      <span
                        class="m-1 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full bg-gray-100 text-gray-800 cursor-pointer hover:bg-gray-300"
                        type="button"
                      >
                        <IconTrash
                          class="text-gray-800"
                          :size="20"
                          stroke-width="1"
                        />
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

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

onMounted(() => {
  // FileMakerのスクリプトを実行してデータを読み込む

  const router = useRouter();
  // 3秒後に目的のページに遷移する
  setTimeout(() => {
    router.push('/treatment');
  }, 3000);
});
</script>

<style scoped>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

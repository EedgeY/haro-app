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
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <div class="flex w-full">
            <input
              class="p-2 w-1/5 border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              class="p-2 w-4/5 border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option></option>
            </select>
          </div>
        </div>

        <div class="flex flex-col w-72">
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <label
            for=""
            class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <div class="flex w-full">
            <input
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              class="p-2 w-4/5 border-gray-200 rounded-lg rounded-l-none text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option></option>
            </select>
          </div>
          <div class="flex w-full">
            <input
              class="p-2 border-gray-200 rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
        </div>
        <div class="flex flex-col w-72">
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <div class="flex w-full">
            <input
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              class="p-2 w-4/5 border-gray-200 rounded-lg rounded-l-none text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option></option>
            </select>
          </div>
          <div class="flex w-full">
            <input
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              class="p-2 w-4/5 border-gray-200 rounded-lg rounded-l-none text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option></option>
            </select>
          </div>
        </div>
        <div class="flex flex-col">
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <div class="flex w-full">
            <input
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              class="p-2 w-4/5 border-gray-200 text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option></option>
            </select>
            <input
              class="p-2 w-1/5 border-gray-200 text-xs focus:border-blue-500 placeholder:text-gray-400 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <input
              class="p-2 w-1/5 border-gray-200 rounded-l-none rounded-lg text-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="flex w-full">
            <input
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              class="p-2 w-4/5 border-gray-200 text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option></option>
            </select>
            <input
              class="p-2 w-1/5 border-gray-200 text-xs focus:border-blue-500 placeholder:text-gray-400 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <input
              class="p-2 w-1/5 border-gray-200 rounded-l-none rounded-lg text-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <div class="flex w-full">
            <input
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              class="p-2 w-4/5 border-gray-200 text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option></option>
            </select>
            <input
              class="p-2 w-1/5 border-gray-200 text-xs focus:border-blue-500 placeholder:text-gray-400 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <input
              class="p-2 w-1/5 border-gray-200 rounded-l-none rounded-lg text-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="flex w-full">
            <input
              class="p-2 w-1/5 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              class="p-2 w-4/5 border-gray-200 text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option></option>
            </select>
            <input
              class="p-2 w-1/5 border-gray-200 text-xs focus:border-blue-500 placeholder:text-gray-400 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <input
              class="p-2 w-1/5 border-gray-200 rounded-l-none rounded-lg text-xs placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
        </div>
        <div class="flex flex-col w-72">
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <label class="px-2 py-1 text-xs font-medium text-gray-500 uppercase"
            ><br
          /></label>
          <div class="flex w-full">
            <input
              class="p-2 border-gray-200 w-full rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
          </div>
          <div class="flex w-full">
            <input
              class="p-2 w-1/4 border-gray-200 rounded-lg rounded-r-none text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
            <select
              class="p-2 w-full border-gray-200 rounded-lg rounded-l-none text-xs focus:border-blue-500 focus:ring-blue-500"
            >
              <option></option>
            </select>
          </div>
        </div>
        <div class="flex flex-col">
          <label class="px-2 py-1 text-xs font-medium uppercase text-gray-500"
            ><br
          /></label>
          <br />
          <button
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
                    class="px-6 py-3 text-xs font-medium text-gray-500 uppercase"
                  >
                    <br />
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
                <tr class="bg-slate-50 flex justify-center items-center h-20">
                  <th class="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="animate-spin icon icon-tabler icon-tabler-loader-2"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>
                  </th>
                </tr>
                <tr class="bg-slate-50 flex justify-center items-center h-20">
                  <th class="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="animate-spin icon icon-tabler icon-tabler-loader-2"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>
                  </th>
                </tr>
                <tr class="bg-slate-50 flex justify-center items-center h-20">
                  <th class="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="animate-spin icon icon-tabler icon-tabler-loader-2"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>
                  </th>
                </tr>
                <tr class="bg-slate-50 flex justify-center items-center h-20">
                  <th class="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="animate-spin icon icon-tabler icon-tabler-loader-2"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>
                  </th>
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
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const dummyData = ref(new Array(5).fill(null)); // 例として5行のダミーデータ
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

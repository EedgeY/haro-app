<script setup>
function preview() {
  FileMaker.PerformScript('T06preview');
}
</script>

<template>
  <div class="flex m-5">
    <div class="flex justify-center items-center gap gap-9 m-4">
      <h1 class="text-3xl"><br /></h1>
      <a><br /></a>
      <a><br /></a>
    </div>

    <div class="my-1 w-80 items-cente mr-52"></div>
  </div>
  <!-- ========== END HEADER ========== -->
  <div class="flex justify-between">
    <br />
    <div class="flex flex-col bg-slate-50 mr-52 p-5">
      <div class="flex justify-center items-center rounded-lg mb-3">
        <a>日報</a>
      </div>
      <div class="flex gap-5">
        <button
          type="button"
          class="transform cursor-pointer rounded-lg bg-blue-600 px-6 py-2 text-xs font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          disabled
        >
          <svg
            @click="preview"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-printer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"
            />
            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
            <path
              d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

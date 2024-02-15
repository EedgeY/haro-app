<script setup>
function EventAdd() {
  FileMaker.PerformScript('EventAdd');
}
function HomeMove() {
  FileMaker.PerformScript('HomeMove');
}
</script>

<template>
  <!-- ========== HEADER ========== -->
  <header
    class="fixed top-0 flex flex-wrap md:justify-between border-b border-slate-400 md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0"
  >
    <div
      class="flex justify-center items-center border-l-8 border-blue-500 gap gap-9 m-4"
    >
      <h1 class="text-3xl">治療登録</h1>
      <a class="hover:text-blue-600 cursor-pointer" @click="HomeMove">Home </a>
      <a class="hover:text-blue-600 cursor-pointer" @click="EventAdd"
        >イベント登録
      </a>
    </div>

    <div class="my-1 w-80 items-cente mr-52"></div>
  </header>
  <!-- ========== END HEADER ========== -->
</template>

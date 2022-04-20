<template>
  <section class="flags">
    <form class="flags__form" @click.prevent="">
      <div class="form-control">
        <input
          type="text"
          class="flags__search"
          placeholder="Search for a country"
        />
      </div>
      <div class="form-control">
        <button class="flags__filter">Filter by Region</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.flags {
  @apply bg-gray-50 dark:bg-slate-900 h-screen w-screen py-10;
}

.flags__form {
  @apply px-5  flex flex-col md:flex-row md:justify-between justify-center items-center w-screen gap-10;
}

.form-control {
  @apply w-full;
}

.flags__search {
  @apply py-2 px-3 shadow-xl bg-white dark:bg-slate-800 dark:text-white w-full  max-w-md;
}

.flags__filter {
  @apply py-2 px-3 shadow-xl text-black  bg-white dark:bg-slate-800 dark:text-white;
}
</style>

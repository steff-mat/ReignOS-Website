<script>
  export let href = "";

  const baseClasses = "";
</script>

<a
  {href}
  class="bg-green-600 hover:bg-green-700 text-white inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none transition-colors duration-200 min-w-[200px] justify-center cursor-pointer"
  target="_blank"
>
  <slot />
</a>

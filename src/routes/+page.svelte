<script>
  import ReignStudios from "../lib/images/Reign-Studios.svg";

  // Current year for copyright
  $: currentYear = new Date().getFullYear();
</script>

<svelte:head>
  <title>Reign-Studios | Creative Development</title>
  <meta
    name="description"
    content="Welcome to Reign-Studios - Your destination for creative development and innovative solutions."
  />
</svelte:head>

<div
  class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 flex flex-col"
>
  <!-- Navigation -->
  <nav class="w-full py-6 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <img src={ReignStudios} alt="Reign-Studios Logo" class="h-10 w-auto" />
        <span
          class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600"
        >
          Reign-Studios
        </span>
      </div>
      <div class="hidden md:flex items-center space-x-8">
        <a
          href="http://forums.reign-studios.com/"
          class="hover:text-amber-400 transition-colors duration-200">Forums</a
        >
        <a
          href="https://discord.gg/8drkR8HC"
          class="hover:text-amber-400 transition-colors duration-200">Discord</a
        >
        <a
          href="/ReignOS"
          class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          ReignOS
        </a>
      </div>
      <button
        class="md:hidden text-gray-400 hover:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <main class="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-4xl mx-auto py-12 sm:py-20">
      <div class="mb-8">
        <img
          src={ReignStudios}
          alt="Reign-Studios Logo"
          class="mx-auto h-32 w-auto sm:h-40"
        />
      </div>
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600"
      >
        Reign-Studios
      </h1>
      <h2 class="text-xl sm:text-2xl text-amber-300 mb-12">
        Creative Development & Innovation
      </h2>

      <div class="max-w-2xl mx-auto space-y-6 text-lg text-gray-400">
        <p>
          Welcome to Reign-Studios, where creativity meets technology. We build
          innovative solutions and foster a community of developers and
          creators.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="http://forums.reign-studios.com/"
            class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>Visit Forums</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://discord.gg/8drkR8HC"
            class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>Join Discord</span>
            <svg
              class="h-5 w-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.454.867-.622 1.254a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.1 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.8 8.18 1.8 12.063 0a.074.074 0 01.078.01c.12.098.246.192.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.1c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.177 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.177 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center"
    >
      <div class="flex items-center space-x-4 mb-4 md:mb-0">
        <img
          src={ReignStudios}
          alt="Reign-Studios Logo"
          class="h-8 w-auto opacity-70"
        />
        <span class="text-sm text-gray-500">
          {currentYear} Reign-Studios. All rights reserved.</span
        >
      </div>
      <div class="flex space-x-6">
        <!-- <a href="#" class="text-gray-400 hover:text-amber-400 transition-colors duration-200">
          <span class="sr-only">Twitter</span>
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.25c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a> -->
        <a
          href="https://github.com/Reign-Studios"
          class="text-gray-400 hover:text-amber-400 transition-colors duration-200"
        >
          <span class="sr-only">GitHub</span>
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://discord.gg/8drkR8HC"
          class="text-gray-400 hover:text-amber-400 transition-colors duration-200"
        >
          <span class="sr-only">Discord</span>
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.454.867-.622 1.254a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.1 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.8 8.18 1.8 12.063 0a.074.074 0 01.078.01c.12.098.246.192.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.1c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.177 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.177 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</div>

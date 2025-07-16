<script>
  import { onMount } from "svelte";
  import logo from "../../lib/images/ReignOS.png";
  import logoWide from "../../lib/images/ReignOS_Wide.png";
  import getLastRelease from "../../lib/js/getLastRelease";
  import getContent from "../../lib/js/getContent";

  let version = $state("latest release");
  let content = $state({ aboutContent: "", installationContent: "" });
  let isLoading = $state(true);
  let error = $state(null);

  onMount(async () => {
    try {
      const [release, fetchedContent] = await Promise.all([
        getLastRelease(),
        getContent(),
      ]);

      version = release;
      content = fetchedContent;
    } catch (err) {
      console.error("Error loading content:", err);
      error = "Failed to load content. Please try again later.";
    } finally {
      isLoading = false;
    }
  });
</script>

<div class="min-h-screen bg-[#001b2e] flex flex-col">
  <!-- Navigation -->
  <nav class="w-full py-6 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="/" class="flex items-center space-x-2 group">
        <img src={logoWide} alt="ReignOS Logo" class="h-10 w-auto" />
      </a>
      <div class="hidden md:flex items-center space-x-8">
        <a
          href="/"
          class="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >Home</a
        >
        <a
          href="https://github.com/reignstudios/ReignOS"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-green-400 transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="https://disboard.org/server/1344845464175902750"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-green-400 transition-colors duration-200"
        >
          Discord
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
  <main
    class="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
  >
    <div class="text-center max-w-4xl mx-auto">
      <div class="mb-8">
        <img src={logo} alt="ReignOS Logo" class="mx-auto" />
      </div>

      <div class="max-w-2xl mx-auto space-y-8">
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/reignstudios/ReignOS/releases/latest"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Download {version}
          </a>
        </div>

        <div class="grid gap-6 border-t border-gray-700 pt-6">
          <p class="text-gray-400 text-center">
            Check out our socials for more information!
          </p>
          <div class="flex justify-center space-x-6">
            <a
              href="https://github.com/reignstudios/ReignOS"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-green-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://disboard.org/server/1344845464175902750"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-green-400 transition-colors duration-200"
              aria-label="Discord"
            >
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.454.867-.622 1.254a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.1 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.8 8.18 1.8 12.063 0a.074.074 0 01.078.01c.12.098.246.192.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.1c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.177 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.177 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Content Section -->
  <div class="bg-[#081824] py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="transition-all duration-300 ease-in-out">
        {#if error}
          <div class="text-red-400 text-center p-4">
            {error}
          </div>
        {:else if isLoading}
          <div class="text-center p-12">
            <div
              class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400"
            ></div>
            <p class="mt-4 text-gray-300 text-lg">Loading content...</p>
          </div>
        {:else}
          <div class="space-y-16 max-w-4xl mx-auto">
            {#if content.aboutContent}
              <div
                class="prose prose-invert prose-lg prose-headings:text-green-400 prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-green-400 hover:prose-a:text-green-300 prose-a:transition-colors prose-a:duration-200"
              >
                {@html content.aboutContent}
              </div>
            {/if}

            {#if content.installationContent}
              <div
                class="prose prose-invert prose-lg prose-headings:text-green-400 prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-green-400 hover:prose-a:text-green-300 prose-a:transition-colors prose-a:duration-200"
              >
                {@html content.installationContent}
              </div>
            {/if}

            {#if content.compatibilityContent}
              <div
                class="prose prose-invert prose-lg prose-headings:text-green-400 prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-green-400 hover:prose-a:text-green-300 prose-a:transition-colors prose-a:duration-200"
              >
                {@html content.compatibilityContent}
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer
    class="bg-[#001b2e] py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center"
    >
      <div class="flex items-center space-x-4 mb-4 md:mb-0">
        <img src={logo} alt="ReignOS Logo" class="h-8 w-auto opacity-70" />
        <span class="text-sm text-gray-500">
          © {new Date().getFullYear()} Reign-Studios. All rights reserved.
        </span>
      </div>
      <div class="flex space-x-6">
        <a
          href="https://github.com/reignstudios/ReignOS"
          class="text-gray-400 hover:text-green-400 transition-colors duration-200"
          aria-label="GitHub"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://disboard.org/server/1344845464175902750"
          class="text-gray-400 hover:text-green-400 transition-colors duration-200"
          aria-label="Discord"
        >
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

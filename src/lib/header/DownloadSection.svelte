<script>
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import { latestRelease, socialLinks } from "./links";

  const GITHUB_RELEASES_URL = latestRelease[0].url;
  const GITHUB_API_URL = latestRelease[0].apiUrl;

  let latestVersion = "latest release";
  let isLoading = true;

  const fetchLatestVersion = async () => {
    try {
      const response = await fetch(GITHUB_API_URL);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return data.tag_name;
    } catch (error) {
      console.error("Error fetching latest version:", error);
      return "latest release";
    }
  };

  onMount(async () => {
    latestVersion = await fetchLatestVersion();
    isLoading = false;
  });
</script>

<section class="py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto text-center">
    <!-- Download Button -->
    <div class="flex justify-center mb-12">
      <Button href={GITHUB_RELEASES_URL}>
        {#if isLoading}Loading...{:else}Download {latestVersion}{/if}
      </Button>
    </div>

    <!-- Community Links -->
    <div class="mt-8">
      <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
        Join Our Community
      </h2>
      <div class="flex justify-center space-x-6">
        {#each socialLinks as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded-full border bg-black text-white hover:bg-green-800 transition-colors duration-200"
            aria-label={link.name}
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

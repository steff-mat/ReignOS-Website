<script>
  import websiteLogo from "./assets/ReignOS.png";
  import DownloadSection from "./lib/header/DownloadSection.svelte";
  import DescriptionHighlights from "./lib/descriptionSection/descriptionHighlights.svelte";
</script>

<main class="bg-[#001b2e] grid grid-cols-1 items-center justify-center">
  <img src={websiteLogo} alt="ReignOS Logo" class="w-1/2 mx-auto" />
  <DownloadSection />
  <DescriptionHighlights />
</main>

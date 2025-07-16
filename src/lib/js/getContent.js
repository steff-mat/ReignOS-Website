async function getContent() {
  let aboutContent = "";
  let installationContent = "";
  let compatibilityContent = "";

  try {
    // Fetch the README content from the repository
    const [responseAbout, responseInstallation, responseCompatibility] =
      await Promise.all([
        fetch(
          "https://raw.githubusercontent.com/steff-mat/test/main/README.md"
        ),
        fetch(
          "https://raw.githubusercontent.com/steff-mat/test/main/Installation_Guide.md"
        ),
        fetch(
          "https://raw.githubusercontent.com/steff-mat/test/main/Compatibility_List.md"
        ),
      ]);

    if (!responseAbout.ok) {
      throw new Error(`Failed to fetch about content: ${responseAbout.status}`);
    }
    if (!responseInstallation.ok) {
      throw new Error(
        `Failed to fetch installation content: ${responseInstallation.status}`
      );
    }
    if (!responseCompatibility.ok) {
      throw new Error(
        `Failed to fetch compatibility content: ${responseCompatibility.status}`
      );
    }

    aboutContent = await responseAbout.text();
    installationContent = await responseInstallation.text();
    compatibilityContent = await responseCompatibility.text();
  } catch (error) {
    console.error("Error fetching content:", error);
    // Return partial content if one of the requests succeeded
    return {
      aboutContent:
        aboutContent || "Failed to load about content. Please try again later.",
      installationContent:
        installationContent ||
        "Failed to load installation content. Please try again later.",
      compatibilityContent:
        compatibilityContent ||
        "Failed to load compatibility content. Please try again later.",
    };
  }

  return { aboutContent, installationContent, compatibilityContent };
}

export default getContent;

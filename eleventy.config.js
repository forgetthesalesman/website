export default async function(eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
  });
}

export const config = {
    dir: {
      input: "src",
    }
  };
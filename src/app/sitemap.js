const baseUrl = "https://zeyadtareq.com";

const sitemap = async () => {
  const routesMap = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routesMap];
};

export default sitemap;

const sitemap = async () => {
  const baseUrl = "https://zeyadtareq.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
};

export default sitemap;

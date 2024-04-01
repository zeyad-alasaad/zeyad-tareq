const SiteView = ({ title, image, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={title}>
      <div className="mockup-browser border border-base-content w-full rounded-none">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-content">{title}</div>
        </div>
        <div className="flex justify-center border-t border-base-content text-2xl">
          {image}
        </div>
      </div>
    </a>
  );
};

export default SiteView;

const ContactUs = () => {
  return (
    <div className="mt-8 w-full">
      <div className="text-secondary w-full text-2xl">Contact</div>
      <div className="mockup-code mt-2">
        <pre data-prefix="$">
          <code>cd home/documents</code>
        </pre>
        <pre data-prefix="$">
          <code>cat contact-us.txt</code>
        </pre>
        <pre data-prefix=">" className="text-accent">
          <code>you can reach out to me via:</code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>
            <a
              className="hover:underline"
              href="mailto:zeyad.t.alasaad@outlook.com"
            >
              zeyad.t.alasaad@outlook.com
            </a>
          </code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/zeyad-alasaad/"
            >
              linkedin.com/in/zeyad-alasaad
            </a>
          </code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>
            <a
              className="hover:underline"
              href="https://github.com/zeyad-alasaad/"
            >
              github.com/zeyad-alasaad
            </a>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ContactUs;

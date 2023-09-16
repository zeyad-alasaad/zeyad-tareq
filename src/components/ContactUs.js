const ContactUs = () => {
  return (
    <div className="mockup-code max-w-screen-sm w-full">
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
  );
};

export default ContactUs;

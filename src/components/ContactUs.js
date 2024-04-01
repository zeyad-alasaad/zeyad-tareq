import Section from "./Section";

const ContactUs = () => {
  return (
    <Section title="Contact">
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
            <a className="hover:underline" href="mailto:ziadtareq@outlook.com">
              ziadtareq@outlook.com
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
    </Section>
  );
};

export default ContactUs;

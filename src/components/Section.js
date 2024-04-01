const Section = ({ title, children }) => (
  <div className="mt-8 w-full">
    <div className="text-secondary w-full text-2xl">{title}</div>
    {children}
  </div>
);

export default Section;

import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between max-w-screen-xl mx-auto my-0 p-3">
        <ContactUs />
      </main>
    </>
  );
}

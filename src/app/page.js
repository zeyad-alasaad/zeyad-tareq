import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between max-w-screen-lg mx-auto my-0 p-3">
        <Hero />
        <ContactUs />
      </main>
    </>
  );
}

import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PastWork from "@/components/PastWork";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between max-w-screen-lg mx-auto my-0 px-3 py-10">
        <Hero />
        <Skills />
        <PastWork />
        <ContactUs />
      </main>
    </>
  );
}

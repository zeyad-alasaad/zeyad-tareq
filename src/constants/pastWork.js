import SMP_Store from "@/assets/images/The_SMP_Store.png";
import Repaira from "@/assets/images/Repaira.png";
import Lolattire from "@/assets/images/Lolattire.png";
import Pixely_Ergo from "@/assets/images/Pixely_Ergo.png";
import Image from "next/image";

export const sites = [
  {
    title: "The SMP Store",
    image: (
      <Image
        src={SMP_Store}
        alt="The SMP Store"
        placeholder="blur"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    ),
    url: "https://www.thesmpstore.com/search",
  },
  {
    title: "Repaira",
    image: (
      <Image
        src={Repaira}
        alt="Repaira"
        placeholder="blur"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    ),
    url: "https://repaira.sa/",
  },
  {
    title: "Lolattire",
    image: (
      <Image
        src={Lolattire}
        alt="Lolattire"
        placeholder="blur"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    ),
    url: "https://lolattire.com/",
  },
  {
    title: "Pixely Ergo",
    image: (
      <Image
        src={Pixely_Ergo}
        alt="Pixely Ergo"
        placeholder="blur"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    ),
    url: "https://www.pixelyergo.com/",
  },
];

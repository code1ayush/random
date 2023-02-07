import Link from "next/link";
import Image from "next/image";
import pic from "../pic.jpg";
export default function Home() {
  return (
    <>
      hello world
      <Image src={pic} alt="HELLO" height={500} width={500} priority />
      <Link href="/about">about</Link>
    </>
  );
}

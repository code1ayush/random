import Link from "next/link";
import Image from "next/image";
import pic from "../pic.jpg";
export default function Home() {
  return (
    <>
      hello world
      <Image src={pic} alt="HELLO" height={500} width={500} priority />
      hello uncle i think it is same as the react the only difference in this
      version of the next js is prerendering of the html before instead of
      client side rendering to reduce the initial loading time
      <Link href="/about">about</Link>
    </>
  );
}

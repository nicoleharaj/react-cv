import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/card';
import headshot from "../public/placeholder.jpg";
import { FiSend } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex-grow">
      <Head>
        <title>Nicole Haraj</title>
        <meta name="description" content="Portfolio site" />
      </Head>
      <section className="flex flex-col justify-center items-center gap-6 lg:flex-row lg:gap-10">
        <Image className="relative z-40" src={headshot} width="450" height="550" alt="Placeholder head shot" />
        <div className='flex flex-col gap-2 max-w-xl'>
          <h2 className="font-bold text-4xl">Nicole Haraj</h2>
          <h3 className='text-lg text-gray-700'>Full Stack Developer</h3>
          <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto deleniti ex quae. Cumque autem molestias aliquam est magnam recusandae, laborum, nisi id vero dignissimos aperiam alias tempora numquam odit inventore.</p>
          <Link href="/contact"><span className="relative flex items-center gap-2 cursor-pointer py-2 px-4 rounded shadow text-white  bg-indigo-500">Get in touch <FiSend /></span></Link>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Card title="Hi" />
            <Card title="Hi" />
            <Card title="Hi" />
            <Card title="Hi" />
          </div>
        </div>
      </section >
    </div >
  );
}

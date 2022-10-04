import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | Nicole Haraj</title>
        <meta name="description" content="Portfolio site" />
      </Head>
      <section>
        <div className='flex flex-col gap-2'>
          <h2 className="font-bold text-4xl">Contact me</h2>
          <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto deleniti ex quae. Cumque autem molestias aliquam est magnam recusandae, laborum, nisi id vero dignissimos aperiam alias tempora numquam odit inventore.</p>
        </div>
      </section>
    </div>
  );
}
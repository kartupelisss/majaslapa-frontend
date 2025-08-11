import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head><title>Jurista birojs | Sākums</title></Head>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-[#0e1217] text-white">
        <section className="py-20 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Juridiskie risinājumi nodokļu jomā</h1>
          <p className="text-lg text-gray-300 mb-8">
            Mēs palīdzam uzņēmumiem un privātpersonām orientēties sarežģītos nodokļu jautājumos.
          </p>
          <Link href="/about" className="inline-block bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">
            Uzzināt vairāk
          </Link>
        </section>
      </main>
    </>
  )
}

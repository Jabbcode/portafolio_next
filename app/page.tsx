import { Metadata } from "next"
import Image from 'next/image'

import { Open_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Portafolio Web',
  description: 'Portafolio web para mostrar quien soy, mi experiencia y proyectos realizados',
  openGraph: {
    title: 'Portafolio Web',
  },
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Portafolio'],
  authors: [{ name: 'Jefferson Brioso', url: 'https:jabbdev.online' }]
}

const inter = Open_Sans({ subsets: ['latin'] });

export default function Home() {


  return (
    <main className="container">
      <div className={inter.className}>
        <Image src="/assets/building-site-construction-png.png" alt="imagen de contruccion" width={760} height={480} />
      </div>
    </main>
  )
}

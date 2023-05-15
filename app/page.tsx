import { Metadata } from "next"
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
        <h1>¿Sabes que eres el amor de mi vida?</h1>
        <h2>💖 El amor precioso de mi corazon 💖</h2>
      </div>
    </main>
  )
}

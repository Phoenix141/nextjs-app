import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {

  const hobbies = ['Football', 'cricket', 'dfdfdf']

  for(let i = 0; i < hobbies.length; i++) {
    console.log('My hobby : ', hobbies[i])
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-blue-500 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl sm:text-red-400">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        {
          hobbies.map(item => (<h3 className="text-cyan-300">{item}</h3>))
        }
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub Test link { [1,2,3,4,5].map(i => `${i} th element, `) }
        </Link>
      </div>
    </section>
  )
}

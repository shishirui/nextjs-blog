import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Rex Shi. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Rex Shi. I live in China, where I design the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember, and wrote
              my first program when I was 15 years old, just two weeks after my
              father brought home the brand new XBW Learning Machine that I taught
              myself to type on.
            </p>
            <p>
            When I was a kid, the only thing I liked was computers. 
            I even liked the smell of the computer and the squeaking sound it 
            made when it read and wrote to the mechanical hard drive. I would 
            quietly practice typing on the keyboard, skipping classes to learn 
            the simplest of HTML and Javascript languages until I could create 
            the simplest of web pages on my own and then proudly let my friends 
            come over to view them.
            </p>
            <p>
            I remember the first time I had my own computer, I was almost excited.
             Every day after that, I was almost in deep concentration. During that 
             time, I learned more design software such as Photoshop, Fireworks,
              programming languages such as PHP, C and so on. After that, I officially
               launched several websites of different sizes, It also led to a career
                in the Internet software industry.
            </p>
            <p>
            Today, I am the founder of a company that serves software developers. 
            We are dedicated to improving the productivity of software developers so 
            that they not only have fun at work, but also make more money.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/shishirui" icon={GitHubIcon} className="mt-4" target="_blank">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="mailto:shirui@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              shirui@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

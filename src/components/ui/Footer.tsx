import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const navLinks = [
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
]

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: FaTwitter,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: FaLinkedin,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-border">
      <div className="py-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-primary-text">
              Nobius
            </Link>
            <p className="mt-2 text-secondary-text text-sm">
              We design systems that move.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="transition text-secondary-text hover:text-primary-text font-medium"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-border flex flex-col sm:flex-row-reverse justify-between items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary-text hover:text-primary-text transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{link.name}</span>
                <div className="h-5 w-5">
                  <link.icon />
                </div>
              </a>
            ))}
          </div>
          <p className="text-secondary-text text-sm">
            &copy; {new Date().getFullYear()} Nobius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

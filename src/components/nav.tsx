// components/Navbar.jsx
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background text-foreground">
      <div className="mx-5 my-2 px-6 py-2 lg:mx-30">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <Link
            href="/"
            className="text-white text-l font-semibold tracking-wide"
          >
            Andrea Asprer
          </Link>

          {/* Socials */}
          <div className="flex items-center gap-8">
            <a
              href="mailto:asprer.andreaa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="Email"
            >
              <Mail />
            </a>
            <a
              href="https://github.com/andreaasprer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/andrea-asprer-366444325/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

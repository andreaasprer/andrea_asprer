import { NavBar } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SideNav } from "@/components/sideNav";
import { AboutMe } from "@/components/aboutMe";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <SideNav />
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

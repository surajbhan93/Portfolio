import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

require('global-agent/bootstrap');

global.GLOBAL_AGENT.HTTP_PROXY = 'http://edcguest:edcguest@172.31.100.25:3128';

async function getData() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = await res.json();
    const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

    return filtered;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Fetch request timed out.');
    } else {
      console.error('Error fetching data:', error.message);
    }
    return [];
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs.length > 0 ? blogs : [{ title: "No blogs available at the moment.", cover_image: null }]} />
      <ContactSection />
    </>
  );
}

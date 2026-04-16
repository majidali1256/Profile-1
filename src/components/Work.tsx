import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Hostel Hub",
    category: "Full-Stack Web App",
    tools: "React, TypeScript, Node.js, MongoDB",
    image: "/images/hostel_hub.png",
    sourceCode: "https://github.com/majidali1256/Hostel-Hub",
  },
  {
    name: "HostelHub App",
    category: "Mobile Application",
    tools: "Kotlin, Java, Android SDK, Firebase",
    image: "/images/hostelhub_app.png",
    sourceCode: "https://github.com/majidali1256/HostelHubApp",
  },
  {
    name: "Majid's Profile",
    category: "Portfolio Website",
    tools: "React, JavaScript, Vite, CSS",
    image: "/images/majids_profile.png",
    sourceCode: "https://github.com/majidali1256/Majid-s-Profile",
    liveUrl: "https://majidali1256.github.io/Majid-s-Profile/",
  },
  {
    name: "URL Scrapper",
    category: "Automation Tool",
    tools: "Python, Web Scraping, BeautifulSoup",
    image: "/images/url_scrapper.png",
    sourceCode: "https://github.com/majidali1256/Url-Scrapper",
  },
  {
    name: "Dast Store",
    category: "E-Commerce Platform",
    tools: "React, Node.js, Express, MongoDB",
    image: "/images/dast_store.png",
    sourceCode: "https://github.com/majidali1256/Dast-Store",
  },
  {
    name: "Dezan Digitizing",
    category: "Business Website",
    tools: "HTML, CSS, JavaScript, PHP",
    image: "/images/dezan_digitizing.png",
    sourceCode: "https://github.com/majidali1256/dezan-digitizing",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div className="work-links" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                  {project.sourceCode && (
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', border: '1px solid #555', padding: '8px 16px', borderRadius: '50px', fontSize: '14px', transition: '0.3s', backgroundColor: 'rgba(255,255,255,0.05)' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}>
                      <FaGithub /> Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', textDecoration: 'none', border: '1px solid #555', padding: '8px 16px', borderRadius: '50px', fontSize: '14px', transition: '0.3s', backgroundColor: 'rgba(255,255,255,0.05)' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}>
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

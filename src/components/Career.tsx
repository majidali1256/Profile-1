import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Computer Science</h4>
                <h5>SZABIST Islamabad</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Pursuing a Bachelor's degree in Computer Science with a focus on
              full-stack web development, Android development, and machine
              learning. Building a strong foundation in algorithms, data
              structures, and software engineering principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web, Android & ML Developer</h4>
                <h5>Freelance / Personal Projects</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Building dynamic web and Android applications, blending robust
              engineering with machine learning. Developed multiple projects
              including Hostel Hub platform, HostelHubApp (Kotlin + Java), and
              various web applications using React, Next.js, and Node.js.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer & AI Enthusiast</h4>
                <h5>Open Source & Innovation</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively contributing to open-source projects and exploring
              cutting-edge AI integrations. Leveraging AI tools to streamline
              development while maintaining code quality. Available for remote
              work opportunities from Islamabad, Pakistan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

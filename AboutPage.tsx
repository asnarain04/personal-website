import React from 'react';

export default function AboutPage() {
  const playClick = () => {
    const clickSound = document.getElementById('mac-click') as HTMLAudioElement;
    clickSound?.play();
  };

  return (
    <section className="pt-16 px-4 max-w-4xl mx-auto">
      <audio id="mac-click" src="/sounds/click.mp3" preload="auto" />

      <div className="mac-window p-6 mt-6">
        {/* Title bar */}
        <div className="mac-title-bar mb-4">
          <span>Hello!</span>
        </div>

        {/* Header section */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="/Ayush Narain AT&T Badge Picture.jpg"
            alt="Ayush Narain"
            className="w-20 h-20 border-2 border-black object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">Ayush Narain</h1>
            <h2 className="text-xl">Software Engineer | Georgia Tech CS Undergrad</h2>
          </div>
        </div>

        {/* Intro Paragraphs */}
        <p className="mb-4">
          Hey, I'm Ayush — a CS undergrad in Georgia Tech’s BS/MS program, focused on AI/ML and full-stack development. I love building smart, scalable systems that solve real problems.
        </p>
        <p className="mb-4">
          From deploying ML models at GTRI to leading dev work on AI-powered learning tools, I’ve worked across embedded systems, web platforms, and research-driven projects.
        </p>
        <p className="mb-4">
          Currently interning as a SWE in AT&T's Technology Development Program. Let’s connect!
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col items-center space-y-3 mt-6">
          <a
            href="/Ayush Narain - Resume as of 5-2025 - unbolded.pdf"
            onClick={playClick}
            download
            className="mac-button flex items-center space-x-2"
          >
            <img src="/cv_PNG30.png" alt="Resume Icon" className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/asnarain"
              target="_blank"
              rel="noopener noreferrer"
              className="mac-button flex items-center space-x-2"
            >
              <img src="/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/asnarain04"
              target="_blank"
              rel="noopener noreferrer"
              className="mac-button flex items-center space-x-2"
            >
              <img src="/Octicons-mark-github.svg.png" alt="GitHub" className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:anarain31@gatech.edu"
              className="mac-button flex items-center space-x-2"
            >
              <img src="/Gmail_icon_(2020).svg.png" alt="Email" className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/*Optional Project Screenshot*/}
        {/* <img
          src="/488181610_17903100690109727_1632723195509920089_n.jpg"
          alt="Project Screenshot"
          className="mt-6 border-2 border-black w-full"
        /> */}

        {/* Timeline Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Quick Experience Timeline</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>June 2025 — TDP SWE Intern @ AT&T</li>
            <li>January 2025 — Embedded Systems SWE Intern @ GTRI</li>
            <li>August 2024 — Engineering Manager @ SmartPathAI</li>
            <li>August 2024 - API/AI Team Lead @ HipHop2020 Innovation Archive</li>
            <li>May 2024 — IT Operations Co-Op @ GTRI</li>
            <li>August 2022 — Began Bachelor's of Science in CS @ Georgia Tech</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
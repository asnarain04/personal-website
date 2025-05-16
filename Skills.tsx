import React from 'react';
import DropdownItem from '../components/DropdownItem';

export default function Skills() {
  return (
    <section className="pt-16 px-4 max-w-5xl mx-auto">
      <div className="mac-window p-6 mt-6">
        <div className="mac-title-bar mb-4">
          <span>🛠 My Skills</span>
        </div>

        {/* Grid wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <DropdownItem title="Languages">
            <p className="mt-2">
              Java, Python, JavaScript, HTML, CSS, Swift, R, C#, C, SQL, PHP
            </p>
          </DropdownItem>

          {/* Frameworks & Tools */}
          <DropdownItem title="Frameworks & Tools">
            <p className="mt-2">
              React, Node.js, Linux/Unix, Jira, Tailwind
            </p>
          </DropdownItem>

          {/* Technologies */}
          <DropdownItem title="Technologies">
            <p className="mt-2">
              AWS, OpenAI, LLMs, OAuth 2.0, CI/CD, REST APIs, Embedded Systems
            </p>
          </DropdownItem>

          {/* Certifications */}
          <DropdownItem title="Certifications & Clearances">
            <p className="mt-2">
              Secret Level Security Clearance (2025 – Present)
            </p>
          </DropdownItem>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import DropdownItem from '../components/DropdownItem';

export default function Education() {
  return (
    <div className="pt-16 px-4 max-w-4xl mx-auto">
      <div className="mac-window p-6">
        <div className="mac-title-bar mb-4">
          <span>🎓 Education</span>
        </div>

        <DropdownItem
          title="Georgia Institute of Technology"
          subtitle="M.S. in Computer Science, Expected May 2027"
        >
          <p className="italic">This program has not started yet.</p>
        </DropdownItem>

        <DropdownItem
          title="Georgia Institute of Technology"
          subtitle="B.S. in Computer Science, Expected May 2026 | GPA: 3.60"
        >
          <p>Highest Honors (Fall 2022 - Spring 2025)</p>
          <p></p>
          <p className="mt-2 font-semibold">Relevant Coursework:</p>
          <ul className="list-disc list-inside">
            <li>Data Structures & Algorithms</li>
            <li>Machine Learning</li>
            <li>Design & Analysis of Algorithms</li>
            <li>Artificial Intelligence</li>
            <li>Systems and Networks</li>
          </ul>
        </DropdownItem>
      </div>
    </div>
  );
}
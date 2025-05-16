import React from 'react';
import DropdownItem from '../components/DropdownItem';

export default function Leadership() {
  return (
    <div className="pt-16 px-4 max-w-4xl mx-auto">
      <div className="mac-window p-6">
        <div className="mac-title-bar mb-4">
          <span>🤝 Leadership Experience</span>
        </div>

        <DropdownItem
          title="Engineering Manager – SmartPathAI @ Big Data Big Impact"
          subtitle="August 2024 – May 2025"
        >
          <ul className="list-disc list-inside">
            <li>Developed generative AI-powered learning portal for Georgia Tech students using Microsoft GraphRAG to analyze student errors and generate personalized learning paths</li>
            <li>Led Full Stack Development Subteam, overseeing backend and frontend development for SmartPathAI’s AI-driven personalized learning portal</li>
            <li>Enhanced system efficiency and API integration by 40% for optimized learning recommendations based on student performance through improved database indexing and caching mechanisms</li>
          </ul>
        </DropdownItem>

        <DropdownItem
          title="API/AI Team Lead – HipHop2020 Innovation Archive"
          subtitle="August 2024 – May 2025"
        >
          <ul className="list-disc list-inside">
            <li>Led team in development and management of SQL database containing metadata and AI analysis for 500+ albums, songs, and artists, engineering robust data pipelines leveraging AWS for efficient storage, retrieval, and analysis</li>
            <li>Automated sample data collection by integrating Discogs API, designing AI-driven insights for cataloging and automating metadata classification, enhancing discovery and accessibility and reducing data-processing time by 20%</li>
          </ul>
        </DropdownItem>
        

        {/* Parliamentarian */}
        <DropdownItem
          title="Parliamentarian – Iota Chapter of Kappa Kappa Psi"
          subtitle="August 2024 – Present"
        >
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Serving as chapter’s primary resource for all governing documents and procedures</li>
            <li>Maintaining and updating chapter documents, and advising on fraternity policy at all levels</li>
            <li>Ensuring compliance and smooth operation during business meetings and votes</li>
          </ul>
        </DropdownItem>

        {/* Music Chair */}
        <DropdownItem
          title="Music Chair – Iota Chapter of Kappa Kappa Psi"
          subtitle="January 2024 – May 2024"
        >
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Organized university and community music events to promote involvement with music</li>
            <li>Planned and coordinated music skill-building events for active members</li>
            <li>Managed music active requirements for all brothers</li>
            <li>
              Projects: Night of Musicianship, Conduct Us Band, New Instrument Day
            </li>
          </ul>
        </DropdownItem>

        {/* Outreach Chair */}
        <DropdownItem
          title="Outreach Chair – Iota Chapter of Kappa Kappa Psi"
          subtitle="August 2023 – December 2023"
        >
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Organized off-campus volunteer events for the chapter</li>
            <li>Led planning and coordination of outreach programs with external partners</li>
            <li>
              Projects: Children’s Hospital of Atlanta, Trees Atlanta, The Sandwich Project
            </li>
          </ul>
        </DropdownItem>
      </div>
    </div>
  );
}
// import React from 'react';
// import DropdownItem from '../components/DropdownItem';

// export default function Projects() {
//   return (
//     <div className="pt-16 px-4 max-w-4xl mx-auto">
//       <div className="mac-window p-6">
//         <div className="mac-title-bar mb-4">
//           <span>🚀 Projects</span>
//         </div>

// {/* SmartPathAI */}
// <DropdownItem
//           title="SmartPathAI"
//           subtitle="Aug 2024 – Present"
//         >
//           <ul className="list-disc list-inside space-y-1 mt-2">
//             <li>Built an AI-powered academic support platform aimed at serving 20,000+ Georgia Tech students...</li>
//             <li>Implemented user authentication, a responsive landing page, and structured data pipelines...</li>
//             <li>Collaborated across subteams to design robust knowledge graphs...</li>
//             <li>Leveraged GPT-4 API and Microsoft GraphRAG to power real-time intelligent assistance...</li>
//           </ul>
//           <p className="mt-2 text-sm italic">Skills: Node.js · React.js · MongoDB · GraphRAG · GPT-4</p>
//           <a
//             href="https://github.com/asnarain04/smartpathai"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mac-button inline-block mt-3"
//           >
//             🔗 GitHub Repo
//           </a>
//         </DropdownItem>

//         {/* Amazon Review */}
//         <DropdownItem
//           title="Amazon Text Review Analysis"
//           subtitle="Aug 2024 – Dec 2024"
//         >
//           <ul className="list-disc list-inside space-y-1 mt-2">
//             <li>Conducted large-scale analysis on 5M+ Amazon reviews...</li>
//             <li>Engineered a machine learning model using NLP...</li>
//           </ul>
//           <p className="mt-2 text-sm italic">Skills: Machine Learning Algorithms · Python · Web Development</p>
//           <a
//             href="https://github.com/asnarain04/amazon-review-analysis"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mac-button inline-block mt-3"
//           >
//             🔗 GitHub Repo
//           </a>
//         </DropdownItem>

//         {/* Concert to Playlist */}
//         <DropdownItem
//           title="Concert to Playlist System"
//           subtitle="Aug 2024 – Nov 2024"
//         >
//           <ul className="list-disc list-inside space-y-1 mt-2">
//             <li>Designed and implemented full-stack web application to automate Spotify playlist creation...</li>
//             <li>Integrated setlist.fm and Spotify APIs to dynamically retrieve concert setlists...</li>
//           </ul>
//           <p className="mt-2 text-sm italic">Skills: JavaScript · React.js · Node.js · API</p>
//           <a
//             href="https://github.com/asnarain04/concert-playlist"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mac-button inline-block mt-3"
//           >
//             🔗 GitHub Repo
//           </a>
//         </DropdownItem>

//         {/* AI Movie Recommender */}
//         <DropdownItem
//           title="AI-Based Movie Recommendation System"
//           subtitle="Jun 2024 – Aug 2024"
//         >
//           <ul className="list-disc list-inside space-y-1 mt-2">
//             <li>Web app for movie recs based on genre/runtime/streaming prefs via Watchmode API</li>
//             <li>Used Surprise Python library for AI-based rating predictions</li>
//           </ul>
//           <p className="mt-2 text-sm italic">Skills: AI · Python · JavaScript · HTML</p>
//           <a
//             href="https://github.com/asnarain04/movie-recommender"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mac-button inline-block mt-3"
//           >
//             🔗 GitHub Repo
//           </a>
//         </DropdownItem>

//         {/* HipHop2020 */}
//         <DropdownItem
//           title="HipHop2020 Innovation Archive | GT VIP"
//           subtitle="Jan 2024 – May 2024"
//         >
//           <ul className="list-disc list-inside space-y-1 mt-2">
//             <li>Created an online archive of hip-hop history and music using Omeka</li>
//             <li>Used Discogs + GPT APIs to enhance data generation and boost UX by 35%</li>
//           </ul>
//           <p className="mt-2 text-sm italic">Skills: Omeka · SQL · Web Dev · APIs</p>
//           <a
//             href="https://github.com/asnarain04/hiphop2020-archive"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mac-button inline-block mt-3"
//           >
//             🔗 GitHub Repo
//           </a>
//         </DropdownItem>

//         {/* Airline Management */}
//         <DropdownItem
//           title="Simple Airline Management System"
//           subtitle="May 2023 – Aug 2023"
//         >
//           <ul className="list-disc list-inside space-y-1 mt-2">
//             <li>Collaborated on a team to build a Java app simulating airline routing + passenger tracking</li>
//             <li>Applied Unified Process, developed GUI using JavaFX, followed SOLID + GRASP</li>
//           </ul>
//           <p className="mt-2 text-sm italic">Skills: Java · SOLID · JavaFX · Unified Process · GRASP</p>
//           <a
//             href="https://github.com/asnarain04/airline-manager"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mac-button inline-block mt-3"
//           >
//             🔗 GitHub Repo
//           </a>
//         </DropdownItem>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import DropdownItem from '../components/DropdownItem';

export default function Projects() {
  return (
    <section className="pt-16 px-4 max-w-4xl mx-auto">
      <div className="mac-window p-6 mt-6">
        <div className="mac-title-bar mb-4">
          <span>🚀 Projects</span>
        </div>

        {/* SmartPathAI */}
        <DropdownItem
          title="SmartPathAI"
          subtitle="Aug 2024 – Present"
        >
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Built an AI-powered academic support platform aimed at serving 20,000+ Georgia Tech students with 24/7 personalized Q&A and topic mastery using React.js (frontend), Node.js (backend), and MongoDB Atlas (database) to deliver a seamless and scalable web app experience</li>
            <li>Implemented user authentication, a responsive landing page, and structured data pipelines for PDF ingestion and knowledge extraction and integrated advanced Retrieval-Augmented Generation (RAG) and GraphRAG frameworks to enable dynamic and context-rich question answering across academic subjects</li>
            <li>Collaborated across subteams to design robust knowledge graphs and ensure high-quality, connected semantic representations of course materials</li>
            <li>Leveraged GPT-4 API and Microsoft GraphRAG to power real-time intelligent assistance and automate complex topic retrieval from student-uploaded documents</li>
          </ul>
          <p className="mt-2 text-sm italic">Skills: Node.js · React.js · MongoDB · GraphRAG · GPT-4</p>
          <div className="text-center mt-3">
            <a
              href="https://github.com/gt-big-data/Smart-Path-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="mac-button inline-block"
            >
              🔗 GitHub Repo
            </a>
          </div>
        </DropdownItem>

        {/* Amazon Review */}
        <DropdownItem
          title="Amazon Text Review Analysis"
          subtitle="Aug 2024 – Dec 2024"
        >
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Conducted large-scale analysis on 5M+ Amazon reviews to identify correlations between textual sentiment and star rating</li>
            <li>Engineered a machine learning model using NLP and sentiment analysis techniques, capable of predicting and assigning objective star ratings to textual reviews, optimizing data processing pipelines to reduce analysis time</li>
          </ul>
          <p className="mt-2 text-sm italic">Skills: Machine Learning Algorithms · Python (Programming Language) · Web Development</p>
          <div className="text-center mt-3">
            <a
              href="https://github.com/krishi-trip/ML-Amazon-Reviews-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="mac-button inline-block"
            >
              🔗 GitHub Repo
            </a>
          </div>
        </DropdownItem>

        {/* Concert to Playlist */}
        <DropdownItem
          title="Concert to Playlist System"
          subtitle="Aug 2024 – Nov 2024"
        >
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Designed and implemented full-stack web application to automate Spotify playlist creation for artist’s concert setlist</li>
            <li>Integrated setlist.fm and Spotify APIs to dynamically retrieve concert setlists and generate curated playlists in real-time, utilizing efficient API calls to improve response time, enhancing user engagement and personalization</li>
          </ul>
          <p className="mt-2 text-sm italic">Skills: JavaScript · React.js · Node.js · Application Programming Interfaces (API)</p>
          <div className="text-center mt-3">
            <a
              href="https://github.com/asnarain04/concert-playlist"
              target="_blank"
              rel="noopener noreferrer"
              className="mac-button inline-block"
            >
              🔗 GitHub Repo
            </a>
          </div>
        </DropdownItem>

        {/* AI Movie Recommender */}
        <DropdownItem
          title="AI-Based Movie Recommendation System"
          subtitle="Jun 2024 – Aug 2024"
        >
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Web application to provide users with movie recommendations using user input for genre, maximum runtime, and streaming services they subscribe to using the Watchmode API</li>
            <li>Incorporates AI-based recommendation system in order to enhance recommendations based on user ratings using the Surprise Python library</li>
          </ul>
          <p className="mt-2 text-sm italic">Skills: Artificial Intelligence (AI) · Python (Programming Language) · JavaScript · HTML</p>
          <div className="text-center mt-3">
          </div>
        </DropdownItem>

        {/* HipHop2020 */}
        <DropdownItem
          title="HipHop2020 Innovation Archive | Georgia Tech Vertically Integrated Project"
          subtitle="Jan 2024 – May 2025"
        >
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Developed online exhibit of hip hop memorabilia in order to archive and curate a collection of hip-hop history and hip-hop music to educate users using Omeka</li>
            <li>Utilized Discogs API in order to retrieve info regarding 500+ hip-hop albums and ChatGPT’s API to reduce time needed to generate engaging album descriptions allowing for improved user experience and engagement by 35%</li>
          </ul>
          <p className="mt-2 text-sm italic">Skills: Omeka · Web Development · SQL · Application Programming Interfaces (API)</p>
          <div className="text-center mt-3">
            <a
              href="https://github.com/HipHop2020/HipHop2020-AWS-API"
              target="_blank"
              rel="noopener noreferrer"
              className="mac-button inline-block"
            >
              🔗 GitHub Repo - AWS/API
            </a>
            <a
              href="https://github.com/HipHop2020/HipHop2020-Web"
              target="_blank"
              rel="noopener noreferrer"
              className="mac-button inline-block"
            >
              🔗 GitHub Repo - Web
            </a>
          </div>
        </DropdownItem>

        {/* Airline Management */}
        <DropdownItem
          title="Simple Airline Management System"
          subtitle="May 2023 – Aug 2023"
        >
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Collaborated with team of 5 to construct an Airline Management System that would track how airlines use airplanes flown by pilots to move passengers between different airports using Java</li>
            <li>Gained strong foundation of Unified Process in building project over multiple iterations and milestones</li>
            <li>Developed a GUI system to allow for easier human-computer interaction using JavaFX</li>
          </ul>
          <p className="mt-2 text-sm italic">Skills: Java · SOLID Design Principles · Unified Process · JavaFX · GRASP</p>
          <div className="text-center mt-3">
            <a
              href="https://github.gatech.edu/sdrof3/CS2340-RBR-G6"
              target="_blank"
              rel="noopener noreferrer"
              className="mac-button inline-block"
            >
              🔗 GitHub Enterprise Repo
            </a>
          </div>
        </DropdownItem>
      </div>
    </section>
  );
}
// import React from 'react';

// export default function Experience() {
//   return (
//     <div className="pt-16 px-4 max-w-4xl mx-auto">
//       <div className="mac-window p-6 mb-8">
//         <div className="mac-title-bar mb-4">
//           <span>💼 Work Experience</span>
//         </div>

//         <div className="space-y-6">
//           <div>
//             <h3 className="text-lg font-bold">Software Engineering Intern – AT&T (TDP)</h3>
//             <p className="text-sm text-gray-600">June 2025 – August 2025</p>
//             <ul className="list-disc list-inside ml-4">
//               <li>Selected for AT&T’s TDP SWE internship to contribute to scalable enterprise-grade applications</li>
//               <li>Working in agile teams to build high-performance, customer-facing systems emphasizing clean architecture and testing</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold">Embedded Systems Intern – GTRI (AES Lab)</h3>
//             <p className="text-sm text-gray-600">January 2025 – May 2025</p>
//             <ul className="list-disc list-inside ml-4">
//               <li>Deployed ML regression model to predict KCAS flight data and visualized output via interactive maps</li>
//               <li>Built real-time embedded software integrated into aerospace systems</li>
//               <li>Developed CI/CD pipelines and conducted system optimization/benchmarking</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold">Engineering Manager – SmartPathAI @ Big Data Big Impact</h3>
//             <p className="text-sm text-gray-600">August 2024 – May 2025</p>
//             <ul className="list-disc list-inside ml-4">
//               <li>Led full-stack team building an AI-driven learning platform using Microsoft GraphRAG and OpenAI</li>
//               <li>Improved system performance by 40% through database indexing and caching</li>
//               <li>Oversaw backend/frontend development, file embeddings, and AWS OCR integration</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold">API/AI Team Lead – HipHop2020 Archive</h3>
//             <p className="text-sm text-gray-600">August 2024 – May 2025</p>
//             <ul className="list-disc list-inside ml-4">
//               <li>Managed SQL + AWS database for 500+ albums, songs, and artists</li>
//               <li>Integrated Discogs API for auto-classification and reduced metadata processing time by 20%</li>
//               <li>Designed AI-powered insights for discovery and archival enrichment</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import DropdownItem from '../components/DropdownItem';

export default function Experience() {
  return (
    <div className="pt-16 px-4 max-w-4xl mx-auto">
      <div className="mac-window p-6">
        <div className="mac-title-bar mb-4">
          <span>💼 Work Experience</span>
        </div>

        <DropdownItem
          title="Software Engineering Intern – AT&T | Technology Development Program (TDP)"
          subtitle="June 2025 – August 2025"
        >
          <p className="italic">This program has not started yet.</p>
        </DropdownItem>

        <DropdownItem
          title="Embedded Systems Intern – Georgia Tech Research Institute | AES Lab"
          subtitle="January 2025 – May 2025"
        >
          <ul className="list-disc list-inside">
            <li>Deployed a machine learning regression model using Random Forest to determine data of mission flights, leveraging advanced predictive analytics by visualizing predictions geographically via interactive mapping</li>
            <li>Designed and debugged embedded software for commercial airliner systems and developed real-time, low-latency software solutions ensuring seamless integration with existing military and aerospace technologies</li>
            <li>Developed CI/CD pipelines for deployment automation, conducting rigorous performance benchmarking and debugging for optimized system response and reliability and resolving critical system bottlenecks</li>
          </ul>
        </DropdownItem>

        <DropdownItem
          title="IT Operations Co-Op – Georgia Tech Research Institute | ELSYS Lab"
          subtitle="May 2024 - August 2024"
        >
          <ul className="list-disc list-inside">
            <li>Assembled application in Swift, SupportHub, to consolidate critical information and side-step instruction to reduce technical burden on end user while making system information available quicker for all 70+ active Mac users</li>
            <li>Spearheaded implementation of OAuth 2.0 auth. model to integrate UPS API within internal Asset Tracker system to allow for live updates on transit of ELSYS device packages to distant field offices and reduce need of various applications</li>
          </ul>
        </DropdownItem>
      </div>
    </div>
  );
}
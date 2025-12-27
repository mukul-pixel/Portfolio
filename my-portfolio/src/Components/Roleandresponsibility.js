import React from "react";
import { NavLink } from "react-router-dom";

export const Roleandresponsibility = () => {
  return (
    <>
      {/* Back Button */}
      <div className="back-option-wrapper px-md-5 px-4 pt-5">
        <NavLink
          to="/"
          className="text-decoration-none d-flex align-items-center"
          style={{ color: "inherit" }}
        >
          <span className="back-option fs-3">←</span>
        </NavLink>
      </div>

      {/* Main Content Section */}
      <div className="container py-4">
        <h4>Add company and designation</h4>
        <h2 className="fw-bold mb-4 text-center">Roles & Responsibilities</h2>

        {/* SECTION 1 ------------------------------------------------ */}
        <div className="card shadow-sm p-4 mb-5 rounded-3 border-0">
          <h4 className="fw-bold mb-3">1. Data & Dashboarding</h4>
          <ul className="mb-4">
            <li>
              Built dashboards using <strong>Redash and Excel(GSheet) </strong> 
              to track user behaviour, feature adoption, success metrics, and business KPIs.
            </li>
            <li>
              Automated product performance insights using 
              <strong> Python + Airflow</strong> and shared daily/bi-weekly reports
              to Slack internal channels.
            </li>
            <li>
              Conducted root-cause analysis and collaborated with developers to 
              refine workflows and fix critical gaps.
            </li>
          </ul>

          <h5 className="fw-semibold mt-3">Key Projects</h5>

          {/* Project 1 */}
          <div className="mt-3">
            <p className="fw-semibold mb-1">📌 Project 1 — Screen Utilization Dashboard</p>
            <ul>
              <li>Built a dashboard to track page views across warehouse management screens.</li>
              <li>Identified under-utilized or deprecated screens, enabling removal of dead code.</li>
              <li>Used today by PMs & developers for UI/UX optimisation and decision-making.</li>
            </ul>
          </div>

          {/* Project 2: Post Deployment Analysis */}
          <div className="mt-3">
            <p className="fw-semibold mb-1">📌 Project 2 — Post Deployment Analysis</p>
            <ul>
              <li>Validated new feature stability and checked whether user flows behaved as expected.</li>
              <li>
                Analysed drop-offs, error patterns, warehouse behaviour, and user friction points.
              </li>
              <li>
                Worked with PMs and engineers to refine product behaviour and fix UX bottlenecks.
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 2 ------------------------------------------------ */}
        <div className="card shadow-sm p-4 mb-5 rounded-3 border-0">
          <h4 className="fw-bold mb-3">2. Product Development Lifecycle</h4>

          <ul>
            <li>
              Gathered detailed requirements from users & business stakeholders under PM guidance.
            </li>
            <li>
              Assisted PMs with <strong>data-backed decisions</strong> and contributed to 
              tech & product design discussions.
            </li>
            <li>
              Used <strong>Postman</strong> and beta-testing to validate flows before rollout.
            </li>
            <li>
              Tracked success metrics post-launch and collaborated on scaling features PAN India.
            </li>
          </ul>
        </div>

        {/* SECTION 3 ------------------------------------------------ */}
        <div className="card shadow-sm p-4 mb-5 rounded-3 border-0">
          <h4 className="fw-bold mb-3">3. Training, SOPs & Internal Documentation</h4>

          <ul>
            <li>
              Created clear training documents and SOPs to streamline product workflows.
            </li>
            <li>
              Built internal documentation covering feature behaviour, edge cases, and pilot learnings.
            </li>
            <li>
              Established structured feedback loops from warehouse users to continuously improve UX.
            </li>
          </ul>
        </div>

        {/* SECTION 4 ------------------------------------------------ */}
        <div className="card shadow-sm p-4 mb-5 rounded-3 border-0">
          <h4 className="fw-bold mb-3">4. No-Code Tools & Rapid Prototyping</h4>

          <p>
            Utilised <strong>AppSheet, SQL, and Google Sheets</strong> to build rapid prototypes
            and temporary solutions when engineering bandwidth was limited.
          </p>

          {/* Project 1 */}
          <div className="mt-3">
            <p className="fw-semibold mb-1">📌 Project 1 — User Resignation Flow</p>
            <ul>
              <li>
                SRE deprecated the existing resignation service with immediate notice 
                while app team had no bandwidth.
              </li>
              <li>
                Built a complete AppSheet-based flow to handle resignations, validations, 
                approvals & notifications.
              </li>
              <li>
                Ensured business continuity until a full engineering solution was implemented.
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="mt-3">
            <p className="fw-semibold mb-1">📌 Project 2 — RTV Sortation Flow</p>
            <ul>
              <li>
                Returns containers had mixed-vendor items, making manual bifurcation difficult.
              </li>
              <li>
                Utilised SQL + AppSheet + GSheet to create automated vendor-wise categorisation.
              </li>
              <li>
                Resulted in faster processing, reduced manual errors, and improved warehouse efficiency.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

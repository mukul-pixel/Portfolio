import React from "react";
import { NavLink } from "react-router-dom";

export const Roleandresponsibility = () => {
  return (
    <>
      {/* Back Button */}
      <div className="back-option-wrapper px-5 pt-5">
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
        <h2 className="fw-bold mb-4">Roles & Responsibilities</h2>

        {/* Section 1 */}
        <div className="mb-5">
          <h4 className="fw-semibold mb-3">1. Data & Dashboarding</h4>
          <ul>
            <li>
              Built dashboards using Excel, Redash, and Mixpanel to track user
              behaviour, feature adoption, success metrics, and business KPIs.
            </li>
            <li>
              Automated product performance insights using Python + Airflow and
              shared daily/bi-weekly reports to Slack internal channels.
            </li>
            <li>
              Conducted root-cause analysis and collaborated with developers to
              refine workflows and fix critical gaps.
            </li>
          </ul>

          <h5 className="fw-semibold mt-4">Key Projects</h5>

          <p className="mt-2 mb-1 fw-medium">Project 1 — Screen Utilization Dashboard</p>
          <ul>
            <li>
              Built a dashboard to track page views across warehouse management
              screens.
            </li>
            <li>
              Identified under-utilized or deprecated screens and helped remove
              them, enabling developers to clean unnecessary code.
            </li>
            <li>
              Dashboard is now used to evaluate screen usage for better UI/UX
              decision-making.
            </li>
          </ul>

          <p className="mt-3 mb-1 fw-medium">Project 2 — Vendor Dispatch Visibility</p>
          <ul>
            <li>
              Introduced SKU/quantity dispatch visibility that previously didn’t
              exist.
            </li>
            <li>
              Built an Excel dashboard for ground teams to track pendency and
              plan dispatch.
            </li>
            <li>
              Added internal alerts to notify cluster heads, PMs, and Directors
              about completion & delays.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-5">
          <h4 className="fw-semibold mb-3">2. Training, Documentation & Scaling</h4>
          <ul>
            <li>
              Created training documentation for optimized product workflows.
            </li>
            <li>
              Conducted beta testing, analysed drop-offs, identified UX issues,
              and coordinated fixes with app/web developers.
            </li>
            <li>
              Simplified flows with design teams to ensure easy adoption.
            </li>
            <li>
              After validation & improvements, scaled features across PAN India.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

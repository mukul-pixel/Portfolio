import React from "react";
import { NavLink } from "react-router-dom";

export const TLapp = () => {
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

      {/* Main Container */}
      <div className="project-content-wrapper container py-5">

        {/* Title */}
        <h2 className="text-center mb-4 section-title">
          Gamification for Warehouse Workforce Productivity
        </h2>

        {/* Problem Statement */}
        <section className="section-block">
          <h4 className="section-heading">Problem Statement</h4>
          <p className="section-text">
            With Blinkit's rapidly growing customer base, demand at dark stores
            and warehouses increased proportionally. This led to:
          </p>
          <ul>
            <li>Higher dependency on manual workforce</li>
            <li>Increased hiring of both off-roll and on-roll employees</li>
            <li>Rising hiring costs</li>
            <li>High churn and management overhead</li>
          </ul>
          <p>
            Across India, nearly 200 warehouse users resign every day, creating
            continuous backfill requirements. Warehouses must hire new workers to
            fill the gap and additional workers to meet rising demand. However,
            new joiners require 10–15 days to learn workflows and become
            productive, causing operational inefficiencies.
          </p>
        </section>

        {/* Metrics Analyzed */}
        <section className="section-block">
          <h4 className="section-heading">Metrics Analyzed</h4>
          <p>To understand the impact and bottlenecks, I analyzed:</p>
          <ul>
            <li>Resignation ratios across FCs</li>
            <li>User-level performance (new joiners vs. experienced workers)</li>
            <li>Demand fulfillment ratio — Expected vs. Dispatched</li>
            <li>Time taken to fulfill demand on shift-level</li>
          </ul>
        </section>

        {/* Insights */}
        <section className="section-block">
          <h4 className="section-heading">Insights from Data</h4>
          <ol>
            <li>
              <strong>Stagnant performance among experienced users</strong><br />
              Despite being well-trained, many experienced workers showed lack of
              motivation leading to flat or declining productivity.
            </li>
            <li>
              <strong>Increasing demand → More tasks → Overtime</strong><br />
              High workload and continuous overtime contributed significantly to
              burnout and resignations.
            </li>
          </ol>
          <p>
            These insight shows that improving the efficiency and engagement of
            experienced users directly drives business growth.
          </p>
        </section>

        {/* Workflow Overview */}
        <section className="section-block">
          <h4 className="section-heading">Current Workflow Overview</h4>
          <div className="row">
            <div className="col-md-6">
              <p>
                Warehouse operations consist of multiple task-based departments:
                Unloader, Segregator, Auditor, Picker, Packer, Sorter,
                Dispatcher, Putter.
              </p>
              <p>
                Each user either creates or is assigned tasks, for example:
                <br />
                - Unloaders create unloading tasks upon truck arrival
                <br />
                - Pickers receive picklists based on store demand
                <br />
                - Packers pack completed pick crates
              </p>
            </div>
            <div className="col-md-6 text-center">
              <div className="figma-placeholder">
                Current flow figma
              </div>
            </div>
          </div>
        </section>

        {/* Proposed Solution */}
        <section className="section-block">
          <h4 className="section-heading">Proposed Solution</h4>
          <p>
            Maintain the core workflow without any process changes, and
            integrate a task-based gamification layer.
          </p>
          <ul>
            <li>Users earn points for every task they create or complete.</li>
            <li>Points are awarded based on time, effort, and complexity.</li>
            <li>Points can be encashed for real monetary rewards.</li>
            <li>Encashment works through predefined points buckets.</li>
          </ul>
        </section>

        {/* Design Notes */}
        <section className="section-block">
          <h4 className="section-heading">Design Notes</h4>
          <div className="row">
            <ol className="col-md-4">
            <li>
              <strong>In-App User Experience</strong>
              <ul>
                <li>Visibility of points before starting a task</li>
                <li>Time estimate for each task</li>
                <li>Total points dashboard</li>
                <li>All encashment buckets</li>
                <li>Clear Redeem option</li>
                <li>Encashment history & live status</li>
              </ul>
            </li>
            <li>
              <strong>HR Dashboard Requirements</strong>
              <ul>
                <li>List of all users who encashed points</li>
                <li>Bucket type and payout amount</li>
                <li>Date of encashment</li>
                <li>User details</li>
                <li>Update status to “added to payroll”</li>
                <li>Filters for employee ID and date</li>
              </ul>
            </li>
          </ol>
            <div className="col-md-8 text-center">
              <div className="figma-placeholder">
                Current flow figma
              </div>
            </div>
          </div>
        </section>

        {/* Testing and Scaling */}
        <section className="section-block">
          <h4 className="section-heading">Testing and Scaling</h4>
          <p>
            The feature was first tested in the stage environment to identify
            bugs and edge cases. After initial validations, a beta pilot was
            conducted in 2 FCs to measure real-world performance. During the
            testing phase:
          </p>
          <ul>
            <li>task timings showing unusually high or low values,</li>
            <li>points not getting added for some users,</li>
            <li>gaps in how timings were calculated,</li>
            <li>and a few other event-related bugs.</li>
          </ul>
          <p>
            Root causes were identified and fixed in collaboration with the POCs.
            Once validated and stable, the feature was scaled across all FCs PAN
            India.
          </p>
        </section>

        {/* Impact */}
        <section className="section-block mb-5">
          <h4 className="section-heading">Impact</h4>
          <ol>
            <li>
              <strong>Improved User Performance by 18%</strong>
              <ul>
                <li>If a user previously picked 100 line items, they now pick 118.</li>
                <li>25,000 users × 18 = 4,50,000 extra line items/day</li>
              </ul>
            </li>
            <li>
              <strong>Reduced Resignations by 20% & Hiring Costs by 11.6%</strong>
              <ul>
                <li>6,000 resignations/month</li>
                <li>Hiring cost = ₹6 Crore/month</li>
                <li>20% reduction = ₹1.2 Crore saved</li>
                <li>₹50 lakh spent on rewards</li>
                <li>Net savings = ₹70 lakh (11.6%)</li>
              </ul>
            </li>
            <li>
              <strong>Reduced Demand Fulfillment Time by 16%</strong>
              <ul>
                <li>10 hours → 8.4 hours</li>
                <li>Better SLA, lower backlog, improved CX</li>
              </ul>
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

import React from 'react'
import { NavLink } from 'react-router-dom'
import demoVideo from "../assets/whoop_mixpanel.mov";
import userRetention from "../assets/user_retention.png";
import onBoarding from "../assets/onboarding.png";
import featureUsage from "../assets/feature_usage.png";
import subscription from "../assets/subscription.png";
import planBreakdown from "../assets/plan_breakdown.png";
import paymentBreakdown from "../assets/payment_breakdown.png";
import cancelledActiveUsers from "../assets/cancelled_active_users.png";
import cancellationReasons from "../assets/cancellation_reasons.png";


export const Mixpanel = () => {
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
              Mixpanel - Whoop Analysis
            </h2>

            {/* Demo Video */}
            <section className="section-block">
              <video controls width="100%">
                <source src={demoVideo} type="video/mp4" />
              </video>
            </section>
    
            {/* Product Overview */}
            <section className="section-block">
              <h4 className="section-heading">Product Overview</h4>
              <p className="section-text">
                Whoop is a fitness wearable and mobile application focused on recovery, strain, and sleep optimization. Whoop provides users with actionable insights about their body's performance without screens or distractions on the device itself. The product operates on a subscription model, where users purchase the wearable device and maintain an active membership to access the platform.
              </p>
            </section>
    
            {/* Business Goals */}
            <section className="section-block">
              <h4 className="section-heading">Business Goals</h4>
              <ul>
                <li>Increase user retention and engagement</li>
                <li>Improve conversion from free to premium subscription</li>
                <li>Enhance overall user satisfaction</li>
              </ul>
            </section>
    
            {/* Insights, Metrics, and Improvements */}
            <section className="section-block">
              <h4 className="section-heading">Metrics, Insights and Improvements</h4>
              <div className="retention-funnel row">
                  {/* Text Section */}
                  <div className="funnel-text col-md-6 col-12 p-3">
                    <h5>Retention Funnel</h5>
                    <p>
                      This funnel tracks <strong>Weekly Active Users (WAU)</strong> and retention trends,
                      with the goal of improving long-term user engagement.
                    </p>
                    Assumptions - 
                    <ul>
                      <li>Users who record activities manually</li>
                      <li>Users with app sessions longer than <strong>30 seconds</strong></li>
                    </ul>
                    Key Insights - 
                    <ul>
                      <li><strong>42.33%</strong> of users drop off after Week 4</li>
                      <li>Retention declines week-over-week, indicating weak habit formation</li>
                    </ul>
                    Potential Contributors - 
                    <ul>
                      <li>Complex UI</li>
                      <li>Difficulty navigating across features</li>
                    </ul>
                    Proposed Improvements - 
                    <ul>
                      <li>Introduce streak-based gamification using notifications & widgets</li>
                      <li>Simplify UI to surface key features more intuitively</li>
                    </ul>
                  </div>

                  {/* Image Section */}
                  <div className="col-md-6 col-12 text-center p-3">
                    <img
                      src={userRetention}
                      alt="User retention funnel analysis"
                      className="img-fluid rounded"
                    />
                  </div>
              </div>
              <div className="onboarding-funnel row mt-3">
                  {/* Image Section */}
                  <div className="col-md-6 col-12 text-center p-3">
                    <img
                      src={onBoarding}
                      alt="On Boarding funnel analysis"
                      className="img-fluid rounded"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="funnel-text col-md-6 col-12 p-3">
                    <h5>On-Boarding Funnel</h5>
                    <p>
                      This metric measures users who successfully open and use the app after subscribing.
                    </p>
                    Key Insights - 
                    <ul>
                      <li><strong>39.25%</strong> of users never open the app after subscribing.</li>
                    </ul>
                    Possible Reasons - 
                    <ul>
                      <li>Lengthy onboarding process, excessive information requested at the start.</li>
                    </ul>
                    Proposed Improvements - 
                    <ul>
                      <li>Revisit the onboarding flow, remove non-essential inputs and make the process shorter and simpler.</li>
                      <li>Re-directing user automatically after each process of on-boarding, reducing manual inputs.</li>
                    </ul>
                  </div>
                </div>
              <div className="retention-funnel row mt-3">
                  {/* Text Section */}
                  <div className="funnel-text col-md-6 col-12 p-3">
                    <h5>Feature Usage & Engagement</h5>
                    <p>
                      This metric evaluates feature usage at a weekly level across a 3-month cohort.
                    </p>
                    Assumptions - 
                    <ul>
                      <li>Feature usage is analyzed irrespective of individual weeks, using a rolling 3-month cohort</li>
                      {/* <li>Users with app sessions longer than <strong>30 seconds</strong></li> */}
                    </ul>
                    Key Insights - 
                    <ul>
                      <li><strong>Power Features:</strong> Strain, Sleep, Recovery (highest usage)</li>
                      <li><strong>Moderately Used Features:</strong> Journal, Reports</li>
                      <li>
                        <strong>Low Usage Features:</strong> Teams, Coaching
                        <ul>
                          <li>Usage has increased week over week but remains significantly lower than power features and moderately used features.</li>
                        </ul>
                      </li>
                    </ul>
                    Proposed Improvements - 
                    <ul>
                      <li>
                        Coaching
                        <ul>
                          <li>Refresh content, introduce a “Recommended Next Step” flow.</li>
                          <li>Weekly content updates with auto-suggested CTAs.</li>
                          <li><strong>Measure: </strong>+100 users active for {">"}15 days in Coaching</li>
                        </ul>
                      </li>
                      <li>
                        Teams
                        <ul>
                          <li>Add leaderboards and lightweight competitions, make team activity more visible and rewarding.</li>
                          <li>Introduce social nudges.</li>
                          <li><strong>Measure: </strong>+100 users with {">"}15 days of team engagement</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* Image Section */}
                  <div className="col-md-6 col-12 text-center p-3">
                    <img
                      src={featureUsage}
                      alt="Feature Usage funnel analysis"
                      className="img-fluid rounded"
                    />
                  </div>
              </div>
              <div className="subscription-funnel row mt-3">
                  {/* Image Section */}
                  <div className="col-md-6 col-12 text-center p-3">
                    <img
                      src={subscription}
                      alt="subscription funnel analysis"
                      className="img-fluid rounded"
                    />
                  </div>
                  {/* Text Section */}
                  <div className="funnel-text col-md-6 col-12 p-3">
                    <h5>Subscription Funnel</h5>
                    <p>
                      This section provides insights into subscription types and payment preferences.
                    </p>
                    Key Insights - 
                    <ul>
                      <li>Subscription rate has dropped by <strong>65–80%</strong> over the last 3 months, month over month.</li>
                      <li>
                        Most popular plans:
                        <ul>
                          <li>Monthly: 1,088 users</li>
                          <li>Annual: 512 users</li>
                          <li>Biannual: 157 users</li>
                        </ul>
                      </li>
                      <li>
                        Preferred payment methods:
                        <ul>
                          <li>Apple Pay & Credit Card: 67%</li>
                          <li>PayPal: 20%</li>
                          <li>Google Pay: 13%</li>
                        </ul>
                      </li>
                    </ul>
                    Preferred Actions - 
                    <ul>
                      <li>Introduce a referral-based program to drive both acquisition and engagement</li>
                      <li>
                        Pricing anomaly identified:
                        <ul>
                          <li>Biannual plan is priced higher than the monthly plan, negatively impacting conversion</li>
                        </ul>
                      </li>
                      <li>Investigate low Google Pay adoption for potential technical issues</li>
                    </ul>
                  </div>
                </div>
              <div className='subscription-funnel-img row'>
                  <div className="col-md-6 col-12 text-center p-3">
                    <img
                      src={planBreakdown}
                      alt="plan-breakdown funnel analysis"
                      className="rounded funnel-img"
                    />
                  </div>
                  <div className="col-md-6 col-12 text-center p-3">
                    <img
                      src={paymentBreakdown}
                      alt="payment-breakdown funnel analysis"
                      className="rounded funnel-img"
                    />
                  </div>
                </div>
              <div className="cancellation-funnel row mt-3">
                  {/* Text Section */}
                  <div className="funnel-text col-md-6 col-12 p-3 ">
                    <h5>Cancellation & Anomaly Funnel</h5>
                    <p>
                      This metric analyses subscription cancellations to improve retention and conversion.
                    </p>
                    Key Insights - 
                    <ul>
                      <li>
                        <strong>MAJOR ANOMALY</strong>
                        <ul>
                          <li>
                            Users can still:
                            <ul>
                              <li>Record activities</li>
                              <li>Access premium features, even after subscription cancellation.</li>
                            </ul>
                          </li>
                          <li>This directly impacts conversion rates and skews metrics across the funnel</li>
                        </ul>
                      </li>
                      <li><strong>47%</strong> of users canceled their subscription in the last 3 months</li>
                      <li>
                        Issues & Improvements (Low Development Effort)
                        <ul>
                          <li>
                            <strong>Technical Issues: </strong> Actively track reported issues, ensure all issues raised in a week are resolved within the same week.
                          </li>
                          <li>
                            <strong>Customer Service: </strong> Analyse query resolution time and success rates, identify improvement opportunities.
                          </li>
                          <li>
                            <strong>Didn’t Like Interface: </strong> Redesign UI for simplicity and broader usability.
                          </li>
                          <li>
                            <strong>Didn’t Use Enough: </strong> Introduce streak-based engagement, add more notification and widget use cases.
                          </li>
                          <li>
                            <strong>Too Expensive: </strong> Reduce biannual plan price ($240 / 6 months), Current pricing is higher than monthly ($30 / month).
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* Image Section */}
                  <div className="col-md-6 col-12 text-center p-3">
                    <img
                      src={cancelledActiveUsers}
                      alt="cancellation funnel analysis"
                      className="img-fluid rounded"
                    />
                  </div>
              </div>
              <div className="cancellation-funnel-img mt-3">
                  {/* Image Section */}
                  <div className="text-center">
                    <img
                      src={cancellationReasons}
                      alt="cancellation-reasons funnel analysis"
                      className="img-fluid-1 rounded"
                    />
                  </div>
              </div>
            </section>

            {/* Execution Plan*/}
            <section className="section-block mb-5">
              <h4 className="section-heading">Execution Plan</h4>
              <div class="table-responsive">
                <table class="table table-bordered table-hover align-middle text-center">
                  <thead class="table-dark">
                    <tr>
                      <td scope="col">Priority</td>
                      <td scope="col">Initiative</td>
                      <td scope="col">Business Goal Impact</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="badge bg-danger">P0</span></td>
                      <td>Premium Access Fix</td>
                      <td>Conversion, Trust</td>
                    </tr>
                    <tr>
                      <td><span class="badge bg-danger">P0</span></td>
                      <td>Pricing Correction</td>
                      <td>Conversion</td>
                    </tr>
                    <tr>
                      <td><span class="badge bg-danger">P0</span></td>
                      <td>Support & Technical Fixes</td>
                      <td>Retention, Satisfaction</td>
                    </tr>
                    <tr>
                      <td><span class="badge bg-danger">P0</span></td>
                      <td>Gamification Streaks</td>
                      <td>Retention</td>
                    </tr>
                    <tr>
                      <td><span class="badge bg-warning text-dark">P1</span></td>
                      <td>UI Simplification</td>
                      <td>Engagement</td>
                    </tr>
                    <tr>
                      <td><span class="badge bg-warning text-dark">P1</span></td>
                      <td>Coaching Revamp</td>
                      <td>Premium Value</td>
                    </tr>
                    <tr>
                      <td><span class="badge bg-warning text-dark">P1</span></td>
                      <td>Onboarding Optimization</td>
                      <td>Activation</td>
                    </tr>
                    <tr>
                      <td><span class="badge bg-info text-dark">P2</span></td>
                      <td>Referral System</td>
                      <td>Growth</td>
                    </tr>
                    <tr>
                      <td><span class="badge bg-info text-dark">P2</span></td>
                      <td>Teams & Social Features</td>
                      <td>Long-term Retention</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </>
  )
}

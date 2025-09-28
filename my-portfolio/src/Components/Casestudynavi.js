import React from 'react'
import { NavLink } from 'react-router-dom'
import naviHeroImage from '../assets/Navi Hero image.png';
import aarrrFunnel from '../assets/aarrr funnel.png';

export const Casestudynavi = () => {
  return (
    <>
    <div className='back-option-wrapper px-5 pt-5'>
        <NavLink 
                to="/" 
                className="text-decoration-none d-flex"
                style={{ color: "inherit" }}
        >
          <span className='back-option fs-3'>
            <span className='mb-1'>←</span>
          </span>
        </NavLink>
      </div>
    <div className='p-5'>
        <h2 className='text-center text-decoration-underline'>Product Teardown: Navi India</h2>
        <h4 className='text-decoration-underline py-2'>About</h4>
        <div className='row about-section-wrapper gap-md-5'>
            <div className='about-section col-md-4 col-12 fs-5 py-3 me-md-5'>
                Navi is a fintech app offering instant personal loans, health insurance, UPI transfers, bill payments and mutual funds.<br/>
                Founded by Sachin Bansal in 2020, it targets India’s growing digital population with the promise of <span className='fw-bold'>“simple, affordable, accessible financial services.”</span>
                <br/>
                <br/>
                ​​In FY24, Navi reported ≈ ₹1,906.2 crore in standalone operating revenue (and ≈ ₹2,812 crore on a consolidated basis) across its financial services operations.
                <br/>
                Its core focus spans across tier 1 and tier 2 cities, where digital adoption is 
                rising but formal financial penetration remains limited.
            </div>
            <div className='about-section-img col-md-7 col-12'>
                <img 
                    className='navi-hero-img w-auto'
                    src={naviHeroImage}
                    alt='navi_hero_img'
                    style={{ height: "500px", objectFit: "cover" }}
                    />
            </div>
        </div>
        <div className='row aarrr-funnel-wrapper'>
            <h4 className='text-decoration-underline my-4'>AARRR Funnel</h4>
            <div className='aarrr-funnel-text col-md-6 col-12 fs-5'>
                <h5 className='acquisition-heading'>Acquisition</h5>
                <ul>
                    <li>Performance marketing (Google, Facebook, YouTube ads).</li>
                    <li>Word of mouth: “Instant loans in 5 mins.”</li>
                </ul>
                <h5>Activation</h5>
                <ul>
                    <li>Smooth KYC onboarding in {'<'}10 mins.</li>
                    <li>Personalized loan/insurance offers.</li>
                </ul>
                <h5>Retention</h5>
                <ul>
                    <li>EMI reminders, push notifications.</li>
                    <li>Simplified investment journeys.</li>
                    <li>Gamification - Navi Coins</li>
                </ul>
                <h5>Revenue</h5>
                <ul>
                    <li>Interest Income from personal loans.</li>
                    <li>Premiums & underwriting margins on health insurance.</li>
                    <li>Expense ratios on mutual funds</li>
                </ul>
                <h5>Referral</h5>
                <ul>
                    <li>Referral bonuses (₹100–500)</li>
                </ul>
            </div>
            <div className='aarrr-funnel-img col-md-6 col-12 py-4'>
                <img 
                    className='aarrr-funnel-img-container w-auto'
                    src={aarrrFunnel}
                    alt='aarrr_funnel_img'
                    style={{ height: "500px", objectFit: "cover" }}
                    />
            </div>
        </div>
        <div className='row core-features-wrapper'>
            <h4 className='text-decoration-underline my-4'>Core Features</h4>
            <div className='aarrr-funnel-text col-md-6 col-12 fs-5'>
                <h5 className='personal-loans-heading'>Personal Loans</h5>
                <ul>
                    <li>₹10,000 – ₹20 lakhs, instant disbursal.</li>
                    <li>Flexible EMIs, credit score-based.</li>
                </ul>
                <h5>Insurance Policies</h5>
                <ul>
                    <li>Low-cost premiums, cashless network.</li>
                    <li>Simple digital purchase & claim support.</li>
                </ul>
                <h5>Mutual Funds (Navi MF)</h5>
                <ul>
                    <li>Direct mutual funds, zero commission.</li>
                    <li>Goal-based SIP journeys.</li>
                </ul>
                <h5>Payments & Everyday Finance</h5>
                <ul>
                    <li>UPI payments: peer to peer (P2P) & merchant QR.</li>
                    <li>Bill & recharge payments: Mobile, DTH, electricity, water, broadband.</li>
                    <li>EMI & SIP auto-payments via UPI.</li>
                </ul>
            </div>
            <div className='core-features-img col-md-6 col-12 py-4'>
                <img 
                    className='aarrr-funnel-img-container w-auto'
                    src=""
                    alt='aarrr_funnel_img'
                    style={{ height: "500px", objectFit: "cover" }}
                    />
            </div>
        </div>
        <div className='user-experience-analysis'>
            <h4 className='text-decoration-underline py-4'>User Experience (UX) Analysis</h4>
            <div className="table-responsive my-3">
                <table className="table table-bordered table-hover align-middle">
                <thead className="table-light">
                    <tr>
                    <th scope="col">Experience Type</th>
                    <th scope="col">Strengths</th>
                    <th scope="col">Pain Points</th>
                    <th scope="col">Solutions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Row 1 */}
                    <tr>
                    <td>Simple UI</td>
                    <td>
                        - Clean, intuitive design. <br />
                        - Easy navigation across loans, insurance, MFs.
                    </td>
                    <td>
                        - Over-simplification may leave advanced users unsatisfied.{" "}
                        <br />
                        - No “Pro mode” for detailed views.
                    </td>
                    <td>
                        - Add advanced dashboards for investors. <br />
                        - Personalize UI based on user segment.
                    </td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                    <td>Investments &amp; Spends Visibility</td>
                    <td>- Core products (loans, insurance, MF) are accessible.</td>
                    <td>
                        - No consolidated view of total investments. <br />
                        - No spend categorization. <br />
                        - No fund recommendations. <br />
                        - Only mutual funds offered, with limited options. <br />
                        - No option to invest in stocks.
                    </td>
                    <td>
                        - Provide portfolio dashboard with graphs. <br />
                        - Add expense tracker with categories. <br />
                        - Use AI for personalized MF recommendations. <br />
                        - Expand investment products (e.g., stocks, ETFs).
                    </td>
                    </tr>

                    {/* Row 3 */}
                    <tr>
                    <td>Loan/Insurance Purchase</td>
                    <td>- Less Paperwork, Fast and easy KYC.</td>
                    <td>- Confusion on eligibility, jargon-heavy terms.</td>
                    <td>- Add explainers &amp; real-time guidance.</td>
                    </tr>

                    {/* Row 4 */}
                    <tr>
                    <td>Gamification</td>
                    <td>
                        - Navi Coins feature encourages app usage. <br />
                        - Builds habit and retention.
                    </td>
                    <td>
                        - Coins usage not fully integrated across products. <br />
                        - Limited perceived value by users.
                    </td>
                    <td>- Expand coin usage and increase perceived value.</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <div className='competitor-wrapper py-3 row fs-5'>
            <div className="col-md-6 col-12 py-2">
                <h4 className="competitors text-decoration-underline text-center py-3">Competitors</h4>
                <p>
                    Due to its multiple services within the app, Navi has multiple competitors based on the category:
                </p>
                <ul className="mb-2 pt-2">
                    <li>
                    <strong>Personal loans / BNPL:</strong> KreditBee, PaySense, EarlySalary, CASHe, Slice, Simpl.
                    </li>
                    <li>
                    <strong>Health insurance / InsurTech:</strong> PolicyBazaar (aggregator), Acko, Digit Insurance, Aditya Birla Health.
                    </li>
                    <li>
                    <strong>Investments / WealthTech:</strong> Groww, Zerodha (Coin), Paytm Money, Upstox, ET Money.
                    </li>
                    <li>
                    <strong>UPI & Payments:</strong> PhonePe, Google Pay, Paytm.
                    </li>
                    <li>
                    <strong>Bill payments & Wallets:</strong> Paytm, Freecharge, MobiKwik.
                    </li>
                </ul>
                <p className='pt-2'>
                    <span className="fw-bold">Differentiator:</span>{' '}
                    End-to-end ownership of products (e.g., Navi MF, Navi Health Insurance) vs aggregator models—this enables tighter control on pricing, underwriting, and cross-sell.
                </p>
            </div>
            <div className='competitor-landscape-img-container col-md-6 col-12'>
                <img 
                    className='competitor-landscape-img w-auto'
                    src=""
                    alt='competitor_landscape_img'
                    style={{ height: "500px", objectFit: "cover" }}
                />
            </div>
        </div>
        <div className='fs-5 conclusion-wrapper py-2'>
            <h4 className='conclusion-heading py-2'> Conclusion - </h4>
                Navi stands out by owning its products end-to-end and combining loans, insurance, investments, and payments into a single ecosystem. Its biggest strengths lie in <strong>onboarding simplicity, gamification, and clean UI</strong>, but it lags in <strong>investment depth, spend visibility, and advanced user features.</strong>
                <br/>
                <br/>
                If Navi expands into <strong>stocks/ETFs, advanced dashboards, and deeper gamification, it could evolve from a financial app into a true super-app for personal finance in India.</strong>
        </div>
    </div>
    </>
  )
}

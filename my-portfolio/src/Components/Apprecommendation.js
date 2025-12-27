import React from 'react'
import { NavLink } from 'react-router-dom'
import appStoreImg from '../assets/appstore_explore_data.png';
import playStoreImg from '../assets/playstore_explore_data.png';
import removingDuplicateImg from '../assets/removing_duplicates.png';
import keepingLatestRecord from '../assets/keeping_latest_record.png';
import removingNonEnglishApps from '../assets/removing_non_english_apps.png'
import isolatingFreeApps from '../assets/isolating_free_apps.png'
import appStoreGenre from '../assets/app_store_genres.png'
import playStoreGenre from '../assets/play_store_genre.png'
import appStoreGenrePop from '../assets/app_store_genre_popularity.png';
import appStoreAppDist from '../assets/app_store_app_distribution.png';
import playStoreGenrePop from '../assets/play_store_genre_popularity.png';
import healthAndFitnessApps from '../assets/health_and_fitness_apps.png';

export const Apprecommendation = () => {
  return (
<>
  <div className='back-option-wrapper px-md-5 px-4 pt-5'>
    <NavLink 
            to="/" 
            className="text-decoration-none d-flex"
            style={{ color: "inherit" }} // prevents default blue link color
    >
      <span className='back-option fs-3'>
        <span className='mb-1'>←</span>
      </span>
    </NavLink>
  </div>
  <div className='p-md-5 p-3'>
    <h2 className='text-center text-decoration-underline'>App Recommendation</h2>
    <div  className='col'>
      <div className='col-md-8 col-12 pt-5'>
        <h4>Project Description</h4>
        <p className='mb-4 fs-5'>This project focuses on analysing mobile app data from the Apple App Store and Google Play Store. As a product analyst for a company that develops Android and iOS apps, our goal is to identify the types of apps most likely attract a large number of users.</p>
        <h4>Business Requirements</h4>
        <p className='mb-4 fs-5'>We only build apps that are free to download and install, our revenue comes from the in-app advertisements, the more users who see and engage with the ads, the better.</p>
        <h4>Project Goals</h4>
        <p className='mb-4 fs-5'>Goal of this project is to analyze the data to help our developers understand what types of apps are likely to attract more users.</p>
      </div>
    </div>
    <div className='exploring-data-wrapper'>
      <h4 className='text-center text-decoration-underline py-5'>Exploring Data</h4>
        <div className='row exploring-data'>
          <div className='col-md-6 col-12'>
            <h5 className='text-decoration-underline'>App Store</h5>
            <p className='mb-4 fs-5'>
              App store data have 7197 iOS apps and 16 columns. Columns that will most likely be interest of us include - 'track_name', 'price', 'rating_count_tot', 'user_rating', 'prime_genre'.
            </p>
            <img
              className="exploring-data-img img-fluid"
              src={appStoreImg}
              alt="appstore_explore_data_img"
            />
          </div>

          <div className='col-md-6 col-12'>
            <h5 className='text-decoration-underline'>Google Play Store</h5>
            <p className='mb-4 fs-5'>
              Google play store have 10841 android apps and 13 columns. Columns that most likely be interest of us include - 'App', 'Category', 'Reviews', 'Installs', 'Price', 'Genres'.
            </p>
             <img
              className="exploring-data-img img-fluid rounded"
              src={playStoreImg}
              alt="playstore_explore_data_img"
            />
          </div>
        </div>
    </div>
    <div className='removing-duplicate-wrapper'>
      <h4 className='text-center text-decoration-underline py-5'>Removing Duplicates</h4>
        <div className='row removing-duplicate'>
          <div className='col-md-6 col-12'>
            <p className='mb-4 fs-5'>
              As we explored the data further found that data contains duplicate rows for the same app, if you see the below cell's output, app name "Slack" have 3 entries.
            </p>
            <p className='mb-4 fs-5 py-3'>
  Even though there are duplicate rows for the app, there's a catch that "Rating" is different for some rows of the same app (highlighted), which means that our data was captured on different timestamps.<br />
  Higher the reviews more latest the data is, so instead of removing random duplicate rows for an app, we will remove the rest and keep the row with the highest number of reviews.<br /><br/>
  To accomplish that, we will need to:<br />
  Create a dictionary that has the unique app name as a key and the highest number of reviews of that app as the value.
</p>
          </div>
          <div className='col-md-6 col-12'>
            <img
              className="cleaning-step-img img-fluid rounded"
              src={removingDuplicateImg}
              alt="removing_duplicate_img"
            />

            <img
              className="cleaning-step-img img-fluid rounded"
              src={keepingLatestRecord}
              alt="keeping_latest_record"
            />

          </div>
        </div>
    </div>
        <div className='business-requirement-wrapper'>
      <h4 className='text-center text-decoration-underline py-5'>Business Requirements</h4>
        <div className='row exploring-data'>
          <div className='col-md-6 col-12'>
            <h5 className='text-decoration-underline text-center pb-3'>Removing Non-English Apps</h5>
            <p className='mb-4 fs-5'>
              A english character is defined if it comes in between the range of 0-127 (upper_range and lower_range inclusive).<br/>
              To check if an app is english or not we'll create a function that will check if we have a app_name that contains more than 3 non-english characters then it is a non-english app.<br/>
              We are left with 6183 apps in app store dataset and 9614 apps in google play store dataset.
            </p>
            <img
              className="data-cleaning-img img-fluid rounded"
              src={removingNonEnglishApps}
              alt="removing_non_english_apps"
            />
          </div>

          <div className='col-md-6 col-12'>
            <h5 className='text-decoration-underline text-center pb-3'>Isolating Free Apps</h5>
            <p className='mb-4 fs-5'>
              Keeping records whose price is equals to '0' or '0.0' or '$0.00'.<br/>
              After isolating the free apps, we have 3222 apps left in app store and 8862 apps in the google play store dataset.
              {/* After isolating the free apps, we have 3222 apps left in app store and 8862 apps in the google play store dataset. */}
              {/* After isolating the free apps, we have 3222 apps left in app store and 8862 apps in the google play store dataset. */}
            </p>
            <img
              className="data-cleaning-img img-fluid rounded"
              src={isolatingFreeApps}
              alt="isolating_free_apps"
            />
          </div>
        </div>
    </div>
    <div className='analysing-data-wrapper'>
      <h4 className='text-center text-decoration-underline py-5'>Analysing Data</h4>
      <div className='app-store-genre-wrapper row py-3'>
        <div className='app-store-genre-text col-md-6 col-12'>
          <p className='mb-4 fs-5'>
            <span className='fw-bold'>App Store - </span>When we analyse the pattern of these apps, we see that the most common genre is Games (58.16%), more than half of the apps belongs to the Games genre. Entertainment is the second most common genre(7.88%), followed by Photo & Video (4.96%), and Education(3.66%).<br/>
            We can deduce that most of the apps are designed for fun (games, photo and video, social networking, sports, music), while the apps for pratical purposes (education, shopping, utilities, productivity, lifestyle) are fewer.<br/>
            Though the fun apps are more in number, we cannot recommend an app profile for the App Store market based on this alone. Having a large number of apps does not translate into having a large number of users. We need more information to give a proper recommendation. 
          </p>
        </div>
        <div className='app-store-genre-image col-md-6 col-12'>
          <img
            className="analysis-img img-fluid rounded"
            src={appStoreGenre}
            alt="app_store_genre"
          />

        </div>
      </div>
      <div className='play-store-genre-wrapper row py-3'>
        <div className='play-store-genre-text col-md-6 col-12'>
          <p className='mb-4 fs-5'>
              <span className='fw-bold'>Google Play Store - </span>The most common category is Family (18.91%). Games is the second most common (9.70%), followed by Tools (8.46%) and Business (4.59%). From the above, We can see that there are more apps for practical purposes than those for fun.<br/>
              Here we see the pattern that most of the apps are of practical type - Tools, Business, Finance, Productivity,etc. Here the apps are in balanced landscape. We cannot recommend an App Profile just by looking at the count of the apps built.
          </p>
        </div>
        <div className='play-store-genre-image col-md-6 col-12'>
          <img
            className="analysis-img img-fluid rounded"
            src={playStoreGenre}
            alt="play_store_genre"
          />

        </div>
      </div>
      <h5 className='text-decoration-underline py-2'>Analysing app genres on popularity</h5>
      <div className='app-store-popularity row'>
        <p className='mb-4 fs-5 col-md-6 col-12'>
            When we analyzed the App Store, we found that categories like Navigation, Reference, Social Networking, Music, and Weather attract the highest number of reviews. 
            But a closer look revealed a clear imbalance: a few dominant apps capture most of the attention, leaving little room for new entrants.<br/><br/> 
            A similar pattern emerged on the Google Play Store. Categories such as Video Players, Social, Photography, and Productivity show massive install numbers, but once again, the space is heavily dominated by giants like YouTube, Facebook, Instagram, and Microsoft Word. Even in the Games category, high installs mask an oversaturated and fiercely competitive market.<br/><br/>
            Across both platforms, one category consistently stands out: Health & Fitness. On the App Store, it places multiple apps among the top with over 300,000 reviews, while on Google Play, it averages more than 4 million installs per app. Unlike saturated categories, Health & Fitness still offers room for growth, fueled by rising global interest in wellness, fitness tracking, and mental health solutions.<br/><br/>
            This alignment across both ecosystems suggests that Health & Fitness is not just a popular category, but also a promising opportunity for building apps with real profit potential.<br/><br/>
            <span className='fw-bold'>
            The Health & Fitness niche is currently dominated by weight-loss apps. Entering that space with yet another similar product would mean going head-to-head with well-established competitors — not the best idea.<br/><br/>
            Instead, there’s a real opportunity to stand out by taking a different approach. Rather than focusing only on weight loss, we could explore a personalized habit coach app — one that blends health and wellness to help users build sustainable routines around fitness, mindfulness, and overall wellbeing.
            </span>
        </p>
        <div className='col-md-6 col-12'>
          <img className="analysis-img img-fluid rounded py-2" src={appStoreGenrePop} alt='appstore_genre_pop_img'/>
          <img className="analysis-img-small img-fluid rounded px-2" src={appStoreAppDist} alt='app_store_app_distribution_img' />
          <img className="analysis-img img-fluid rounded p-2" src={playStoreGenrePop} alt='play_store_app_distribution_img' />
          <img className="analysis-img-medium img-fluid rounded p-3" src={healthAndFitnessApps} alt='health_and_fitness_apps_img' />
        </div>
      </div>
      <div className='conclusion-wrapper'>
        <h4 className='text-center text-decoration-underline py-5'>Conclusion</h4>
        <p className='fs-5'>
          In this project, we analyzed data from the iOS App Store and Google Play Store to identify a profitable app profile for both markets.<br/><br/>
          Our analysis showed consistent and growing user engagement with Health and Fitness apps across both platforms. <span className='fw-bold'>Based on these insights, developing a personalized habit-coaching app that combines elements of health, wellness, and behavioral science to help users build sustainable habits.</span><br/><br/>
          <span className='fw-bold'>This type of app aligns well with current trends in personal development and digital wellness, and it will offer long-term value by supporting users in areas such as fitness routines, sleep improvement, nutrition, mindfulness, and productivity. By offering a highly customized experience through features like daily check-ins, adaptive goal setting, and habit tracking, we can keep users engaged and motivated over time.<br/><br/>
          By focusing on user value first and building trust, we can encourage long-term engagement and gradual conversion to premium features, creating a healthy balance between user satisfaction and business profitability.</span>
        </p>
      </div>
    </div>
  </div>
    {/* <ol>
      <li>Add description of the script</li>
      <li>
        Data Cleaning - 
        <ul>
          <li>Explored the data</li>
          <li>Deleted the wrong data</li>
          <li>Removed duplicate entries and kept the most relevant row</li>
          <li>As per the business need removed the non-english apps and non-free apps</li>
        </ul>
      </li>
      <li>
        Started the Analysis:
        
      </li>
    </ol>
    <iframe
        src="https://nbviewer.org/github/mukul-pixel/app_recommendation_analysis/blob/main/Basics.ipynb?flush_cache=true"
        width="100%"
        height="900"
        style={{ border: "none" }}
        title="App Recommendation Analysis Notebook"
        className='p-2'
    /> */}

</>
  )
}

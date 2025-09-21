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

export const Apprecommendation = () => {
  return (
<>
  <div className='back-option-wrapper px-5 pt-5'>
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
  <div className='p-5'>
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
              className='exploring-data-img w-auto'
              src={appStoreImg}
              alt='appstore_explore_data_img'
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>

          <div className='col-md-6 col-12'>
            <h5 className='text-decoration-underline'>Google Play Store</h5>
            <p className='mb-4 fs-5'>
              Google play store have 10841 android apps and 13 columns. Columns that most likely be interest of us include - 'App', 'Category', 'Reviews', 'Installs', 'Price', 'Genres'.
            </p>
            <img 
              className='exploring-data-img w-auto'
              src={playStoreImg}
              alt='playstore_explore_data_img'
              style={{ height: "250px", objectFit: "cover" }}
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
              className='removing-duplicate-img w-auto'
              src={removingDuplicateImg}
              alt='removing_duplicate_img'
              style={{ height: "220px", objectFit: "cover" }}
            />

            <img 
              className='keeping-latest-img w-auto'
              src={keepingLatestRecord}
              alt='keeping_latest_record'
              style={{ height: "220px", objectFit: "cover" }}
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
              className='non-english-apps w-auto'
              src={removingNonEnglishApps}
              alt='removing_non_english_apps'
              style={{ height: "250px", objectFit: "cover" }}
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
              className='isolating-free-apps w-auto'
              src={isolatingFreeApps}
              alt='isolating_free_apps'
              style={{ height: "250px", objectFit: "cover" }}
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
              className='app-store-genre w-auto'
              src={appStoreGenre}
              alt='app_store_genre'
              style={{ height: "360px", objectFit: "cover" }}
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
              className='play-store-genre w-auto'
              src={playStoreGenre}
              alt='play_store_genre'
              style={{ height: "360px", objectFit: "cover" }}
            />
        </div>
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

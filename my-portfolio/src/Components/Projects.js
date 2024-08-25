import React from 'react';
import { Link } from 'react-router-dom';

export const Projects = () => {
    const projects = {
        project1: {
            href: 'https://main--venerable-puffpuff-4452d1.netlify.app',
            images: [
                'https://res.cloudinary.com/di0ypmtwd/image/upload/v1724589255/bbs1.0_hg4qjh.jpg',
            ],
            headline: 'E-Commerce',
        },
        project2: {
            href: 'https://github.com/mukul-pixel/ChatGPT-Clone',
            images: [
                'https://res.cloudinary.com/di0ypmtwd/image/upload/v1724589268/Prompt_Master1_z1rsfj.jpg'
            ],
            headline: 'Prompt-Master',
        },
        project3: {
            href: 'https://github.com/mukul-pixel/ims-bbs',
            images: [
                'https://res.cloudinary.com/di0ypmtwd/image/upload/v1724589281/ims3.0_lo5gpx.jpg',
            ],
            headline: 'IMS'
        }
    };

    return (
        <>
            <div id='projectSection' className='project-heading-container px-md-5 py-5 px-3'>
                <h2 className='heading-text'>Projects</h2>
                <h1 className='project-heading-sub-text'>I Bring Results</h1>
            </div>
            <div className='project-wrapper p-4'>
            <div className="row px-md-5 py-5">
                {Object.keys(projects).map((projectKey) => (
                    <Link
                        to={projects[projectKey].href}
                        className='col-md-4 text-decoration-none text-black border col-12 px-0'
                        key={projectKey}
                    >
                        <div className='project-container'>
                            <div className='productTop'>
                                <div className='productProfile'>
                                    {projects[projectKey].images.length > 0 && (
                                        <img
                                            src={projects[projectKey].images[0]}
                                            className="card-img-top"
                                            style={{ aspectRatio: "1/1" }}
                                            alt={`Project ${projectKey} Thumbnail`}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className='project-description-content p-2 text-black'>
                                <h3 className=''>{projects[projectKey].headline}</h3>
                                <pre className='fs-5'>VIEW PROJECT 🡢</pre>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            </div>
        </>
    );
};

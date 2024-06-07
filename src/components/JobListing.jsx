import React from 'react'
import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa' //used for map icon, we added fa to the path
import {Link} from 'react-router-dom';

const JobListing = ({job}) => { // take in a job as prop

    const [showFullDescription, setShowFullDescription] = useState(true); //false is the default state

    let description = job.description; // the "description" is because of what is in the json object
  
    if (!showFullDescription) {
      description = description.substring(0, 90) + '...'; // substring used to 
    }
    return (
    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>

              <div className="mb-5">
              {description} {/* replaced job.drscription */}
              </div>

              {/* // on click takes a function to get the previous state and opposite of the previous state */}
              <button onClick={() => setShowFullDescription ((prevState) => !prevState)} className="text-indigo-500 hover:text-indigo-600">
                { showFullDescription ? 'less' : 'more'}
              </button>

              <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className='inline text-lg mb-1'/> {/* its a component and the style makes it inline */}
                  {job.location}
                </div>
                <Link
                  to={`/job/${job.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>
  )
}

export default JobListing

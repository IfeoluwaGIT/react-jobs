import React from 'react'
import { useState, useEffect  } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';


const JobListings = ({isHome = false}) => {
    
  const [jobs, setJobs] = useState([]); // empty arrayto fill the state
  const [loading, setLoading] = useState(true); // show a spinner when its fetching, after fetching we change it to false

  useEffect (() => {
    const fetchJobs = async () => {
      // to send a request to the backend just use /api
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs' // so we can see only 3 jobs on the front page
      try {
      const res = await fetch (apiUrl);
      const data = await res.json();
      setJobs(data);
      } catch (error) {
        console.log('Error fetching data',error);
    } finally { // which one is finally again?
      setLoading(false);
          }
        }
    fetchJobs(); // make sure you call it
}, []); // takes in a function and a dependency array. so everytime the thing in the arry changes, use effect function will run


  // const jobListings = isHome ? jobs.slice(0, 3) : jobs; (we imported the data locally)

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
          {loading ? ( 
            <Spinner loading={loading} /> ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {jobs.map((job) => ( // jobs.map was the original but we used recent jobs to reduce the diplay to 3
            <JobListing key={job.id} job={job} /> // passed ina job prop and since there is a list thats why we need the key
              ))} 
            </div>
          )} 
        </div>
    </section>

  )
}

export default JobListings


{/* fetching data to this component, we will use useEffects whille making the request, we want a side effect, also we will put those jobs in state, so we will use use state */}
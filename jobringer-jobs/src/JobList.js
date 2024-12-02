import React, { useState, useEffect } from 'react';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            {jobs.map(job => (
                <div key={job.id} className="job">
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>
    );
};

export default JobList;

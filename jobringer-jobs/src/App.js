import React from 'react';
import JobList from './JobList';

const App = () => {
    return (
        <div className="App">
            <header>
                <h1>Job Listings</h1>
            </header>
            <main>
                <JobList />
            </main>
        </div>
    );
};

export default App;

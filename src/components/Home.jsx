import React from 'react';
import AllGists from './Gists';
import SearchGist from './Search';

const Home = () => {
    return (
        <React.Fragment>
            <SearchGist />
            <AllGists />
        </React.Fragment>
    )
};

export default Home;
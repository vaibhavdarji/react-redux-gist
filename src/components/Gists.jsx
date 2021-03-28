import React from 'react';
import { useSelector } from 'react-redux';
import Gist from './Gist';
import Loader from './Loader';
import Error from "./Error";

const AllGists = () => {
    const { loading, gists, userName, error } = useSelector(state => state.all);
    return (
        <div className="gists">
            {
                loading && (
                    <Loader>
                        <h5>Loading ...</h5>
                    </Loader>
                )
            }
            {
                !error && !loading && (
                    <React.Fragment>
                    <h6 className="gistsStatus">
                            {gists.length} result found for user { userName  }
                        </h6>
                        <div className="gistItems">
                        {
                            gists.map(gist => (
                                <Gist
                                    key={gist.id}
                                    data={gist}
                                />
                            ))
                        }
                        </div>
                        </React.Fragment>
                )
            }
            
            {
                error && (
                    <Error message={error} />
                )
            }
        </div>
    );
};

export default AllGists;
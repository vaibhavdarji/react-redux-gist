import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchGistDetail } from "../redux/action";
import Loader from './Loader';
import Error from "./Error";


const GistDetail = props => {
    const { loading, gist, error } = useSelector(state => state.single);
    const dispatch = useDispatch();
    const {
        match: { params: { id } } = {
            params: {
                id: null
            }
        }
    } = props;

    useEffect(() => {
        dispatch(fetchGistDetail(id))
    }, []);
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
                error && (
                    <Error  message={error} />
                )
            }
            {
                !error && !loading && Object.keys(gist).length > 0 && (
                    <div className="gistItem">
                        <div className="">
                            { gist.description || 'No Description' }
                        </div>
                        <h6>
                            Files :
                        </h6>
                        {
                            Object.keys(gist.files).map((file, index) => (
                                <div key={index} className="gistFile">
                                    <a 
                                        className="gistLink"
                                        href={gist.files[file].raw_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        { gist.files[file].filename }
                                    </a>
                                </div>
                            ))
                        }

                        <h6>
                            Forks :
                        </h6>
                        {
                            gist.forks.length > 0 && (
                                gist.forks.map((fork, index) => (
                                    <div key={index} className="gistFork">
                                        <img
                                            alt={fork.user.login}
                                            src={fork.user.avatar_url}
                                            className="gistAvatar"
                                        />
                                        <a
                                            href={`https://gist.github.com/${fork.id}`}
                                            target="_blank"
                                            className="gistLink"
                                            rel="noreferrer"
                                        >
                                            {fork.user.login}
                                        </a>
                                    </div>
                                ))
                            )
                        }
                        {
                            gist.forks.length < 1 && (
                                <div className="gistFork noFork">
                                    No Forks
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
};

export default GistDetail;
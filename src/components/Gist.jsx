import React, { useMemo } from 'react';
import { Link } from 'react-router-dom'


const GistDetail = ({ data }) => {
    const files = useMemo(() => Object.keys(data.files), [data.files]);
    return (
        <div className="gistItem">
            <Link 
                to={{pathname: `/${data.id}`, state: {description: data.description, files: data.files}}}
                className="gistLink"
            >
                <p>{data.description || 'No Description'}</p>
                <p>{files.length} {(files > 1) ? 'Files' : 'File'}</p>
                <div className="gistBadges">
                    
                    {
                        files.map((file, index) => (
                            <span className="gistBadge" key={index}>
                                {data.files[file].language}
                            </span>
                        ))
                    }
                </div>
            </Link>
        </div>
        
        
    );
};

export default GistDetail;
import React, {useState, useEffect} from 'react';

function VideoAPI() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result =  await fetch("https://orangevalleycaa.org/api/videos").then(
                response => response.json()
            );
            setData(result); 
        };

        fetchData();
    }, []);

    return (
        <div className="video-api" > 
            <header> 
                <h4>Video API video's </h4>
            </header>
            {data.map(video => (
                <div key={video.id}>
                    <h2>{video.name} </h2>
                    <video height={200} width={200} controls src={video.video_url} /> 
                </div>
            ))}
        </div> 
    )
} 

export default VideoAPI
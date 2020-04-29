import React from 'react';

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
} 

export default VideoAPI

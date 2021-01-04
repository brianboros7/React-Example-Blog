import React, {useState, useEffect} from 'react'


function UnsplashAPI() {
    let [photos, setPhotos] = useState([])

    const loadData = (options) => {
        fetch(options.url).then(function(response) {
            return response.json()
        })
        .then(function(data){ 
            if (options.onSuccess) options.onSuccess(data)
        })
    }

    useEffect(() => {
        const photosUrl = query ? `${url}&query=${query}` : url;
        loadData( {
            url: photosUrl,
            onSuccess: res => {
                setPhotos(res);
            }
        });
    }, [query, url]);

    return(
        <section>

        </section>
    )
}

export default UnsplashAPI 
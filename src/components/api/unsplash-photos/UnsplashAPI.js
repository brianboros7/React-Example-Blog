import React, {useState, useEffect} from 'react'


function UnsplashAPI() {
    let [photoUrl, setPhotoUrl] = useState('');
    // let [query, setQuery] = useState("vampires");
    // const queryInput = useRef(null);

    {/*
        * This api link works for Vanilla JS 
        but not React? 
        https://api.unsplash.com/photos/WkfDrhxDMC8?client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k
     */}
    const loadData = () => {
        fetch("https://source.unsplash.com/random")
        .then((response) => setPhotoUrl(response.url)) 
    }

    useEffect(() => {
        loadData()
    });

    {/*
    useEffect((e) => {
        e.loadData( {
            url: photosUrl,
            onSuccess: res => {
                setPhotos(res);
            }
        });
    }, [query, url]);
    */}

    {/* 
    const searchPhotos = e => {
        e.preventDefault();
        setQuery(queryInput.current.value);
      };
    */}

    return(
        <div className="unplash-image">
            <img  src={photoUrl} alt="" /> 
        </div>
    )
}

export default UnsplashAPI 
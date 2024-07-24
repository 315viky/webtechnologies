import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {

    const [imagesList, setImagesList] = useState([]);
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImagesList(result);
    };
    
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={imagesList}/>
        </div>
    );
    
}

export default App;
import { useState, useEffect } from "react";

const Body = () => {
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cse.google.com/cse.js?cx=6232bdbd51c464e5a";
        script.async = true;
        document.getElementById("google-search-container").appendChild(script);
    }, []);

    return (
        <div>
            <div id="google-search-container" className="m-8 p-10">
                <div className="gcse-search"></div>
            </div>
        </div>
    );
};

export default Body;
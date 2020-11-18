import dotenv from 'dotenv'
dotenv.config();

import { search } from './api';
import { appendMovies, clearMovies, setMessage } from './ui';

(()=> {
    const handleSearchButtonClick = () => {
        const searchTerm = document.getElementById("search-pane-input").value;

        clearMovies();
        setMessage("Searching, please wait");

        search(searchTerm)
        .then((res)=>{
            if(res.Response == "True"){
                console.log(res)
                appendMovies(res.Search);
                setMessage();
            }
            else {
                setMessage("Error: Movie name does not exist in our files.")
            }
        }).catch((e) => {
            setMessage("Unexpected error. Please try again")
        })
    }

    window.addEventListener('load', () => {
        document.getElementById("search-pane-button")
        .addEventListener("click", handleSearchButtonClick)
    })
})();
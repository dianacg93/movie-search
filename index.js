import dotenv from 'dotenv'
dotenv.config();

import { search } from './api';

(()=> {
    const handleSearchButtonClick = () => {
        const searchTerm = document.getElementById("search-pane-input").value;

        search(searchTerm)
        .then((res)=>{
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
    }

    window.addEventListener('load', () => {
        document.getElementById("search-pane-button")
        .addEventListener("click", handleSearchButtonClick)
    })
})();
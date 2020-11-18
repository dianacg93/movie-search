

const createListItem = (title, year, poster) => {
    const caption = `${year}, ${title}`;

    const captionNode = document.createElement('figcaption')
    captionNode.appendChild(document.createTextNode)

    const posterNode = document.createElement('img')
    posterNode.setAttribute('alt', caption)
    posterNode.setAttribute('class', "search-results-item-poster")
    posterNode.setAttribute('src', poster)

    const figureNode = document.createElement('figure')
    figureNode.appendChild(posterNode)
    figureNode.appendChild(captionNode)

    const listItemNode = document.createElement('li')
    listItemNode.setAttribute('class', 'search-results-item')
    listItemNode.appendChild(figureNode)

    return listItemNode
}

export const appendMovies = (movies) => {
    const list = document.getElementById("search-results")
    
    movies.forEach((movie) => {
        const listItemNode = createListItem(movie.Title, movie.Year, movie.Poster)
        listItemNode.appendChild(listItemNode)
    })
}
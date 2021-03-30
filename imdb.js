//http://www.omdbapi.com/?i=tt3896198&apikey=8e68c2e

let input=document.getElementById("search");
input.addEventListener("keyup", e=>{
    if(e.keyCode===13){
        let value=e.target.value;
        searchMovies(value);
    }
    
})


function searchMovies(searchtext){
    window.fetch(`http://www.omdbapi.com/?s=${searchtext}&apikey=8e68c2e`)
    .then(data=>{
        data.json().then(movies =>{
            let moviesdata=movies.Search;
            let output=[];
            for(let movie of moviesdata)
            {
                console.log(movie);
                output+= `<div>
                    <img src= ${movie.Poster} alt= ${movie.Title} />
                    <h1>${movie.Title}</h1>
                    <p>${movie.Type}</p>
                    <p>${movie.Year}</p>
                </div>`

                document.getElementById("template").innerHTML=output;
           }
        }).catch(err=>console.log(err))
    })
    .catch(err => console.log(err))
}

import axios from "axios";


function getALLPeople (currentPage) {
    return axios.get('https://api.themoviedb.org/3/person/popular?page=' +currentPage, {
        headers : {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTcyNzY5NzIxMy45NTAxMzcsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zE09kAtaA2YdztVg9XZXMODM14mJ-IBuC8QAxG9k3PM"
        }
    });
}

function getALLDetails (id){
    return axios.get('https://api.themoviedb.org/3/person/'+id+'?language=fr-FR', {
        headers : {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTcyNzY5NzIxMy45NTAxMzcsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zE09kAtaA2YdztVg9XZXMODM14mJ-IBuC8QAxG9k3PM"
        }
    });
}

function getALLMovieByPeople (idPeople){
    return axios.get('https://api.themoviedb.org/3/discover/movie?language=fr&with_people='+idPeople, {
        headers : {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDczNTRkNzZiZTM2NTcxODY4NDcyZGZhZWUyN2Q4NyIsIm5iZiI6MTcyNzY5NzIxMy45NTAxMzcsInN1YiI6IjYyMmIwY2Q5ZDY4MTliMDAxYjVhMjUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zE09kAtaA2YdztVg9XZXMODM14mJ-IBuC8QAxG9k3PM"
        }
    });

}

export default {
    getALLPeople,
    getALLDetails,
    getALLMovieByPeople
}
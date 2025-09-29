function profileFetcher(username){
    return fetch(`http://api.github.com/users/${username}/repos`).then(raw => raw.json());
}

profileFetcher('yashcoding07').then(data => console.log(data))


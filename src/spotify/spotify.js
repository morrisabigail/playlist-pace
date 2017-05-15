import request from 'superagent'

export const featured = (token) => {
    return request.get(`https://api.spotify.com/v1/users/abimorris/playlists`)
        .set('Authorization', `Bearer ${token}`)

}

export const PlaylistTracks = (token, playlists) => {
    for(let track = 0; track < playlists.length; track++){
        console.log("playlist count", playlists.length)
        return request.get(`https://api.spotify.com/v1/users/abimorris/playlists/${playlists[track]}/tracks`)
            .set('Authorization',`Bearer ${token}`)
            .query({'fields':'items(track(name,id))'})

    }

}

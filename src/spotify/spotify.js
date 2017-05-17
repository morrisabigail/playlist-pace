import request from 'superagent'

export const getUserPlaylists = (token) => {
    return request.get(`https://api.spotify.com/v1/users/abimorris/playlists`)
        .set('Authorization', `Bearer ${token}`)
   // playlistTracks(token, playlists)
}

export const playlistTracks = (token, playlists) => {
        var playlist = request.get(`https://api.spotify.com/v1/users/abimorris/playlists/${playlists}/tracks`)
            .set('Authorization', `Bearer ${token}`)
            .query({'fields': 'items(track(name,id))'})
    var tracks= playlist.items.map(item => item.id)
    console.log(tracks)
    return tracks
}



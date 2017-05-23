import request from 'superagent'
//TODO set abimorris to user state
        export const getUserPlaylists = (token) => {
        return request.get(`https://api.spotify.com/v1/users/abimorris/playlists`)
            .set('Authorization', `Bearer ${token}`)

    }

        export const getPlaylistTracks = (token, value) => {
        return request.get(`https://api.spotify.com/v1/users/abimorris/playlists/${value}/tracks`)
            .set('Authorization', `Bearer ${token}`)


    }
        export const getAudioFeatures = (token, tracks) => {
        return request.get(`https://api.spotify.com/v1/audio-features/?ids=${tracks}`)
            .set('Authorization', `Bearer ${token}`)
    }








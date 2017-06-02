import request from 'superagent'
//TODO set user to user state
export const getUserPlaylists = (token) => {
    return request.get(`https://api.spotify.com/v1/users/abimorris/playlists`)
        .set('Authorization', `Bearer ${token}`)

}

const getPlaylistTracks = (token, value) => {
    return request.get(`https://api.spotify.com/v1/users/abimorris/playlists/${value}/tracks`)
        .set('Authorization', `Bearer ${token}`)
        .then(response => response.body.items.map(item => item.track))


}
export const getAudioFeatures = (token, tracks) => {
    return request.get(`https://api.spotify.com/v1/audio-features?ids=${tracks}`)
        .set('Authorization', `Bearer ${token}`)
}

const grabTempo = response => response.body.audio_features.map(item => item.tempo)

//todo merge by id
/*tracks.map(track => {
const tempo = tempos.audio_features.find(tempo=> tempo.id ==== track.id).
return Object.assign({}, track, {tempo}}
*/
const combineTracksAndTempo = tracks => tempos => ({tracks, tempos})


const getTempo = token => tracks => {
    const filteredTracks = tracks.filter(track => track.id)
    const trackIds = filteredTracks.map(item => item.id).join(',')
    return request.get(`https://api.spotify.com/v1/audio-features?ids=${trackIds}`)
        .set('Authorization', `Bearer ${token}`)
        .then(grabTempo)
        .then(combineTracksAndTempo(filteredTracks))
}

export const getTracksAndTempo = (token, playlist) => {
    return getPlaylistTracks(token, playlist)
        .then(getTempo(token))

}







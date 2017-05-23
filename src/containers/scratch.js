   //let user pick playlist



            this.audioFeaturesFetch(token, tracks)
    //     })
    //
    // }
    //
    // audioFeaturesFetch(token, tracks) {
    //     getAudioFeatures(token, tracks).then((response) => {
    //
    //         let res = response.body.audio_features.map(item => {
    //             if(item) return {tempo: item.tempo}
    //         })
    //         console.log(res)
    //
    //     })
    //
    // }
   //       //get user playlists
   // getPlaylistTracks(token, playlist).then((response) => {
   //     let res = response.body.items
   //     //console.log(res)
   //     tracks.push(res.map(item => item.track.id).join(','))
   //
   //     trackNames.push(res.map(item => <ListItem primaryText={item.track.name}/>))
   //
   //     getUserPlaylists(token).then((response) => {
   //         let res = response.body.items
   //         playlist.push(res.map((item) => <MenuItem value={item.id} key={item.id} primaryText={item.name}/>))
   //
   //     })
   // }



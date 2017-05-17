import React, {Component} from 'react'
import {getUserPlaylists, getPlaylistTracks, getAudioFeatures} from '../spotify/spotify'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';


const playlist= [];
const tracks = [];
const trackNames = [];

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: undefined,
            message: '',
            value: undefined

        }

    }

    //then get tracks of playlists

    componentWillMount() {
        //get token
        const url = window.location.href
        const token = /access_token=(.*)/g.exec(url)[1]
        this.state.token = token
        this.playlistFetch(token);
    }

    playlistFetch(token) {
        //get user playlists
        getUserPlaylists(token).then((response) => {
            let res = response.body.items
            playlist.push(res.map((item) => <MenuItem value={item.id} key={item.id} primaryText={item.name} />))

        })

    }
    //let user pick playlist
    handleChange = (event, index, value) => {
        this.setState({value});
        this.trackFetch(this.state.token,value)

    }

    trackFetch(token, value) {
        getPlaylistTracks(token, value).then((response) => {
            let res = response.body.items
            console.log(res)
            tracks.push(res.map(item => item.track.id).join(','))

            trackNames.push(res.map(item => <ListItem primaryText={item.track.name}/>))
          //  console.log("tracks",tracks)
           //  res.map(track=>track.id)
           //  tracks.push(res)
           // // tracks.push(res.map((track) => <h3 value={track.id} key={track.id}>{track.name}</h3>))
           //  console.log(tracks)

            this.audioFeaturesFetch(token, tracks)
        })

    }

    audioFeaturesFetch(token, tracks) {
        getAudioFeatures(token, tracks).then((response) => {
            let res = response.body.audio_features

           // res.map(items=> items.tempo)
            //forEach(res.map(item=>item.tempo))
               // res.map(item => item.tempo)
           // console.log("tempo",res)
        })

    }

        render()
        {

            return (
                <div>
                    <SelectField
                        floatingLabelText= 'Select a Playlist'
                        value={this.state.value}
                        onChange={this.handleChange}
                        maxHeight={200}
                    >
                     {playlist}
                     </SelectField>
                    <List>{trackNames}</List>
                </div>
            )
        }

}

export default Home

import React, {Component} from 'react'
import {featured, PlaylistTracks} from '../spotify/spotify'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: undefined,
            message: undefined
        }

    }


    componentWillMount() {
        const url = window.location.href
        const token = /access_token=(.*)/g.exec(url)[1]
        this.state.token = token
        featured(token).then((response) => {
            var playlists = response.body.items.map(items => items.id)
            console.log(playlists)
            PlaylistTracks(token, playlists).then((response) => {
                    for (let i = 0; i < 15; i++) {
                    console.log(response.body.items[i].track.name)
                }})
            })

    }
        render()
        {

            return (
                <div>
                    <iframe src ="https://open.spotify.com/embed?uri=spotify:user:abimorris:playlist:4HfqVe6wyIY7pWiU8RMFy8&view=list" width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>

                </div>
            )
        }

}

export default Home

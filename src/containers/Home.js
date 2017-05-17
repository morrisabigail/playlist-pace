import React, {Component} from 'react'
import {getUserPlaylists} from '../spotify/spotify'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const playlist= [];

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: undefined,
            message: undefined

        }

    }


    //let user pick playlist
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
            playlist.push(res.map((item) => <MenuItem key={item.id} primaryText={item.name} />))

        })

    }


        render()
        {

            return (
                <div>
            <SelectField>
                {playlist}
            </SelectField>
                </div>
            )
        }

}

export default Home

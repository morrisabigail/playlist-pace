import React, {Component} from 'react'
import {getUserPlaylists} from "../Auth/Token"
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import Tracks from './Tracks'

class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlists: []
        }
        this.handleChange = this.handleChange.bind(this)
    }


    componentWillMount() {
        getUserPlaylists(this.props.token).then((response) => {
            this.setState({
                playlists: response.body.items
            })
        })

    }

    menuItems = (playlists) => {
        return playlists.map(item =>
            <MenuItem primaryText={item.name}
                      key={item.id}
                      value={item.id}
            />)

    }

    handleChange(event, index, value) {
        //TODO state is one update behind user must click twice to initialize
        this.setState({selectedPlaylist: value})
        console.log(this.state.selectedPlaylist)
    }


    render() {
        console.log('selected', this.state.selectedPlaylist)
        return <div>
            <SelectField
                floatingLabelText='Select a Playlist'
                value={this.state.selectedPlaylist}
                onChange={this.handleChange}
                maxHeight={200}
            >
                {this.menuItems(this.state.playlists)}
            </SelectField>
            {this.state.selectedPlaylist
                ? <Tracks token={this.props.token} selected={this.state.selectedPlaylist}/>
                : <h2>No Tracks Selected</h2>
            }

        </div>
    }
}

export default Playlist
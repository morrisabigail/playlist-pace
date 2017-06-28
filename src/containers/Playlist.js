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


    menuItems = () => {
        return this.state.playlists.map(item =>
            <MenuItem primaryText={item.name}
                      key={item.id}
                      value={item.id}
            />)

    }

    handleChange(event, index, value) {
        // callback just checking to make sure state is rerendering
        this.setState({selectedPlaylist: value});
    }


    render() {
        return <div>
            <SelectField
                floatingLabelText='Select a Playlist'
                value={this.state.selectedPlaylist}
                onChange={this.handleChange}
                maxHeight={200}
            >
                {this.menuItems()}
            </SelectField>
            {this.state.selectedPlaylist
                ? <Tracks token={this.props.token} selected={this.state.selectedPlaylist}/>
                : null
            }

        </div>
    }
}

export default Playlist
import React, {Component} from 'react'
import {getPlaylistTracks} from "../Auth/Token"
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import styled from 'styled-components'

const Header = styled.h2`
    margin: auto
`

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tracks: []
        }
    }

    componentWillMount() {
        console.log('this has been called')

        getPlaylistTracks(this.props.token, this.props.selected).then(response => {
            console.log('service call response', response.body.items.map(item => item.track))
            this.setState({tracks: response.body.items.map(item => item.track)})
        })
    }

    // makeGridList = (tracks) => {
    //     return tracks.map(track => (
    //         <GridTile
    //             key={track.id}
    //             title={track.name}
    //             subtitle={<span>by <b>{track.artists}</b></span>}
    //             actionIcon={<IconButton><StarBorder color="white"/></IconButton>}>
    //             <Header>greg</Header>
    //         </GridTile>
    //
    //     ))
    // }


    render() {
        const track = this.state.tracks[0]
        console.log('single track', track)
        return <div style={styles.root}>
            { (track)
                ? (<GridList>
                    cellHeight={180}
                    style={styles.gridList}
                    <Subheader>December</Subheader>
                    <GridTile
                        key={"https://i.scdn.co/image/79f80084e63116e6acbe6d1466a36d71be6b0798"}
                        title={track.name}
                        subtitle={<span>by <b>{track.name}</b></span>}
                        actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                        cols={1}
                        rows={1}>
                        <Header>greg</Header>
                    </GridTile>
                </GridList>)
                : <h2>blah</h2>}
        </div>

    }
}

export default Tracks
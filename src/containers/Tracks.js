import React, {Component} from "react";
import {getTracksAndTempo} from "../Auth/Token";
import {Card, CardHeader, CardTitle} from "material-ui/Card";
import {GridList,GridTile} from 'material-ui/GridList';


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
//todo css the cards

class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.makeCard = this.makeCard.bind(this)
    }

    findPace = (tempo) => {
        let seconds = 1500-(tempo * 6)
        let minutes = seconds / 60
        //get fraction of minutes to convert to seconds
        let y = Math.round((((minutes*10)%10) *.1) *60);
        let x = Math.floor(minutes);
        let pace = (x+":"+y)
        return pace
    }


    displayTracks = () => {
        const {token, selected} = this.props
        getTracksAndTempo(token, selected).then(response => {
            console.log(response.tracks[0].album.images[0].url)
           const {tracks, tempos} = response
            this.setState({tracks, tempos})
        })
    }

    makeCard = () => {
        this.displayTracks()
        //todo : reduce amt of calls
        const {tempos, tracks} = this.state
        return tempos
            ? tempos.map((tempo, i) => {
            tempo = Math.round(tempo)
                return <GridTile
                            key={i}
                            children={tracks[i].album.images[0].url}
                            title={tempo +" BPM " + " pace " + this.findPace(tempo)}
                            subtitle={tracks[i].name}
                           >
                        </GridTile>
            })
            : null
    }



    render() {

        return <div style={styles.root}>
            <GridList
                style={styles.gridList}>
            {this.makeCard()}
            </GridList>
        </div>
    }
}

export default Tracks
import React, {Component} from "react";
import {getTracksAndTempo} from "../Auth/Token";
import {Card, CardHeader, CardTitle} from "material-ui/Card";

const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '75%'
}


class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.makeCard = this.makeCard.bind(this)
    }

    componentWillMount() {
        console.log(this.props.selected, 'selected')
    }

    findPace = (tempo) => {
        let pace;
        let seconds = 1500-( tempo * 6)
        let minutes = seconds / 60
           let x = (minutes*10)%10
        if (x >= 6) {
            pace = (x % 60).toFixed(2);
        } else pace = minutes.toFixed(2);
        pace.toString();
        return pace.replace('.',':')
    }


    displayTracks = () => {
        const {token, selected} = this.props
        getTracksAndTempo(token, selected).then(response => {
            const {tracks, tempos} = response
            this.setState({tracks, tempos})
        })
    }

    makeCard = () => {
        const {tempos, tracks} = this.state

        //todo add service call to get all track tempos and save to const
        //todo map on tempo const
        return tempos
            ? tempos.map((tempo, i) => {
            tempo = Math.round(tempo)
                return <Card
                    style={cardStyle}
                    key={i}>
                    <CardHeader title={tempo +" BPM " + " git pace " + this.findPace(tempo)}/>)
                    <CardTitle
                        subtitle={tracks[i].artists.map(artist => `${artist.name} `)}
                        title={tracks[i].name}
                    />))
                </Card>
            })
            : null
    }



    render() {
        this.displayTracks()


        return <div>
            {this.makeCard()}

        </div>
    }
}

export default Tracks
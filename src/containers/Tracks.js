import React, {Component} from "react";
import {getTracksAndTempo} from "../Auth/Token";
import {Card, CardHeader, CardTitle} from "material-ui/Card";

class Tracks extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.makeCard = this.makeCard.bind(this)
    }

    componentWillMount() {
        console.log('this has been called')
        console.log(this.props.selected, 'selected')
        this.displayTracks(this.props.token, this.props.selected)
    }

    displayTracks = (token, selected) => {
        getTracksAndTempo(token, selected).then(response => {
            const {tracks, tempos} = response
            console.log(response)
            this.setState({tracks, tempos})
        })
    }

    makeCard = () => {
        const {tempos, tracks} = this.state

        //todo add service call to get all track tempos and save to const
        //todo map on tempo const
        return tempos
            ? tempos.map((tempo, i) => {
                console.log(tempo)
                return <Card
                    key={tracks[i].id}>
                    <CardHeader title={tempo}/>)
                    <CardTitle
                        key={tracks[i].id}
                        subtitle={tracks[i].artists.map(artist => `${artist.name} `)}
                        title={tracks[i].name}
                    />))
                </Card>
            })
            : null
    }

    render() {

        return <div>
            {this.makeCard()}

        </div>
    }
}

export default Tracks
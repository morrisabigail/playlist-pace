import React, {Component} from 'react'
import {getAudioFeatures} from "../Auth/Token"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Features extends Component {

    componentWillMount(){
        this.displayFeats(this.props.token, this.props.tracks)

    }

    displayFeats = (token, tracks) => {
        getAudioFeatures(token, tracks).then((response) => {
            let res = response.body.audio_features.map(item => {
                      if(item) return {tempo: item.tempo}
                })
        })
    }
    makeCardHeader= () => {
        return
        <CardHeader
            title={this.state.tempo}
        />

    }



    render() {

        return <div>
            {this.makeCardHeader()}
        </div>

    }

}

export default Features
import React, {Component} from 'react'
import Playlist from './Playlist'



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            token: ''
        }

    }
    //TODO store username id as state

    componentWillMount() {
        //get token save to state
        const url = window.location.href
        const token = /access_token=(.*)/g.exec(url)[1]
        this.setState({token: token })
    }

    render() {
            return (
                <div>
                  <Playlist token={this.state.token}/>

                </div>
            )
        }

}

export default Home

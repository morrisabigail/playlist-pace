import React, {Component} from 'react'
import Playlists from '../components/Playlists'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

class Template extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>

                        {this.props.children}

                </div>
            </MuiThemeProvider>
        )
    }
}

export default Template
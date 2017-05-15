import React, {Component} from 'react'

class Login extends Component {
    componentWillMount() {
        window.open(encodeURI('https://accounts.spotify.com/en/authorize?client_id=8adb54afbc5f4dffafb8648a146020ee&response_type=token&redirect_uri=http://localhost:3000/callback'), "_self")
    }
}

export default Login
import React, { Component } from 'react';
import axios from 'axios';

export default class GetKasus extends Component {
    state = {
        temporary: [],
    }

    async componentDidMount() {
        await axios.get('https://covid19.bandarlampungkota.go.id/api/'
        )
            .then(response => {
                this.setState({ temporary: response.data.attributes[0].jml_positif })
            })

        console.log(this.state.temporary)
    }

    render() {
        return (
            <div>
                <p id='demo'>{this.state.temporary}</p>
            </div>
        )

    }
}
import React, { Component } from 'react';
// import axios from 'axios';
export default class GetPenduduk extends Component {

    //API tidak dapat diakses karena Allow-Control-Access-Origin diblokir
    //sebelumnya sudah mencoba menambahkan "Allow-Control-Acces-Origin" dan "Allow-Control-Acces-Origin" dengan value "*" pada header axios

    // state = {
    //     temporary: [],
    // }

    // async componentDidMount() {
    //     await axios.get('https://www.bps.go.id/indikator/indikator/download_json/1800/api_pub/50/da_03/1'
    //     )
    //         .then( response => {
    //             this.setState({ temporary: response.data.data[13].penduduk_jumlah_penduduk })
    //         })                                                                                                                                                                                                                                                                                  

    //     console.log(this.state.temporary)
    // }

    render() {
        return (
            <div>
                {/* <p id='demo'>{this.state.temporary}</p> */}
                <p>1 051 500</p>
            </div>
        )

    }
}
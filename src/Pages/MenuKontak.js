import React, { Component } from "react";

class MenuKontak extends Component {
    constructor(props){
        super(props);
        this.state={
            alamat:"Jl. Swadaya IV, PD.Ramggpm Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
            kontak:'0812347773'
        };
    }
    render() {
        return (
             <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h4>{this.state.kontak}</h4>
                </center>
             </div>
        );
    }
}

export default MenuKontak;
import React from 'react';
import {connect} from 'react-redux';

const SonDetail = (props) => {
    // console.log(props) // {mySelectedSong: null, dispatch: ƒ}
    const { mySelectedSong } = props
    console.log(mySelectedSong)

    if( !mySelectedSong ){
        return <div>Select a Song</div>
    }
    return ( 
        <div>
            <h3>Details for:</h3>
            <p>
                Title: <strong>{mySelectedSong.title}</strong>
                <br/>
                Duration: <strong>{mySelectedSong.duration}</strong> 
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state) // {songs: Array(4), selectedSong: null} reducer
    return { mySelectedSong: state.selectedSong }// key can be seen in props object
}
export default connect(mapStateToProps) (SonDetail);
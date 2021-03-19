import { combineReducers  } from "redux";

const songsReducer = ()=>{
    return[
        { title: 'Push It Up', duration:'4:05' },
        { title: 'Devil devil', duration:'5:08' },
        { title: 'Swalla', duration:'3:08' },
        { title: 'Despercito', duration:'6:34' },
    ]
}

const selectedSongReducer = ( selectedSong = null, action ) => {
    if( action.type === 'SONG_SELECTED' ){
        return action.payload;
    }
    return selectedSong; // null
}

export default combineReducers( {
    // keys are from keys of state object
    songs: songsReducer,
    selectedSong: selectedSongReducer
});


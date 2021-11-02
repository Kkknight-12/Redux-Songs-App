import { connect } from 'react-redux';
// import selectSong Action from action file 
import { selectSong } from '../actions'

const SongList = (props) => {
    // you can see songs reducer named as songgs and selectSong Action creator
    console.log(props);// {songgs: Array(4), selectSong: ƒ}
    /* 
    {songgs: Array(4), dispatch: ƒ}
    dispatch: ƒ dispatch(action)
    songs: (4) [{…}, {…}, {…}, {…}]
    you can also see dispatch function from redux store,
    which is used to change data inside application
    */

    /* 
    after adding action
    {songs: Array(4), selectSong: ƒ}
    */
    return ( 
        <>
            {/* <RenderList/> */}
            {/* <div className="ui divided list">{renderList()}</div> */}
            <div className="ui divided list">
                <List {...props}/>
            </div>
        </>
    )

}

const List = (props) =>(

    props.songgs.map( ( song ) => {
        const { title } = song;
        return(
            <div className="item" key={title}>
                <div className="right floated content">
                    <button 
                        className="ui button primary"
                        // when we call our action creator it will
                        // take the action that is returned 
                        // and send it into redux dispatch function
                        onClick={ () => props.selectSong(song) }
                        >
                        Select
                    </button>
                </div>
                <div className="content">{title}</div>
            </div>
        )
    })
)

/* 
mapStateToProps function gets called with all the data inside
of a redux store
that means anytime we re-run our reducers and produce some new
state object the mapStateToProps function is going to re
run newly created state object.

which mean every time we click on select button
this function will re-run 
*/
const mapStateToProps = (state) => {
    // all the reducer can be seen here
    console.log(state); // { songs: Array(4), selectedSong: null }
    // selectedSong is null 
    /* 
    songs: Array(4)
    0: {title: "Push It Up", duration: "4:05"}
    1: {title: "Devil devil", duration: "5:08"}
    2: {title: "Swalla", duration: "3:08"}
    3: {title: "Despercito", duration: "6:34"} 
    */
    // after adding action and despatching it
    // {songs: Array(4), selectedSong: {…}}

    return { songgs: state.songs }
}

/* 
by passing action creator(selectSong) into connect function
, when ever we call props.action, it gets added to ours props object.
Connect function automatically take action that get returned and throw
into dipatch function 

So when we pass second arugment object selectSong to connect we are
adding it to our props object
{songs: Array(4), selectSong: ƒ}
and when we call props.selectSong(song) 
we are passing it to reducer where it will match the action.type
and return some value

so if you want to add action creator 
you need to pass it into connect function.
*/
export default connect( mapStateToProps ,
    // after adding selectSong action creator we can see it in props
    // name should match key
    { selectSong: selectSong } )(SongList);
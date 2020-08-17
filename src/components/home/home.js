import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Home = () => {
    return(
    <div>
        <div className="header">Customized recovery plans <br/> for every health issue</div>
        <div className="search_container">
            <input className="search_input"/>
            <button className="search_button"><SearchIcon/></button>
        </div>
    </div>
    )
}


export default Home;
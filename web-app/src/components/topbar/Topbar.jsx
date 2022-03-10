import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import axios from 'axios';
import { Input } from "@mui/material";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const PATH_LOGOUT = SERVER_URL + '/api/users/logout';

const PATH_SEARCH = SERVER_URL + '/api/recipes/';
 
export default function Topbar() {
  const handleClick = async ()=> {
    try {
      await axios.post(PATH_LOGOUT, {withCredentials: true})
        .then(res => {
          console.log(res.data.ingredients)
        })
        .catch(err => {
          console.log(err)
        });
    }catch (error){
      console.log(error);
    }
  }

  const keyHandler = async () => {
    const textList = document.getElementById("inputField").value
    //const userObject = {text: textList};
    try{
      //await axios.get(PATH_SEARCH, userObject)
      await axios.get(PATH_SEARCH)
      .then(res => {
        var search = res.data.recipes.filter((input) => input.text === 'make some chicken');
        console.log(search)
        //console.log(res.data.recipes);
      })
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
        <img className="logoImg" src="/assets/logo.png" alt="" />
          <span className="logoTop">The Recipe</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
              <button onClick= {keyHandler}>
                <Search className="searchIcon"/> 
              </button>
            <input id="inputField" type= "text" placeholder="Search for friend's recipe!" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>           
          </div>
          <div className="topbarIcons">
            {/* <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div> */}
          </div>
          <button className="logoutbutton" onClick={handleClick}>Logout</button>
        </div>
    </div>
  )
}


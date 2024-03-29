import React from "react";
import "./Topbar.css";
import { Chat, Person, Search, Notifications } from "@material-ui/icons";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input
            placeholder="search for friends, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLinks">HomePage</span>&nbsp;
            <span className="topbarLinks">TimeLink</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImage"/>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

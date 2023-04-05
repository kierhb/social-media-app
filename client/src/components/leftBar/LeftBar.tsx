import "./leftBar.scss";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {
  // @ts-ignore
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="User" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <Diversity3OutlinedIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <Diversity1OutlinedIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <StoreOutlinedIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <OndemandVideoOutlinedIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <TimerOutlinedIcon />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <EventOutlinedIcon />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsOutlinedIcon />
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsOutlinedIcon />
            <span>Gallery</span>
          </div>
          <div className="item">
            <VideocamOutlinedIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <MessageOutlinedIcon />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Others</span>
          <div className="item">
            <RequestQuoteOutlinedIcon />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <DvrOutlinedIcon />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <CastForEducationOutlinedIcon />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.personality-database.com/profile_images/e7a82a67a65140b6900218a2aed664c6.png"
                alt=""
              />
              <span>Veldora</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.personality-database.com/profile_images/e7a82a67a65140b6900218a2aed664c6.png"
                alt=""
              />
              <span>Veldora</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.personality-database.com/profile_images/e7a82a67a65140b6900218a2aed664c6.png"
                alt=""
              />
              <p>
                <span>Veldora</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.personality-database.com/profile_images/e7a82a67a65140b6900218a2aed664c6.png"
                alt=""
              />
              <p>
                <span>Veldora</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.personality-database.com/profile_images/e7a82a67a65140b6900218a2aed664c6.png"
                alt=""
              />
              <p>
                <span>Veldora</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.personality-database.com/profile_images/e7a82a67a65140b6900218a2aed664c6.png"
                alt=""
              />
              <p>
                <span>Veldora</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.personality-database.com/profile_images/e7a82a67a65140b6900218a2aed664c6.png"
                alt=""
              />
              <div className="online" />
              <span>Veldora</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.personality-database.com/profile_images/e7a82a67a65140b6900218a2aed664c6.png"
                alt=""
              />
              <div className="online" />
              <span>Veldora</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static1.personality-database.com/profile_images/e7a82a67a65140b6900218a2aed664c6.png"
                alt=""
              />
              <div className="online" />
              <span>Veldora</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

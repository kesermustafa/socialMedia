import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rigthbar from '../../components/rigthbar/Rigthbar';

import './profile.css';



const Profile = () => {


  return (



    <>
      <Topbar />
      <div className="profile">
        <Sidebar />

        <div className="profileRigth">
          <div className="profileRigthTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/profile/1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/1.jpg"
                alt=""
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">Anna Star</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRigthBottom">
            <Feed />
            <Rigthbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

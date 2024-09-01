import React from 'react';
import './rigthbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';


const Rigthbar = ({ profile }) => {


  const HomeRigthrar = () => {    
    return (
    <>
      <div className="brithdayContainer">
        <img className="birthdayImg" src="assets/gift1.png" alt="" />
        <span className="brithdayText">
          <b>Pola Foster</b> and <b>3 other friends </b> have a birthday today
        </span>
      </div>

      <img className="rigthbarAd" src="assets/ad.jpg" alt="" />
      <h4 className="rigthbarTitle">Online Friends</h4>

      <ul className="rigthbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>);
  };

  const ProfileRigthbar = () => {
    return (
        <>
          <h4 className='rigthbarTitle'>User information</h4>
          <div className="rigthbarInfo">
            <div className="rightbarInfoItem">
              <span className="rigthbarInfoKey">City : </span>
              <span className="rigthbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rigthbarInfoKey">From : </span>
              <span className="rigthbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rigthbarInfoKey">Relationship : </span>
              <span className="rigthbarInfoValue">Single</span>
            </div>
            
          </div>

          <h4 className='rigthbarTitle'>User friends</h4>
          <div className="rightbarFollowings">
            <div className="rigthbarFollowing">
              <img src="assets/person/8.jpg" alt="" className="rigthbarFollowingImg" />
              <span className='rigthbarFollowingName'>Angelina Jolie</span>
            </div>
            <div className="rigthbarFollowing">
              <img src="assets/person/7.jpg" alt="" className="rigthbarFollowingImg" />
              <span className='rigthbarFollowingName'>Suzan Weather</span>
            </div>
            <div className="rigthbarFollowing">
              <img src="assets/person/9.jpg" alt="" className="rigthbarFollowingImg" />
              <span className='rigthbarFollowingName'>Michail Black</span>
            </div>
            <div className="rigthbarFollowing">
              <img src="assets/person/4.jpg" alt="" className="rigthbarFollowingImg" />
              <span className='rigthbarFollowingName'>Json State</span>
            </div>
            <div className="rigthbarFollowing">
              <img src="assets/person/10.jpg" alt="" className="rigthbarFollowingImg" />
              <span className='rigthbarFollowingName'>Maria Lopez</span>
            </div>
          </div>
        </>

    );
  };

  return (
    <div className="rigthbar">
      <div className="rigthbarWrapper">
        {profile ? <ProfileRigthbar /> : <HomeRigthrar/>}
      </div>
    </div>
  );
};

export default Rigthbar;

import "./Online.css"

const Online = ({user}) => {

    console.log(user);
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img
                    className="rightbarProfileImg"
                    src={user.profilePicture}
                    alt={user.username}
                />

                <span className='rigthbarOnline'></span>
            </div>

            <span className='rigthbarUsername'>{user.username}</span>
        </li>
    )
}

export default Online
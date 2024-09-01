import './login.css';
import {useNavigate} from "react-router";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <Diversity3Icon  className="personLogo"/>
          <h3 className="loginLogo">SocialConect</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialConect.
          </span>
        </div>
        <div className="loginRigth">
          <div className="loginBox">
            <input
              type="Email"
              placeholder="email@exemple.com"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="enter password"
              className="loginInput"
            />
            <button onClick={() => navigate("/")} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>

            <button onClick={() => navigate("/register")} className="loginRegisterButton">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

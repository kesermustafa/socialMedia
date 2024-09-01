import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import './home.css'
import Rigthbar from '../../components/rigthbar/Rigthbar';


const Home = () => {
    return (
        <>

            <Topbar/>

            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rigthbar/>
            </div>

        </>
    )
}

export default Home
import routes from './routes'
import { useRoutes } from 'react-router-dom';
import TopBar from './components/Topbar/Topbar'
import Sidebar from './components/sideBar/SideBar'
import './App.css'
function App() {
    let router=useRoutes(routes)
    return ( 
        <>
            <TopBar/>
            <div className="container">
                <Sidebar/>
                {router}
            </div>
           
        </>
    );
}

export default App;
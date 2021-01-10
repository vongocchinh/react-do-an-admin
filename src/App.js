import React,{Component} from 'react';
import {BrowserRouter as Router}  from 'react-router-dom';
import RouterUi from './router/routerUi';
// import RouterAdmin from './router/routerAdmin';
import Menu from './components/Menu/menu';
import Home from './container/home/home';
import Header from './container/header';
import Footer from './components/layout/Footer';
import DashMenu from './components/Menu/menuContent';
import { ToastContainer } from 'react-toastify';
import Login from './container/login/login';
import { connect } from 'react-redux';
import UserTransport from './container/userTransport/userTransport';

class  App extends Component {
  render(){ 
    var layout=false;
    var UserData=JSON.parse(localStorage.getItem('userAdmin'));
    if(UserData){
      if(UserData.idAdmin){
        layout=true;
      }
    }else{
      layout=false;
    }
    return (
      <div>
      <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{width:"300px",height:"40px",fontSize:"12px"}}
            />
            {layout ? <Router>
                      <div>
                        <Menu/>
                        <div className="container-right-index2-left">
                            <Header/>
                              <DashMenu/>
                                <RouterUi>
                                    <Home/>
                                </RouterUi>
                            <Footer/>
                        </div>
                      </div>
                    </Router>
                    : <Router>
                        <Login/>
                    </Router> }
      </div>
    );
  }
  showHomeAdmin=(data)=>{
    switch(data){
      case 0:
        return (<RouterUi>
                <Home/>
              </RouterUi>);
      case '2':
        return (<UserTransport/>);
      default : return (<RouterUi>
                        <Home/>
                      </RouterUi>);
    }
  }
}

export default 
connect(null,null)
(App);


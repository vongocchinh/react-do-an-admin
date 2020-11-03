import React,{Component} from 'react';
import {BrowserRouter as Router}  from 'react-router-dom';
import RouterUi from './router/routerUi';
// import RouterAdmin from './router/routerAdmin';
import Menu from './components/Menu/menu';
import Home from './container/home/home';
import Header from './container/header';
import Footer from './components/layout/Footer';
import DashMenu from './components/Menu/dashMenu';
import { ToastContainer } from 'react-toastify';
import Login from './container/login/login';
import { connect } from 'react-redux';
import * as action from './actions/admin';
class  App extends Component {
  constructor(props) {
    super(props);
    this.state={
      adminDashBoard:false
    }
  }
  
  render(){ 
    var {UserAdmin}=this.props;
    var layout=false;
    if(UserAdmin){
      if(UserAdmin.displayName){
        layout=true;
      }
    }else{
      layout=false;
    }
    setTimeout(() => {
      this.props.Get_Admin();
    }, 1000);
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
}
const mapStateToProps=(state)=>{
  return{
    UserAdmin:state.UserAdmin
  }
}
const dispatchToProps=(dispatch,props)=>{
  return {
    Get_Admin:()=>{
      dispatch(action.GetAdmin());
    }
  }
}
export default 
connect(mapStateToProps,dispatchToProps)
(App);


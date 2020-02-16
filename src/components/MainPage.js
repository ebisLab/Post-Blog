import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Another from './Another'
import Form from './Form';
import Home from './Home';
import Header from './Header'



const MainPage= (props) =>{

    return(
    <div>
            <Header />


         {/* {props.data.map(item => (<Post key={item.id} item={item} /> ))} */}

{/* <Switch>
<Route exact path="/" component={Home} />

  <Route exact path="/somewhere" component={Another} />
  <Route exact path="/formie" component={Form} />

</Switch> */}
    </div>)
  }

  export default MainPage
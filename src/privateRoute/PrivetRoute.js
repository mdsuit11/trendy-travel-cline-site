import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route} from "react-router-dom";
import useAuth from "../useFirebase/useAuth"

const PrivetRoute = ({children, ...rest}) => {
        let {user, isLoding} = useAuth();

        if(isLoding) {
          // return  <Spinner animation="border" variant="primary" />
          return <div class="spinner-border text-primary mt-5 mb-5 item-center" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        }
        return(
            <Route
            {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
            <Redirect
            to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


export default PrivetRoute;





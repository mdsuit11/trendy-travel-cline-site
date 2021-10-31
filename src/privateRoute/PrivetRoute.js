import React from 'react';
import { Redirect, Route} from "react-router-dom";
import useAuth from "../useFirebase/useAuth"

const PrivetRoute = ({children, ...rest}) => {
        let {user} = useAuth();
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





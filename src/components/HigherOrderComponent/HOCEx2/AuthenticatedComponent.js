
// Let's say we have a component that should only be displayed if the user is logged in.
// So we create a HOC that checks for the authentication on each render():
// AuthenticatedComponent.js
import React from "react";

export function requireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        /**
        * Check if the user is authenticated, this.props.isAuthenticated
        * has to be set from your application logic (or use react-redux to retrieve it from global
        state).
        */
        isAuthenticated() {
            return this.props.isAuthenticated;
        }


        render() {
            const loginErrorMessage = (
                <div>
                    Please <a href="/login">login</a> in order to view this part of the
                    application.
                </div>
            );
            return (
                <div>
                    {this.isAuthenticated == true ? <Component {...this.props} /> : loginErrorMessage}
                </div>
            );
        }
    }
    return AuthenticatedComponent
}
export default requireAuthentication
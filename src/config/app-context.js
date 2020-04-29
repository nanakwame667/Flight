import React from 'react';

const AppContext = React.createContext();

export class AppProvider extends React.Component{

    updateState = state => {
        if (typeof state.token !== 'undefined') localStorage.setItem("token", state.token === null ? undefined: state.token);
        if (typeof state.user !== 'undefined') localStorage.setItem("user", state.user === null ? undefined: JSON.stringify(state.user));
        if (typeof state.admin !== 'undefined') localStorage.setItem("admin", state.admin === null ? undefined: JSON.stringify(state.admin));
        this.setState(state);
     }
    
    state = {
        token: localStorage.getItem("token") === 'undefined' ? null : localStorage.getItem("token"),
        user: localStorage.getItem("user") === 'undefined' ? null : JSON.parse(localStorage.getItem("user")),
        admin: localStorage.getItem("admin") === 'undefined' ? null : JSON.parse(localStorage.getItem("admin")),
        updateState: this.updateState
    };

    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }

};

export const AppConsumer = AppContext.Consumer;

export default AppContext;
import React from 'react';

const AppContext = React.createContext({
    user: null,
    token: null
});

export const AppProvider = AppContext.Provider;

export const AppConsumer = AppContext.Consumer;

export default AppContext;
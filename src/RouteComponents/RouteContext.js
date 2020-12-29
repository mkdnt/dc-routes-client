import React from 'react';

export default React.createContext({
    routes: [],
    addRoute: () => {},
    editRoute: () => {},
    deleteRoute: () => {},
    editing: null
})
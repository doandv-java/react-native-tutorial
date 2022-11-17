import React from "react";
import Navigation from "./src/components/Navigation";
import {StatusBar} from 'react-native';
import {AuthProvider} from "./src/context/AuthContent";

const App = () => {
    return (
        <AuthProvider>
            <StatusBar backgroundColor="#06bcee"/>
            <Navigation/>
        </AuthProvider>
    );
}
export default App;
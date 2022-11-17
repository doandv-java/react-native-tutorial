import React from "react";
import Navigation from "./src/components/Navigation";
import {AuthProvider} from "./src/context/AuthContent";

const App = () => {
    return (
        <AuthProvider>
            <Navigation/>
        </AuthProvider>
    );
}
export default App;
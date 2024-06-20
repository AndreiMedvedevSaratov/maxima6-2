import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store";
import { ClerkProvider } from '@clerk/clerk-react';

interface State {
    store: Store,
}

export const store = new Store();

export const Context = createContext<State>({
    store,
})

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const PUBLISHABLE_KEY = 'pk_test_ZnVubnktcGlyYW5oYS04OC5jbGVyay5hY2NvdW50cy5kZXYk';

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

ReactDOM.render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Context.Provider value={{
            store
        }}>
            <App />
        </Context.Provider>
    </ClerkProvider>,
    document.getElementById('root')
);


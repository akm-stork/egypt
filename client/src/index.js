import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './App.css'
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import './i18n'
import SplashScreen from './Pages/SplashScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
function RootComponent() {
  const [showApp, setShowApp] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowApp(true);
    }, 2000); // 3 seconds
  }, []);
  return showApp ? (
    <App />
  ) : (
    <SplashScreen />
  )
}
root.render(
      // <Suspense fallback={<SplashScreen />}>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
      // </Suspense>
);

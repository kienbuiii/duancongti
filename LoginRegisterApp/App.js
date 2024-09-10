import React from 'react';
import AppNavigation from './src/navigation/AppNavigation'; 
import 'intl-pluralrules'; // Import the polyfill
import 'react-native-get-random-values'; // Optional, if you use UUID or similar features
import i18n from './src/language/i18n';

const App = () => {
  return (
    <AppNavigation />
  );
};

export default App;
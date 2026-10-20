/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { OnBoarding } from './src/screens/onBoarding';
import colors from './src/theme/colors';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.backgroundColor,
        }}
      >
        <OnBoarding />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

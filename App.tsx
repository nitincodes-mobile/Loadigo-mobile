/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { OnBoarding } from './src/screens/onBoarding';
import colors from './src/theme/colors';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/localization/i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}

export default App;

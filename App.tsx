/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  async function onlyCheckPermissionIOS() {
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then(async (result) => {

        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            console.log('HASIL NYAAA:', result);
            requestPermissionIOS()
            // console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('HASIL NYAAA:', result);
            // console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch((error) => {
        // …
        console.log('Error CUk:', error);
        
      });
  }


  function requestPermissionIOS() {
    request(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then((result) => {
        console.log('requestPermissionIOS______:', result);

        // switch (result) {
        //   case RESULTS.UNAVAILABLE:
        //     console.log('This feature is not available (on this device / in this context)');
        //     break;
        //   case RESULTS.DENIED:
        //     console.log('The permission has not been requested / is denied but requestable');
        //     break;
        //   case RESULTS.LIMITED:
        //     console.log('The permission is limited: some actions are possible');
        //     break;
        //   case RESULTS.GRANTED:
        //     console.log('The permission is granted');
        //     break;
        //   case RESULTS.BLOCKED:
        //     console.log('The permission is denied and not requestable anymore');
        //     break;
        // }
      })
      .catch((error) => {
        // …
      });
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TouchableOpacity onPress={requestPermissionIOS} style={{ width: 300, height: 100, backgroundColor: 'white', borderColor: 'white' }}>
        <Text>
          Cek Permission Location
        </Text>
      </TouchableOpacity>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <TouchableOpacity>
          <Text>
            Cek Permission Location
          </Text>
        </TouchableOpacity>
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

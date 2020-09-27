import {Navigation} from 'react-native-navigation';
import SplashScreen from './SplashScreen';
import FirstScreen from './FirstScreen';
import ThirdScreen from './ThirdScreen';
import InfoScreen from './InfoScreen';
import CalApp from './CalApp';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';
import React from 'react';

const store = configureStore();

Navigation.registerComponent('MySplashScreen', () => SplashScreen);

Navigation.registerComponent('CalApp', () => CalApp);

Navigation.registerComponent(
  'FirstScreen',
  () => (props) => (
    <Provider store={store}>
      <FirstScreen {...props} />
    </Provider>
  ),
  () => FirstScreen,
);

Navigation.registerComponent(
  'ThirdScreen',
  () => (props) => (
    <Provider store={store}>
      <ThirdScreen {...props} />
    </Provider>
  ),
  () => ThirdScreen,
);

Navigation.registerComponent(
  'InfoScreen',
  () => (props) => (
    <Provider store={store}>
      <InfoScreen {...props} />
    </Provider>
  ),
  () => InfoScreen,
);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'MySplashScreen',
      },
      options: {
        topBar: {
          title: {text: 'Splash Screen'},
        },
      },
    },
  });
});

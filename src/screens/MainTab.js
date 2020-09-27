import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const MainTab = () => {
  Promise.all([
    Icon.getImageSource('create-outline', 30),
    Icon.getImageSource('menu-outline', 30),
    Icon.getImageSource('calculator-outline', 30),
  ]).then((icons) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          // children เก็บ screen
          children: [
            {
              // Screen 1
              stack: {
                children: [
                  {
                    component: {
                      name: 'FirstScreen',
                      options: {
                        topBar: {
                          title: {
                            text: '                        Welcome to My App',
                          },
                        },
                        bottomTab: {
                          icon: icons[0],
                          iconColor: 'skyblue',
                          selectedIconColor: 'blue',
                          // selectedTextColor: 'skyblue',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              // Screen 2
              stack: {
                children: [
                  {
                    component: {
                      name: 'ThirdScreen',
                      options: {
                        topBar: {
                          title: {
                            text: 'List of Info.',
                          },
                        },
                        bottomTab: {
                          icon: icons[1],
                          iconColor: 'skyblue',
                          selectedIconColor: 'blue',
                          // selectedTextColor: 'pink',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              // Screen 3
              stack: {
                children: [
                  {
                    component: {
                      name: 'CalApp',
                      options: {
                        topBar: {
                          title: {
                            text: 'Calculator',
                          },
                        },
                        bottomTab: {
                          icon: icons[2],
                          iconColor: 'skyblue',
                          selectedIconColor: 'blue',
                          // selectedTextColor: 'pink',
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  });
};

export default MainTab;

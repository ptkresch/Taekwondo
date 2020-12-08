import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeScreen: {
            screens: {
              Home: 'Home',
            },
          },
          ListScreen: {
            screens: {
              ListScreen: 'List Screen`',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

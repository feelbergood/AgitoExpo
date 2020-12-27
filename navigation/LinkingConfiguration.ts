import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHomeScreen: 'home',
            },
          },
          TabMenu: {
            screens: {
              TabMenuScreen: 'menu',
            },
          },
          TabRecipes: {
            screens: {
              TabRecipesScreen: 'recipes',
            },
          },
          TabProfile: {
            screens: {
              TabProfileScreen: 'profile',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

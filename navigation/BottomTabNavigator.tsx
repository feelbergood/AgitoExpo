import { Ionicons, Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabMenuScreen from '../screens/TabMenuScreen';
import TabRecipesScreen from '../screens/TabRecipesScreen';
import TabProfileScreen from '../screens/TabProfileScreen';

import { BottomTabParamList, TabHomeParamList, TabMenuParamList,
        TabRecipesParamList, TabProfileParamList } from '../types';

import { Hub } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  const [showTab, setShowTab] = React.useState(true);

  Hub.listen('auth', (data) => {
    const event = data.payload.event;
    console.log('event:', event);
    if (event === "signIn") {
      console.log('user signed in...');
      setShowTab(true);
    } else if (event === "signUp") {
      console.log('user signed up...');
      setShowTab(true);
    } else if (event === "signOut") {
      console.log('user signed out...');
      setShowTab(false);
    }
  });

  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="more" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={TabMenuNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="menu" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Recipes"
        component={TabRecipesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="recipes" color={color} />,
        }}
      />
      {showTab ? (
        <BottomTab.Screen
          name="Profile"
          component={TabProfileNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="profile" color={color} />,
          }}
        />
      ) : null}
    </BottomTab.Navigator>
  );
}

export default withAuthenticator(BottomTabNavigator);

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  switch (props.name) {
    case "more":
      return <Feather name="more-horizontal" size={30} color={props.color} />
    case "menu":
      return <AntDesign name="calendar" size={30} color={props.color} />
    case "recipes":
      return <Ionicons name="md-book-outline" size={30} color={props.color} />
    case "profile":
      return <AntDesign name="profile" size={30} color={props.color} />
    default:
      return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={{ headerTitle: 'TITLE' }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabMenuStack = createStackNavigator<TabMenuParamList>();

function TabMenuNavigator() {
  return (
    <TabMenuStack.Navigator>
      <TabMenuStack.Screen
        name="TabMenuScreen"
        component={TabMenuScreen}
        options={{ headerTitle: 'TITLE' }}
      />
    </TabMenuStack.Navigator>
  );
}

const TabRecipesStack = createStackNavigator<TabRecipesParamList>();

function TabRecipesNavigator() {
  return (
    <TabRecipesStack.Navigator>
      <TabRecipesStack.Screen
        name="TabRecipesScreen"
        component={TabRecipesScreen}
        options={{ headerTitle: 'TITLE' }}
      />
    </TabRecipesStack.Navigator>
  );
}

const TabProfileStack = createStackNavigator<TabProfileParamList>();

function TabProfileNavigator() {
  return (
    <TabProfileStack.Navigator>
      <TabProfileStack.Screen
        name="TabProfileScreen"
        component={TabProfileScreen}
        options={{ headerTitle: 'TITLE' }}
      />
    </TabProfileStack.Navigator>
  );
}

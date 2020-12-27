import { Auth } from 'aws-amplify';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { TabHomeParamList } from '../types';

export default function TabHomeScreen({
  navigation,
}: StackScreenProps<TabHomeParamList, 'TabHomeScreen'>) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.body}>We provide meal kit customized for you!</Text>
      <View style={styles.fixToText}>
        {/* <Button
          title="Sign in"
          onPress={() => navigation.navigate("SignIn")}
        />
        <Button
          title="Join Now"
          onPress={() => navigation.navigate("SignUp")}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    fontSize: 15,
  },
});

import React from 'react';
import {StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import normalize from 'react-native-normalize';
import theme from '../theme';

const BottomNavBar = () => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity>
        <Entypo name="home" size={20} style={styles.Icons} />
        <Text style={styles.bottomNavText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="search" size={20} style={styles.Icons} />
        <Text style={styles.bottomNavText}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="widgets" size={20} style={styles.Icons} />
        <Text style={styles.bottomNavText}>Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="star" size={20} style={styles.Icons} />
        <Text style={styles.bottomNavText}>Premium</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="person" size={20} style={styles.Icons} />
        <Text style={styles.bottomNavText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.colors.light,
    paddingVertical: theme.spacing.small,
    borderTopRightRadius: normalize(10),
    borderTopLeftRadius: normalize(10),
  },
  bottomNavText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.dark,
  },
  Icons: {
    alignSelf: 'center',
    color: theme.colors.dark
  },
});

export default BottomNavBar;

import React from 'react';
import TopNavBar from './TopNav/Nav';
import BottomNavBar from './TabBar/Tab';
import BoxWithGradientAndButton from './add/sub';
import ScrollingBox from './service/serviceinfo';
import BoxGrid from './taskbox/task';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TopNavBar /> 
      <BoxWithGradientAndButton />
      <ScrollingBox />
      <BoxGrid />
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D2B55',
  },
});

export default App;

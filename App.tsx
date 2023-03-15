import React from 'react';
import TopNavBar from './TopNav/Nav';
import BoxWithGradientAndButton from './add/sub';
import ScrollingBox from './service/serviceinfo';
import BoxGrid from './taskbox/task';
import BottomNavBar from './TabBar/Tab';
import {StyleSheet, View} from 'react-native';
import theme from './theme';

const App = () => {
  return (
    <View style={styles.container}>
      <TopNavBar />
      <View style={styles.content}>
        <BoxWithGradientAndButton />
        <ScrollingBox />
        <BoxGrid />
      </View>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.tertiary,
  },
  content:{
    paddingHorizontal :16,
    flex:1,
    flexDirection:"column",
  }
});

export default App;

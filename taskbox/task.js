import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';

const boxinfo = require('../boxinfo.json');
const numColumns = 3;
// const ITEM_WIDTH =normalize(100);
// const ITEM_HEIGHT =normalize(98);

const Box = ({ title }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxTitle}>{title}</Text>
    </View>
  );
};

const BoxGrid = () => {
  const renderItem = ({ item }) => {
    return <Box title={item.title} />;
  };

  return (
    <FlatList
      data={boxinfo.DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
		// justifyContent: 'center',
		alignSelf: 'center',
		width: normalize(345),
		height:normalize(300),
  },
  columnWrapper: {
    justifyContent: 'flex-start'
  },
  box: {
    // width: ITEM_WIDTH,
    // height: ITEM_HEIGHT,
    // backgroundColor: '#eee',
    // borderRadius: 8,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin:normalize(10),
		width:normalize(110),
    height:normalize(94),
    borderWidth:normalize(1),
    borderColor: '#000',
    justifyContent: 'center',
    backgroundColor: '#231732',
    borderRadius:normalize(10),
    alignItems: 'center',
    margin:normalize(5),
  },
  boxTitle: {
    fontSize:normalize(18),
    fontWeight:500,
		color: '#FFF',
		top: normalize(20)
  },
});

export default BoxGrid;

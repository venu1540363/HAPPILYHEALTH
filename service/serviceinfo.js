import React from 'react';
import props from '../info.json';
import { Image, StyleSheet } from 'react-native';
import { View, Text, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';

const ScrollingBox = () => {
  return (
    <View style={styles.Scrcontainer}>
       <ScrollView horizontal>
        <View style={styles.content}>
    {props.scrolling.length !== 0 ?   props.scrolling.map( each => {
      return  <View style={styles.item}>
         <Image style={styles.image} source={require('../images/doc.png')}></Image>
        <Text style={styles.name}>{each.name}</Text> 
        </View>
    })
    :null
  }
        </View>
      </ScrollView>
      <View
        style={{
          borderBottomColor: '#684B8E',
          borderBottomWidth: 2,
          paddingTop: 20,
          marginBottom: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
	Scrcontainer: {
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 15,
  },
  content: {
    flexDirection: 'row', // display items in a row
  },
  item: {
    marginRight: 8,
    fontSize: 16,
    // borderWidth: 2,
    height: 152,
    width: 110,
    borderRadius: 10,
    color: '#FFF',
    backgroundColor: '#231732',
    textAlign: 'center',
    paddingTop: 50,
    overflow: 'hidden',
  },
  image: {
    // height: 50,
    // bottom: 40,
    // left: 20,
    width: normalize(10),
    justifyContent: 'center',
    position: 'absolute',
  },
  name: {
    color: '#FFF',
    top: 30,
    fontWeight:500,
  },
});

export default ScrollingBox;
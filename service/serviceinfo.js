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
        <Text style={styles.name}>
          <Text style={{fontWeight: 700,
           fontSize:normalize(10),
           position: 'absolute'
        }}>{each.title}</Text> 
          </Text> 
          <Text style= {{color: '#FFF', fontSize:normalize(9), top:normalize(30), 
          left:normalize(1),
          fontWeight:normalize(300),
          textAlign: 'auto',
          padding:normalize(6),
        }}>{each.name}</Text>
        </View>
    })
    :null
  }
        </View>
      </ScrollView>
      <View
        style={{
          borderBottomColor: '#684B8E',
          borderBottomWidth:2,
          // paddingVertical: normalize(10)
          // paddingTop:normalize(10),
          // marginBottom:normalize(6),
          marginVertical:normalize(15),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
	Scrcontainer: {
    width:normalize(340),
    // justifyContent: 'center',
    alignSelf: 'center',
    paddingTop:normalize(15),
  },
  content: {
    flexDirection: 'row', // display items in a row
  },
  item: {
    marginRight:normalize(8),
    fontSize:normalize(16),
    // borderWidth: 2,
    height:normalize(158),
    width:normalize(110),
    borderRadius:normalize(10),
    color: '#FFF',
    backgroundColor: '#231732',
    textAlign: 'center',
    paddingTop:normalize(50),
    overflow: 'hidden',
  },
  image: {
    // height: 50,
    // bottom: 40,
    // left: 20,
    width: normalize(112),
    justifyContent: 'center',
    position: 'absolute',
  },
  name: {
    color: '#FFF',
    top:normalize(30),
    // fontWeight:500,
    alignSelf: 'center'
  },
});

export default ScrollingBox;
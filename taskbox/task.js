import React from "react";
import * as data from '../boxinfo.json';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';


const BoxGrid = () => {
	const BoxRow = ({textarray}) => {
		if (textarray.length == 3) {
			return (
				<View style={styles.row}>
					{textarray.map(value => (
						<Box text={value} />
					))}
				</View>
			);
		} else {
			return (
				<View
					style={{
						flex: 1,
						alignSelf: 'flex-start',
						justifyContent: 'flex-start',
						flexDirection: 'row',
						left: 15,
					}}>
					{textarray.map(value => (
						<Box text={value} />
					))}
				</View>
			);
		}
	};
	
	//react child component to dynamically generate a box
	const Box = ({text}) => {
		return (
				//include image logic here
			<View style={styles.box}>
				<Text style={styles.boxText}>{text}</Text>
			</View>
		);
	};
	
	function get_split_array(arr) {
		let len = arr.length;
		let resarr = [];
		let counter = 0;
		let subarr = [];
	
		for (let i = 0; i < len; i++) {
			if (counter === 3) {
				counter = 0;
				resarr.push(subarr);
				subarr = [];
			}
			if (i === len - 1) {
				resarr.push(subarr);
			}
			subarr.push(data.text[i]);
			counter++;
		}
		return resarr;
	}

  const resarr = get_split_array(data.text);
  return (
    <View style={styles.containerbox}>
      {resarr.map(subarr => (
        <BoxRow textarray={subarr} />
      ))}
    </View>
  );
};

styles = StyleSheet.create({
	containerbox: {
    flex: 0.85,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 110,
    height: 94,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    backgroundColor: '#231732',
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  emptyBox: {
    width: 110,
    height: 100,
    margin: 5,
  },
});

export default BoxGrid;
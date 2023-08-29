import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <View style={{ marginLeft: 12 }}>
        <TouchableOpacity
          style={{
            flexWrap: 'wrap',
          }}>
          <Text style={{ backgroundColor: 'rgb(181,125,252)', color: 'white', padding: 3, borderRadius: 3 }}>
            {result.title}
          </Text>
        </TouchableOpacity>

        <Text style={styles.textStyle}>{result.date}</Text>

        <Text style={styles.name}>{result.event}</Text>

        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name="location-pin" size={16} color="#83839a" />
          <Text style={styles.textStyle}>{result.place}</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <FontAwesome name="user" size={16} color='#83839a' />
          <Text style={[styles.textStyle, { marginLeft: 8 }]}>{result.slot}</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    height: 140,
    padding: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 2
  },
  textStyle: {
    color: '#83839a',
  }
});

export default ResultsDetail;

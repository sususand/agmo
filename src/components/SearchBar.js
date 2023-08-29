import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search activities and events"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      <Ionicons name="search-sharp" style={styles.iconStyle} color='gray' />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 32
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 15,
  },
  iconStyle: {
    fontSize: 32,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;

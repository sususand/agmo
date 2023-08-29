import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <View style={{ backgroundColor: 'rgb(348,169,81)' }}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </View>

      <ImageBackground
        style={{ backgroundColor: 'rgb(160,202,253)', resizeMode: 'repeat', flex: 1 }}
        source={require('../../assets/element_curve_blue.png')} >
        <ScrollView>
          <ResultsList
            results={results} />
        </ScrollView>
      </ImageBackground>

    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

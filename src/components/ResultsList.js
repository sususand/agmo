import React from "react";
import {
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ results }) => {
  console.log("result lists : ", results);
  if (!results.length) {
    return null;
  }

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default ResultsList;

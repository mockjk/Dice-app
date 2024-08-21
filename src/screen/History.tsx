import React, { useContext } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryContext from '../context/context';

type HistoricoItem = {
    numbers: number;
    sum: number;
    dice: string;
  };

// type HistoricoScreenRouteProp = RouteProp<{ History: { history: HistoricoItem[] } }, 'History'>;


export default function History() {
  // const route = useRoute<HistoricoScreenRouteProp>();
  // const { history } = route.params;

  const historyContext = useContext(HistoryContext);
  //@ts-ignore
  const { history, setHistory } = historyContext;

  const renderItem = ({ item }: { item: HistoricoItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>Números sorteados: {item.numbers}</Text>
      <Text style={styles.text}>Soma: {item.sum}</Text>
      <Text style={styles.text}>Dado: {item.dice}</Text>
    </View>
  );

  return (
    <SafeAreaView>
        <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});


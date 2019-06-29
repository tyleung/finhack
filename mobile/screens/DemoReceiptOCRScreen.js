import React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
const { height, width } = Dimensions.get('window');
export const w = percent => (width * percent) / 100;
export const h = percent => (height * percent) / 100;
export const totalSize = num =>
  (Math.sqrt(height * height + width * width) * num) / 100;
import { DataTable } from 'react-native-paper';

export default class DemoReceiptOCRScreen extends React.Component {
  data = [
    { item: 'Tofu', cfScore: 2 },
    { item: 'Potatoes', cfScore: 2.9 },
    { item: 'Tuna', cfScore: 6.1 },
    { item: 'Turkey', cfScore: 10.9 },
    { item: 'Beef', cfScore: 27 },
    { item: 'Tomato', cfScore: 1.1 },
    { item: 'Beans', cfScore: 2 },
    { item: 'Salmon', cfScore: 11.9 },
    { item: 'Lamb', cfScore: 39.2 },
    { item: 'Coffee', cfScore: 2.71 },
    { item: 'Ice Cream', cfScore: 2.03 },
    { item: 'Red Wine', cfScore: 0.63 }
  ];

  render() {
    const { navigate } = this.props.navigation;
    return (
      <DataTable style={styles.table}>
        <DataTable.Header style={styles.header}>
          <DataTable.Title>Item</DataTable.Title>
          <DataTable.Title numeric>CF Score</DataTable.Title>
        </DataTable.Header>
        <ScrollView>
          {this.data.map((d, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{d.item}</DataTable.Cell>
                <DataTable.Cell numeric>{d.cfScore}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </ScrollView>
      </DataTable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center'
  },
  table: {
    display: 'flex',
    flex: 1
  },
  globalscores: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: '#ff8fa0',
    fontWeight: '600'
  }
});

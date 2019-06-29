import React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native';
const { height, width } = Dimensions.get('window');
export const w = percent => (width * percent) / 100;
export const h = percent => (height * percent) / 100;
export const totalSize = num =>
  (Math.sqrt(height * height + width * width) * num) / 100;
import { DataTable } from 'react-native-paper';

export default class RankScreen extends React.Component {
  data = [
    { name: 'Tom', ranking: 1, cfScore: 204.0745684 },
    { name: 'Leo', ranking: 2, cfScore: 214.0214173 },
    { name: 'Stefan', ranking: 3, cfScore: 227.1891891 },
    { name: 'Jackie', ranking: 4, cfScore: 245.8595844 },
    { name: 'Mathilda', ranking: 5, cfScore: 254.0203925 },
    { name: 'Daisy', ranking: 6, cfScore: 259.5493533 },
    { name: 'Shawn', ranking: 7, cfScore: 267.5742186 },
    { name: 'Marcus', ranking: 8, cfScore: 292.4883697 }
    //{ name: 'Paul', ranking: 9, cfScore: 317.2941827 },
    //{ name: 'Vince	', ranking: 10, cfScore: 326.5728702 }
  ];

  handleViewGlobal = () => {
    Linking.openURL('http://host.html-5.me/v/5d178304037de?i=1').catch(err =>
      console.error('An error occurred', err)
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <DataTable style={styles.table}>
          <DataTable.Header style={styles.header}>
            <DataTable.Title>Ranking</DataTable.Title>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>CF Score</DataTable.Title>
          </DataTable.Header>

          {this.data.map(d => {
            return (
              <DataTable.Row key={d.ranking}>
                <DataTable.Cell>{d.ranking}</DataTable.Cell>
                <DataTable.Cell>{d.name}</DataTable.Cell>
                <DataTable.Cell numeric>{d.cfScore}</DataTable.Cell>
              </DataTable.Row>
            );
          })}

          <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={page => {
              console.log(page);
            }}
            label="1-2 of 6"
          />
        </DataTable>
        <TouchableOpacity
          onPress={this.handleViewGlobal}
          style={styles.globalscores}
          activeOpacity={0.6}
        >
          <Text style={styles.text}>View Local Statistics</Text>
        </TouchableOpacity>
      </View>
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
    display: 'flex'
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

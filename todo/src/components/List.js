import { FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { GRAY } from '../colors';
import ListItem from './ListItem';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data }) => {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem item={item} />}
        windowSize={5}
        ItemSeparatorComponent={Separator}
        // ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
        ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
      />
    </>
  );
};
List.propTypes = {
  data: PropTypes.array.isRequired,
};
const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
export default List;

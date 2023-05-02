import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import PropsTypes from 'prop-types';
import { GRAY, PRIMARY, WHITE } from '../colors';

const Button = ({ title, onPress, disabled, isLoading }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: PRIMARY.DARK },
        disabled && { backgroundColor: PRIMARY.LIGHT },
      ]}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator size={'small'} color={GRAY.DEFAULT} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};

Button.PropsTypes = {
  title: PropsTypes.string.isRequired,
  onPress: PropsTypes.func.isRequired,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY.DEFAULT,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
  },
});
export default Button;

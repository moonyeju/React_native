import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import PropsTypes from 'prop-types';
import { DANGER, GRAY, PRIMARY, WHITE } from '../colors';
export const ButtonTypes = {
  PRIMARY: 'PRIMARY',
  DANGER: 'DANGER',
};
const Button = ({ title, onPress, disabled, isLoading, buttonType }) => {
  const colors = { PRIMARY, DANGER };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: colors[buttonType].DEFAULT },
        pressed && { backgroundColor: colors[buttonType].DARK },
        disabled && { backgroundColor: colors[buttonType].LIGHT },
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
Button.defaultProps = {
  buttonType: ButtonTypes.PRIMARY,
};

Button.PropsTypes = {
  title: PropsTypes.string.isRequired,
  onPress: PropsTypes.func.isRequired,
  disabled: PropsTypes.bool,
  isLoading: PropsTypes.bool,
  buttonType: PropsTypes.oneOf(Object.values(ButtonTypes)),
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

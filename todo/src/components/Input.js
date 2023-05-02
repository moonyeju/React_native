import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropsTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY, WHITE } from '../colors';
import { forwardRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};
export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};
export const IconNames = {
  EMAIL: 'email',
  PASSWORD: 'lock',
};
// const Component = ();

const Input = forwardRef(
  (
    {
      title,
      placeholder,
      value,
      iconName,
      //   keyboardType,
      //   returnKeyType,
      //   secureTextEntry,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocoused] = useState(false);
    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            value && styles.hasValueTitle,
            isFocused && styles.focusedTitle,
          ]}
        >
          {title}
        </Text>
        <View>
          <TextInput
            ref={ref}
            {...props} //덮어써지지 않도록 props는 맨앞에 넣어야함.
            value={value}
            style={[
              styles.input, //default
              value && styles.hasValueInput, //value
              isFocused && styles.focusedInput, //value + focus
            ]} //조건이 많은 style일수록 뒤쪽에 배치
            placeholder={placeholder ?? title}
            placeholderTextColor={GRAY.DEFAULT}
            autoCapitalize={'none'}
            autoCorrect={false}
            // keyboardType={keyboardType}
            // returnKeyType={returnKeyType}
            // secureTextEntry={secureTextEntry}
            textContentType={'none'}
            keyboardAppearance={'light'}
            onBlur={() => setIsFocoused(false)}
            onFocus={() => setIsFocoused(true)}
          />
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color={(() => {
                switch (true) {
                  case isFocused:
                    return PRIMARY.DEFAULT;
                  case !!value:
                    return BLACK;
                  default:
                    return GRAY.DEFAULT;
                }
              })()}
            />
          </View>
        </View>
      </View>
    );
  }
);
Input.displayName = 'Input';
Input.defaultProps = {
  keyboardType: KeyboardTypes.DEFAULT,
  returnKeyType: ReturnKeyTypes.DONE,
};
Input.PropsTypes = {
  title: PropsTypes.string,
  placeholder: PropsTypes.string,
  value: PropsTypes.string,
  iconName: PropsTypes.oneOf(Object.values(IconNames)),
  //   keyboardType: PropsTypes.oneOf(Object.values(KeyboardTypes)),
  //   returnKeyType: PropsTypes.oneOf(Object.values(ReturnKeyTypes)),
  //   secureTextEntry: PropsTypes.bool,
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GRAY.DEFAULT,
    paddingHorizontal: 20,
    height: 42,
    paddingLeft: 40,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  hasValueInput: {
    borderColor: BLACK,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});
export default Input;

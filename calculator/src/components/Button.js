import {
  Pressable,
  Text,
  StyleSheet,
  //   TouchableHighlight,
  //   TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export const ButtonTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR',
};
const Colors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#f59e0b', '#b45309'],
};

const Button = ({ title, onPress, buttonStyle, buttonType }) => {
  return (
    <Pressable
      // 기본적으로 아무 효과도 없음
      onPress={onPress}
      style={({ pressed }) => [
        // console.log(data); //pressed 객체 전달
        //반드시 리턴 해야함
        {
          backgroundColor: Colors[buttonType][0],
        },
        pressed && {
          backgroundColor: Colors[buttonType][1],
        },
        buttonStyle,
        buttonType,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
    // onPressIn -> 버튼을 눌렀을 때
    // onPressOut -> 버튼을 누른 다음 뗐을 때
    // onPress -> 버튼을 누른 다음 떼고난 다음
    // onLongPress -> 버튼을 길게 눌렀을 때 동작 (0.5sec) -> 여기서 손을 떼면 다시 -> onPressOut
    // // <TouchableHighlight
    //   onPress={() => console.log('opacit')}
    //   style={{ backgroundColor: 'pink' }}
    //   underlayColor={'skyblue'}
    // >
    //   <Text>{title}</Text>
    // </TouchableHighlight>
    // <TouchableOpacity
    //   onPress={() => console.log('opacit')}
    //   style={{ backgroundColor: 'pink' }}
    // >
    //   <Text>{title}</Text>
    // </TouchableOpacity>
  );
};
Button.defaultProps = {
  // title: 'Default',
  buttonType: ButtonTypes.NUMBER,
};
Button.PropTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#ffffff',
  },
});
export default Button;

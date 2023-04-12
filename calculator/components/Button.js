import {
  Pressable,
  Text,
  //   TouchableHighlight,
  //   TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <Pressable
      // 기본적으로 아무 효과도 없음
      onPress={() => console.log('opacit')}
      style={({ pressed }) => [
        // console.log(data); //pressed 객체 전달
        //반드시 리턴 해야함
        { backgroundColor: 'pink' },
        pressed && { backgroundColor: 'skyblue', opacity: 0.3 },
      ]}
    >
      <Text>{title}</Text>
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
  title: 'Default',
};
Button.PropTypes = {
  title: PropTypes.string.isRequired,
};
export default Button;

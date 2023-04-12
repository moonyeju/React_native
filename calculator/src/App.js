import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.txt}>calculator app</Text>
        <Button
          title="button"
          color={'pink'}
          onPress={() => console.log('click')}
        />
        {/* 버튼 생성하면 ios로 보면 배경없는 파란색 글씨로 button
        안드로이드로 보면 배경파랑인 하얀글씨 Button 첫글자 대문자로
        title은 꼭 넣어야함. onpress는 아님*/}
        <Button />
        {/* title지정 안하고 defaultProps지정해두면 지정한 값 뜸. */}
        {/* TouchableHighlight -> 터치했을때 배경색 바뀜
        TouchableOpacity -> 터치했을때 투명도 조절됨
        TouchableWithoutFeedback -> 어떤 효과도 없이 터치만 됨
        TouchableNativeFeedback -> 안드로이드에서만 사용가능 버튼클릭시 물결효과 애니메이션나타남.
        <StatusBar style="auto" /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30,
    fontWeight: '700',
    color: 'pink',
  },
});

import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';
//hook 사용규칙
//1. 함수 컴포넌트와 커스텀 컴포넌트에서만 사용해야 함
//2. 함수 최상위에서만 사용해야 함 (if문이나 함수 안에서 사용 X 왜? 리랜더링 하면 또 상태가 바뀔 수 있음.그래서 이걸 eslint로 미리 방지가능)

export default function App() {
  // let result = 0;
  //const는 변경 불가능 그래서 let씀
  const [result, setResult] = useState(0);
  return (
    <>
      <View style={styles.container}>
        {/* <Text style={styles.txt}>calculator app</Text> */}
        <Text>{result}</Text>
        <Button
          title="+"
          onPress={() => {
            setResult(result + 1); //비동기적 이거 두개 적으면 리랜더링 전이라서 결과는 1만 더해짐
            // setResult((prev) => { //이전값의 영향을 받아 업데이트할 땐 함수형 업데이트해야함
            //   return prev + 1; //이거쓰면 2가 올라감 //return 필수
            // });
            //이때 부모가 리랜더링하면 자식컴포넌트인 button.js도 리랜더링됨.
          }}
          buttonStyle={{ width: 100, height: 100 }}
          buttonType={ButtonTypes.OPERATOR}
        />
        <Button
          title="-"
          onPress={() => {
            setResult(result - 1);
          }}
          buttonStyle={{ width: 100, height: 100 }}
          buttonType={ButtonTypes.OPERATOR}
        />
        {/* <Button
          title="button"
          color={'pink'}
          onPress={() => console.log('click')}
        /> */}
        {/* 버튼 생성하면 ios로 보면 배경없는 파란색 글씨로 button
        안드로이드로 보면 배경파랑인 하얀글씨 Button 첫글자 대문자로
        title은 꼭 넣어야함. onpress는 아님*/}
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

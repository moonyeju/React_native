import { StatusBar } from 'expo-status-bar';
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
        <StatusBar style="auto" />
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

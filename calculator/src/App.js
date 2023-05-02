//시작할 때 expo start 같은 와이파이 연결되있어야함.
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
//hook 사용규칙
//1. 함수 컴포넌트와 커스텀 컴포넌트에서만 사용해야 함
//2. 함수 최상위에서만 사용해야 함 (if문이나 함수 안에서 사용 X 왜? 리랜더링 하면 또 상태가 바뀔 수 있음.그래서 이걸 eslint로 미리 방지가능)

const Operators = {
  CLEAR: 'C',
  MINUS: '-',
  PLUS: '+',
  EQUAL: '=',
  DELETE: 'Del',
};

export default function App() {
  //const는 변경 불가능 그래서 let씀
  const [result, setResult] = useState(0);
  const [formula, setFormula] = useState([]);
  const [num, setNum] = useState(0);
  const [now, setNow] = useState(0);

  const calculate = () => {
    let calculatedNumber = 0;
    let operator = '';
    formula.forEach((value) => {
      if ([Operators.MINUS, Operators.PLUS].includes(value)) {
        operator = value;
      } else {
        if (operator === Operators.PLUS) {
          calculatedNumber += value;
        } else if (operator === Operators.MINUS) {
          calculatedNumber -= value;
        } else {
          calculatedNumber = value;
        }
      }
    });
    setResult(calculatedNumber);
    setFormula([]);
  };
  const onPressNumber = (num) => {
    const last = formula.at(-1);

    if (isNaN(last)) {
      setResult(num);
      setFormula((prev) => [...prev, num]);
    } else {
      const newNumber = (last ?? 0) * 10 + num;
      setResult(newNumber);
      setFormula((prev) => {
        prev.pop();
        return [...prev, newNumber];
      });
    }
  };

  // const onPressNumber = (num) => {
  //   const last = formula.at(-1); //at사용할때, 음수 적으면 뒤에서 부터 몇번째 값을 가져옴.
  //   // -> 안드로이드에서는 Array.at()이 작동하지 않는다.
  //   // -> 코드수정
  //   // const last = formula[formula.length-1];
  //   if (isNaN(last)) {
  //     setResult(num);
  //     setFormula((prev) => [...prev, num]);
  //   } else {
  //     const newNumber = (last ?? 0) * 10 + num;
  //     setResult(newNumber);
  //     setFormula((prev) => {
  //       prev.pop();
  //       return [...prev, newNumber];
  //     });
  //   }
  // };
  const onPressOperator = (operator) => {
    const last = formula.at(-1);
    switch (operator) {
      case Operators.CLEAR:
        setResult(0);
        setFormula([]);
        break;
      case Operators.EQUAL:
        calculate();
        break;
      case Operators.DELETE:
        if ([Operators.MINUS, Operators.PLUS].includes(last)) {
          setFormula((prev) => [...prev, operator]);
        } else {
          setFormula((prev) => {
            setNow((prev - num) / 10);
            setResult(now);
            prev.pop();
            return [...prev, now];
          });
        }

        break;
      default: {
        //+,-
        if ([Operators.MINUS, Operators.PLUS].includes(last)) {
          setFormula((prev) => {
            prev.pop();
            return [...prev, operator];
          });
        } else {
          setFormula((prev) => [...prev, operator]);
        }
        break;
      }
    }
  };
  const width = (useWindowDimensions().width - 5) / 4; //버튼사이사이 1씩 띄우기 위해서 5 빼줌
  return (
    <>
      <View style={styles.container}>
        {/* <StatusBar barStyle={'light-content'} backgroundColor={'red'} /> */}
        {/* -> react-native 자체제공 statusBar */}
        {/* <Text style={styles.txt}>calculator app</Text> */}
        <StatusBar style="light" />
        {/* -> expo statusBar */}
        <View style={styles.resultContainer}>
          {/* 결과 */}
          <Text style={styles.result}>
            {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          {/* 버튼 */}
          {/* <Text>button</Text> */}

          <View style={styles.leftPad}>
            <View style={styles.number}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                return (
                  <Button
                    key={num} //key지정 안하면 warning발생. 또한 인덱스로 지정하는 것은 권장하기 않음. 정 없을때만!! 근데 우리는 num으로 넣어줄거임.
                    title={num.toString()} //string으로 돌려줘야함. warning발생
                    onPress={() => {
                      setNum(num);
                      onPressNumber(num);
                    }}
                    buttonStyle={{ width, height: width, marginTop: 1 }}
                  />
                );
              })}
            </View>
            <View style={styles.bottom}>
              <Button
                title="0"
                onPress={() => {
                  onPressNumber(0);
                }}
                buttonStyle={{
                  width: width,
                  height: width,
                  marginBottom: 1,
                }}
              />
              <Button
                title={Operators.MINUS}
                onPress={() => {
                  onPressOperator(Operators.MINUS);
                }}
                buttonStyle={{ width, height: width, marginBottom: 1 }}
                buttonType={ButtonTypes.OPERATOR}
              />
              <Button
                title={Operators.PLUS}
                onPress={() => {
                  onPressOperator(Operators.PLUS);
                }}
                buttonStyle={{ width, height: width, marginBottom: 1 }}
                buttonType={ButtonTypes.OPERATOR}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.operator}>
              <Button
                title={Operators.CLEAR}
                onPress={() => {
                  onPressOperator(Operators.CLEAR);
                }}
                buttonStyle={{ width, height: width, marginBottom: 1 }}
                buttonType={ButtonTypes.OPERATOR}
              />
              <Button
                title={Operators.DELETE}
                onPress={() => {
                  onPressOperator(Operators.DELETE);
                }}
                buttonStyle={{ width, height: width, marginBottom: 1 }}
                buttonType={ButtonTypes.OPERATOR}
              />
              <Button
                title={Operators.EQUAL}
                onPress={() => {
                  onPressOperator(Operators.EQUAL);
                }}
                buttonStyle={{ width, height: width * 2, marginBottom: 1 }}
                buttonType={ButtonTypes.OPERATOR}
              />
            </View>
          </View>
        </View>
        {/* <Button
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
        /> */}
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
  //flex는 네가지 값 설정가능 -> column, column-reverse, row, row-reverse
  //-> 방향을 바꿀 수 있음.
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    justifyContent: 'space-evenly',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
    paddingBottom: 30,
    paddingRight: 30,
  },

  leftPad: {
    width: '75%',
  },
  number: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  operator: {},
  // txt: {
  //   fontSize: 30,
  //   fontWeight: '700',
  //   color: 'pink',
  // },
});

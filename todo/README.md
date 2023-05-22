## TODO App

1. ppi
   Pixel Per Inch
   ppi가 높으면 더 선명하게 볼 수 있음.
   왜? 같은 공간에 더 많은 픽셀로 표현가능.

2. dp
   Density-independent Pixels
   React-native에서 사용하는 단위. 표기하지 않을뿐 사용은 함.
   화면의 밀도와 상관없이 일정한 크기를 지정할 수 있는 단위

#

이미지파일이 test, test@2x, test@3x등이 존재할 경우 자동으로 크기에 따라 사용

# resizeMode

cover : 원본 비율 유지, 이미지가 영역 전체를 채우도록 확대  
 contain : 원본 비율 유지, 이미지가 영역 내에 보이는 선에서 확대  
 stretch : 원본 비율 무시, 이미지가 영역 전체를 채우도록 확대  
 repeat : 영역의 크기가 이미지보다 크면, 바둑판 배열로 이미지 반복  
 center : 이미지 중앙 정렬 (이미지보다 영역이 커도 이미지 크기 조절하지 않음. 이미지보다 영역이 작으면 이미지 크기 조절)

#

placeholder={placeholder ?? title}  
-> placeholder 지정 안 했을때만 title로  
placeholder={placeholder || title}  
-> placeholder가 공백일 때도 title로

#

autoCapitalize={'none'}  
-> 특정문자를 자동으로 대문자로 변경. none일때, 자동변경 X  
autoCorrect={false}  
-> 자동으로 틀린 글자 수정. false일때, 수정 X  
keyboardType={'email-address'}  
-> 아래에 이메일용으로 @ 와 .com을 띄워주는 키보드로 변경  
returnKeyType : 리턴 버튼 (확인 버튼) 변경  
-> done, go, next, search, send
textContentType={'none'}  
-> 사용자에게 필요한 정보를 제공 (이메일 추천 안받기 위해 설정)  
secureTextEntry : 텍스트를 특수 문자로 변경 (값을 전달할 때, 키만 전달하면 true로)  
keyboardAppearance={'light'}
-> 키보드 색상 지정

# KeyboardAvoidingView 컴포넌트

behavior : 아이폰에서 키보드가 생기면서 입력란이 가려지는 문제 해결을 위해 사용  
-> height : 높이를 조절  
-> padding : 패딩을 조절  
-> position : 위치를 조절, contentContainerStyle로 스타일 설정 필요. 그리고 위 두가지와 달리 현재 입력란이 아닌 상단부분이 가려져 안보일 수 있음.

Platform.OS==='ios' ? ** : **  
Platform.select({ios:** , android:**})  
-> 이와 같이 일부 환경에서만 동작하도록 설정 가능

# Pressable

onPress={()=> Keyboard.dismiss()}  
-> 키보드 이외의 다른 영역에 클릭시 키보드 사라짐.

#

onFocus : 포커스를 얻을 때 호출  
onBlur : 포커스를 잃을 때 호출

# Hook

useEffect(() => {
console.log(`alway: ${email} ${password}`);
}); //랜더링 할 때 마다 호출
useEffect(() => {
console.log(`mount: ${email} ${password}`);
}, []); //처음 마운트 될 때만 호출
useEffect(() => {
console.log(`email: ${email} ${password}`);
}, [email]); //특정 값이 변경되었을 때 호출
//순서가 중요 순서에 따라 호출. 그래서! 순서때문에 값이 바뀔 수 있어 주의필요.

#

         {
            text: 'default',
            onPress: () => console.log('default'),
            style: 'default', //기본
          },
          {
            text: 'cancel',
            onPress: () => console.log('cancel'),
            style: 'cancel', //ios에서 두껍게
          },
          {
            text: 'done',
            onPress: () => console.log('done'),
            style: 'destructive', //ios에서 빨간색
          },

# native-stack 첫번째 화면 지정 방법

1. Screen 의 순서
2. Navigator initialRouteName="name" 를 통해 지정

# navigation

.push() : 같은 화면이어도, 화면을 계속 쌓으면서 이동  
.navigate() : 같은 화면이면, 추가로 화면을 쌓지 않음

# 화면 옵션 설정

<img width="272" alt="image" src="https://user-images.githubusercontent.com/97781412/236867563-a334d27f-c87a-405e-a325-f1b6a1d40828.png">

#

title: "..." -> 헤더 타이틀  
headerTitle: ()=>{...} 헤더 타이틀 컴포넌트  
headerTitleAlign : 'left' | 'center' -> 헤더 타이틀 정렬 (안드로이드)  
headerTintColor : '...' 헤더 색상  
headerTitleStyle : {...} 헤더 타이틀 스타일  
headerShown -> 헤더 표시 여부

# useSafeAreaInsets()

기기에 의해 화면이 가려지지 않게 하는 위(top), 아래(bottom), 왼쪽(left),오른쪽(right) padding값을 가진 객체를 반환하는 hook

# 대규모일 때 유용한 기능

ctrl + P  
-> 파일 이름 검색  
-> @ + 함수 이름 검색  
-> # + 함수 이름 검색

# snippets 이용하면 반복되는 코드 쉽고 빠르게!

# 스크롤 만들기

1. ScrollView
   -> 한번에 모든 리스트 다 랜더링.  
   -> 데이터의 양이 많지 않고, 크기가 정해져있을 때 (ex. 회원가입)
2. FlatList
   -> key를 필수로 정해주지 않아도 됨. id나 index이용. 지정하고싶다면? keyExtractor 이용
   -> 필요한 만큼만 랜더링. 스크롤시 추가 랜더링.  
   -> 데이터의 양이 많거나, 크기를 예측할 수 없을 때 (ex. 친구목록, 글목록)

# 리스트 출력

windowSize에 따라 몇개가 랜더링 될지 선택가능.  
-> 기본값 21 (1이 화면 높이)  
-> 현재화면 1 + 이전화면 10 + 다음화면 10  
-> 값이 작으면 메모리 절약  
-> 값이 작으면 빈 화면이 나올 가능성이 있음.

★ memo

- props에 변화가 없을 때 리랜더링을 방지
- 컴포넌트 랜더링 결과를 기억하고 있다가 리랜더링을 해야 할 때, 변화가 없으면 기억하고 있던 랜더링 결과를 재사용
- props의 변경여부가 아닌 다른 이유로 인한 리랜더링에는 영향을 주지 않음

#

ListHeaderComponent={View} -> 목록의 가장 위에 추가되는 컴포넌트  
ListHeaderComponentStyle={{ height: 10 }} -> 스타일

<!-- ListHeaderComponent={() => <View style={{ height: 10 }}></View>}   --> 이렇게 작성도 가능

# hitslop -> 터치영역 확장

# 정리(clean up) 함수

useEffect{()=>{  
A()  
return ()=>{B()}  
},[val]}

val을 변경함  
-> 현재 val(변경되기 전의 val)을 갖고 정리함수(B)가 호출  
-> val이 변경되어 리랜더링되면서 useEffect(A)가 호출

# shadowColor: 그림자 색

# ios

-> shadowOffset : 그림자의 크기  
-> shadowOpacity : 그림자의 투명도  
-> shadowRadius : 그림자가 흐려지는 반경

# Android

-> elevation : z 축 방향으로의 높이

# Animated 사용 가능한 컴포넌트

image, text, view, scrollview, flatlist, sectionlist

<img width="358" alt="image" src="https://github.com/moonyeju/React_native/assets/97781412/fe5caa1b-bfe6-4b77-be1c-90dfccb124fc">


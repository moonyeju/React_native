# React_native

시작할 때 expo start 같은 와이파이 연결되있어야 함.

## Chapter 2

TouchableHighlight -> 터치했을때 배경색 바뀜  
TouchableOpacity -> 터치했을때 투명도 조절됨  
TouchableWithoutFeedback -> 어떤 효과도 없이 터치만 됨  
TouchableNativeFeedback -> 안드로이드에서만 사용가능 버튼클릭시 물결효과 애니메이션나타남.

#

onPressIn -> 버튼을 눌렀을 때  
onPressOut -> 버튼을 누른 다음 뗐을 때  
onPress -> 버튼을 누른 다음 떼고난 다음  
onLongPress -> 버튼을 길게 눌렀을 때 동작 (0.5sec) -> 여기서 손을 떼면 다시 -> onPressOut

#
flexdirection 네가지 값 설정가능 -> column, column-reverse, row, row-reverse -> 방향을 바꿀 수 있음.
  
중앙정렬

<img width="444" alt="image" src="https://user-images.githubusercontent.com/97781412/232309454-73706f44-4a21-4332-87fe-af310c4b4d53.png">

justifyContents 에서 설정할 수 있는 값 - 6가지

<img width="374" alt="image" src="https://user-images.githubusercontent.com/97781412/232309593-584dc66a-5318-4d66-9d36-9cc383bf0b58.png">
 
 alignItems 에서 설정할 수 있는 값 - 6가지
 
 <img width="436" alt="image" src="https://user-images.githubusercontent.com/97781412/232309753-74b34024-e87b-4f35-94f6-d24bb163f308.png">
 
 alignItems -> 자식 컴포넌트의 정렬 방식
 alignSelf -> 자기 자신의 정렬 방식

 #
<img width="465" alt="image" src="https://user-images.githubusercontent.com/97781412/232312576-c6e4a0b2-4be0-47d6-961b-1904808d128e.png">

#
flexWrap
<img width="236" alt="image" src="https://user-images.githubusercontent.com/97781412/232316672-4914ab16-6e8d-45b3-96f4-1b11fa16588b.png">

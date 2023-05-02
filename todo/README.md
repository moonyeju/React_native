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

<img width="214" alt="image" src="https://user-images.githubusercontent.com/97781412/235593708-d86cc1e2-5852-46fb-81bc-ba139016eee3.png">


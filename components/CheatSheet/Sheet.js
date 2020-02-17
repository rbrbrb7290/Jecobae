import React from 'react';
import {View, Button, Dimensions} from 'react-native';
import ImageViewr from 'react-native-image-zoom-viewer';
const Sheet = ({navigation}) => {
  const linkList = navigation.getParam('imglink');
  let img = [];
  linkList.split(',').forEach(e => {
    img.push({url: e});
  });
  return (
    <View style={{flex: 1}}>
      <Button title="닫기" onPress={() => navigation.goBack()} />
      <ImageViewr
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('window').height,
          resizeMode: 'contain',
        }}
        imageUrls={img}
      />
    </View>
  );
};
export default Sheet;

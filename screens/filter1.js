import React from 'react';
import { Image, View } from 'react-native';

const Filter1 = (props) => {
  const glassesWidth = props.face['bounds']['size']['width'];
  const glassesHeight = props.face['bounds']['size']['height'] / 3;
  const rightEyePosition = props.face['RIGHT_EYE'];
  const leftEyePosition = props.face['LEFT_EYE'];

  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
        (rightEyePosition.x - leftEyePosition.x)
    )
  ) => (angleRad * 180) / Math.PI;
  return (
    <View
      style={{
        position: 'absolute',
        left: leftEyePosition.x - glassesWidth * 0.675,
        top: leftEyePosition.y - glassesHeight * 0.5,
      }}>
      <Image
        source={require('../assets/glasses.png')}
        style={{
          width: glassesWidth,
          height: glassesHeight,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg` }],
        }}
      />
    </View>
  );
};

export default Filter1;

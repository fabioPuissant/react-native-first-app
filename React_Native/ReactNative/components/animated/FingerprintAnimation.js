import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const FingerprintAnimation = ({}) => {
  useEffect(() => {
    this.animation.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#eee'
        }}
        source={require('../../assets/touch-id.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {}
});

export default FingerprintAnimation;

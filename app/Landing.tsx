import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Marquee } from "@animatereactnative/marquee";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Landing() {
  const imageList = [
    require('./../assets/images/1.jpg'),
    require('./../assets/images/c1.jpg'),
    require('./../assets/images/2.jpg'),
    require('./../assets/images/c2.jpg'),
    require('./../assets/images/3.jpg'),
    require('./../assets/images/c3.jpg'),
    require('./../assets/images/4.jpg'),
    require('./../assets/images/5.jpg'),
    require('./../assets/images/6.jpg'),
  ];

  return (
    <GestureHandlerRootView>
    <View>
      <Marquee>
        <View>
        {imageList.map((image, index) => (
          <Image 
            key={index}
            source={image}
            style={styles.image}
          />
        ))}
        
      </View>
      </Marquee>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius:25
  },
  imageContainer:{
    display:'flex',
    flexDirection:'row',
    gap:10
  },
});

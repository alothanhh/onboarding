import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
import { OnboardFlow } from 'react-native-onboard';
import { OnboardFlowProps } from 'react-native-onboard';

export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const image1 = require("../../../assets/image-ob-1.png");
  const image2 = require("../../../assets/image-ob-2.png");
  const image3 = require("../../../assets/image-ob-3.png");

  return (
    <View style={styles.container}>
      <OnboardFlow
        pages={[
          {
            title: 'Provide diverse options',
            subtitle: 'Bring you a convenient kitchen experience',
            imageUri: Image.resolveAssetSource(image1).uri,
          },
          {
            title: 'Save your time',
            subtitle: 'Recommend dishes based on your ingredients',
            imageUri: Image.resolveAssetSource(image2).uri,
          },
          {
            title: 'Instruct detailed cooking',
            subtitle: 'Easy to cook with step-by-step instructions',
            imageUri: Image.resolveAssetSource(image3).uri,
          },
        ]}
        onDone={() => props.onNavigate(RootScreens.MAIN)}
        type={'fullscreen'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

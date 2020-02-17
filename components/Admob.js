import React from 'react';
import {Platform, View, StyleSheet} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import * as env from '../env';
import {SafeAreaView} from 'react-navigation';

function Admob() {
  return (
    <SafeAreaView style={style.container}>
      <BannerAd
        // {
        //   ...( Platform.OS ==='android' ? {
        //     unitId: env.AD_BANNER_ID
        //   }: {
        //     unitId: TestIds.BANNER
        //   })
        // }
        unitId={TestIds.BANNER}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Admob;

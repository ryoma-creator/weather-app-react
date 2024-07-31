import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animations/check-icon-animation.json'; // アニメーションデータのパスを修正

const CheckedIcon = () => {
  const defaultOptions = {
    loop: false, // ループ設定
    autoplay: true, // 自動再生設定
    animationData, // アニメーションデータ
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' // 描画設定
    }
  };

  return <Lottie options={defaultOptions} height={24} width={24} />;
};

export default CheckedIcon;

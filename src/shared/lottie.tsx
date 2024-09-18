import Lottie from 'react-lottie';

export const LottieAnimations = ({
  position = 'relative',
  animation,
  height,
  width,
  zIndex = 1,
  loop,
}: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Lottie
      style={{ position, zIndex }}
      options={{
        ...defaultOptions,
        animationData: animation,
        loop: true,
      }}
      height={height || '100vh'}
      width={width || '100vw'}
      isStopped={false}
      isPaused={false}
    />
  );
};

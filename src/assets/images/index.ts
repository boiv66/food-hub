import vip from "assets/images/level/vip.png";

const LEVEL = {
  bronze: require('assets/images/level/broze.png'),
  silver: require('assets/images/level/silver.png'),
  gold: require('assets/images/level/gold.png'),
  platinum: require('assets/images/level/platinum.png'),
  diamond: require('assets/images/level/diamond.png'),
  vip,
}

const Auth = {
  signInLeft: require('assets/images/auth/sign-in-left.png'),
  linearBackground: require('assets/images/auth/linear-background.png')
}

const IMAGES = {
  logo: require('assets/images/logo.png'),
  logoText: require('assets/images/logo-text.png'),
  logoColor: require('assets/images/logo-color.png'),
  fullLogoColor: require('assets/images/full-logo-color.png'),
  splashBg: require('assets/images/splash-bg.png'),
  splashMark: require('assets/images/splash-mark.png'),
  thumbnail1: require('assets/images/thumbnail-1.png'),
  thumbnail2: require('assets/images/thumbnail-2.png'),
  thumbnail3: require('assets/images/thumbnail-3.png'),
  thumbnail4: require('assets/images/thumbnail-4.png'),
  background: require('assets/images/background.png'),
  avatar: require('assets/images/avatar.png'),
  testBanner: require('assets/images/test-banner.png'),
  line: require('assets/images/line.png'),
  indoor: require('assets/images/indoor.png'),
  outdoor: require('assets/images/outdoor.png'),
  subtract: require('assets/images/subtract.png'),
  paymentSuccessful: require('assets/images/payment-successful.png'),
  paymentFailed: require('assets/images/payment-failed.png'),
  notAvailableSchedule: require('assets/images/not-available-schedule.png'),
  differentMediaType: require('assets/images/different-media-type.png'),
  englishFlag: require('assets/images/english-flag.png'),
  vietnamFlag: require('assets/images/vietnam-flag.png'),
  ...Auth,
  ...LEVEL,
}

export default IMAGES

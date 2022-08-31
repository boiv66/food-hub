import dayjs from 'dayjs'

import DVHCVN from 'assets/data/dvhcvn.json'
import { STATUS, COLORS, MEDIA_TYPES, MEMBER_LEVEL } from 'constants'

export const isEmpty = (obj) => {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false
    }
  }

  return JSON.stringify(obj) === JSON.stringify({})
}

export const formatPrice = (price) => {
  return Number(price)
    .toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    .replace('VND', '')
    .replace('₫', '')
    .trim()
}

const getDateNumber = (dateRanges) => {
  let number = 0
  dateRanges.forEach((range) => {
    number += dayjs(range.dateEnd).diff(dayjs(range.dateStart), 'day') + 1
  })
  return number
}

export const getCampaignPrice = (campaign) => {
  let totalPrice = 0
  const { mediaType, products, dateRanges } = campaign
  const dateNumber = getDateNumber(dateRanges)
  if (mediaType === '2d') {
    products.forEach((product) => {
      totalPrice += dateNumber * product.price
    })
  } else {
    products.forEach((product) => {
      totalPrice +=
        dateNumber *
        (product.timeSessions?.goldenTime * 2 +
          product.timeSessions?.normalTime) *
        product.price
    })
  }
  return totalPrice
}

export const getProvinces = () => {
  return DVHCVN
}

export const generateCode = (prefix) => {
  let now = Date.now().toString()
  now += now + Math.floor(Math.random() * 10)
  return (
    `${prefix ? `#${prefix}.` : ''}` + now.slice(now.length - 6, now.length)
  )
}

export const randomPassword = (
  len = 8,
  minUpper = 1,
  minLower = 1,
  minNumber = 1,
  minSpecial = 1,
) => {
  let chars = String.fromCharCode(...Array(127).keys()).slice(33), //chars
    A2Z = String.fromCharCode(...Array(91).keys()).slice(65), //A-Z
    a2z = String.fromCharCode(...Array(123).keys()).slice(97), //a-z
    zero2nine = String.fromCharCode(...Array(58).keys()).slice(48), //0-9
    specials = chars.replace(/\w/g, '')
  if (minSpecial < 0) chars = zero2nine + A2Z + a2z
  if (minNumber < 0) chars = chars.replace(zero2nine, '')
  let minRequired = minSpecial + minUpper + minLower + minNumber
  let rs = [].concat(
    Array.from(
      { length: minSpecial ? minSpecial : 0 },
      () => specials[Math.floor(Math.random() * specials.length)],
    ),
    Array.from(
      { length: minUpper ? minUpper : 0 },
      () => A2Z[Math.floor(Math.random() * A2Z.length)],
    ),
    Array.from(
      { length: minLower ? minLower : 0 },
      () => a2z[Math.floor(Math.random() * a2z.length)],
    ),
    Array.from(
      { length: minNumber ? minNumber : 0 },
      () => zero2nine[Math.floor(Math.random() * zero2nine.length)],
    ),
    Array.from(
      { length: Math.max(len, minRequired) - (minRequired ? minRequired : 0) },
      () => chars[Math.floor(Math.random() * chars.length)],
    ),
  )
  // eslint-disable-next-line no-self-compare
  return rs.sort(() => Math.random() > Math.random()).join('')
}

export const toCapitalize = (string) => {
  const words = string.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }

  return words.join(' ')
}

export const getUtilityIcon = (utility) => {
  switch (utility) {
    case 'school':
      return 'teacher'
    case 'market':
      return 'bag'
    case 'shoppingMall':
      return 'shop'
    case 'sportCentre':
      return 'weight'
    case 'hospital':
      return 'hospital'
    case 'officeBuilding':
      return 'building'
    case 'cityCentral':
      return 'homeWifi'
    case 'airport':
      return 'airplane'
  }
}

export const formatDate = (date, format = 'DD/MM/YYYY') => {
  return dayjs(date).format(format)
}

export const getSuffixNumber = (number) => {
  switch (number) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

export const getMediaTypeIcon = (typeId) => {
  return MEDIA_TYPES.find((t) => t.id === typeId)?.icon
}

export const getMemberLevel = (points) => {
  let currentLevel = MEMBER_LEVEL[0]
  if (points >= MEMBER_LEVEL[1].minPoint && points < MEMBER_LEVEL[2].minPoint)
    currentLevel = MEMBER_LEVEL[1]
  if (points >= MEMBER_LEVEL[2].minPoint && points < MEMBER_LEVEL[3].minPoint)
    currentLevel = MEMBER_LEVEL[2]
  if (points >= MEMBER_LEVEL[3].minPoint && points < MEMBER_LEVEL[4].minPoint)
    currentLevel = MEMBER_LEVEL[3]
  if (points >= MEMBER_LEVEL[4].minPoint && points < MEMBER_LEVEL[5].minPoint)
    currentLevel = MEMBER_LEVEL[4]
  if (points >= MEMBER_LEVEL[5].minPoint) currentLevel = MEMBER_LEVEL[5]

  if (points < MEMBER_LEVEL[5].minPoint) {
    const currentLevelIndex = MEMBER_LEVEL.findIndex(
      (level) => level.id === currentLevel?.id,
    )
    const nextLevel = MEMBER_LEVEL[currentLevelIndex + 1]
    currentLevel = {
      ...currentLevel,
      nextLevel: {
        ...nextLevel,
        percent: (points / nextLevel.minPoint) * 100,
        pointsLeft: nextLevel.minPoint - points,
      },
    }
  }
  return { ...currentLevel, points }
}

export const getStatus = (status) => {
  let statusObj = {}
  switch (status) {
    case STATUS.draft:
      statusObj = {
        key: status,
        color: COLORS.ORANGE,
        backgroundColor: COLORS.ORANGE_OPACITY(0.1),
        icon: 'path',
      }
      break
    case STATUS.ordered:
      statusObj = {
        key: status,
        color: COLORS.YELLOW,
        backgroundColor: COLORS.YELLOW_OPACITY(0.1),
        icon: 'empty-wallet',
      }
      break
    case STATUS.verifying:
      statusObj = {
        key: status,
        color: COLORS.LIGHT_BLUE,
        backgroundColor: COLORS.LIGHT_BLUE_OPACITY(0.1),
        icon: 'eye',
      }
      break
    case STATUS.verified:
      statusObj = {
        key: status,
        color: COLORS.DARK_PURPLE,
        backgroundColor: COLORS.DARK_PURPLE_OPACITY(0.1),
        icon: 'verify',
      }
      break
    case STATUS.producing:
    case STATUS.processing:
      statusObj = {
        key: status,
        color: COLORS.PURPLE,
        backgroundColor: COLORS.PURPLE_OPACITY(0.1),
        icon: 'story',
      }
      break
    case STATUS.running:
      statusObj = {
        key: status,
        color: COLORS.GREEN,
        backgroundColor: COLORS.GREEN_OPACITY(0.1),
        icon: 'forward',
      }
      break
    case STATUS.pending:
      statusObj = {
        key: status,
        color: COLORS.GRAY,
        backgroundColor: COLORS.GRAY_OPACITY(0.1),
        icon: 'pause',
      }
      break
    case STATUS.canceled:
      statusObj = {
        key: status,
        color: COLORS.MEDIUM_RED,
        backgroundColor: COLORS.RED_OPACITY(0.1),
        icon: 'forbidden',
      }
      break
    case STATUS.completed:
      statusObj = {
        key: status,
        color: COLORS.BLUE,
        backgroundColor: COLORS.BLUE_OPACITY(0.1),
        icon: 'tickCircle',
      }
      break
    default:
      break
  }
  return statusObj
}

export const getId = (prefix) => {
  let now = Date.now().toString()
  now += now + Math.floor(Math.random() * 10)
  return (
    `${prefix ? `#${prefix}.` : ''}` + now.slice(now.length - 6, now.length)
  )
}

export const convertDataToSelectModel = (data) => {
  return data.map((item) => {
    return {
      label: item.name,
      value: item.id,
    }
  })
}
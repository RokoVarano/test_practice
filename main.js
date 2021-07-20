const stringLength = string => {
  return [...string].length;
}

const reverseString = string => {
  return string.reverse();
}

const capitalize = string => {
  return string = string.charAt(0).toUpperCase() + string.slice(1)
} 

export {stringLength, reverseString, capitalize }


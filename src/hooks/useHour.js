export const useHour = (extendedFormat = false) => {
  let date = new Date();
  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  
  let period = hours >= 12 ? 'PM' : 'AM';

  if (!extendedFormat) {
    hours = hours % 12;
    hours = hours ? hours : 12;
  }

  let completeHours = hours < 10
    ? `0${ hours }`
    : `${ hours }`;

  let completeMinutes = minutes < 10
    ? `0${ minutes }`
    : `${ minutes }`;

  return [
    completeHours,
    completeMinutes,
    period
  ];
}
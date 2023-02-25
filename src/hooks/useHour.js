export const useHour = (extendedFormat = false) => {
  let date = new Date();
  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  
  let period = hours >= 12 ? 'PM' : 'AM';

  if (!extendedFormat) {
    hours = hours % 12;
    hours = hours ? hours : 12;
  }

  return [
    hours,
    minutes,
    period
  ];
}
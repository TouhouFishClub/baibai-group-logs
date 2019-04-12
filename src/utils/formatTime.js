const addZero = data => data < 10 ? "0" + data : data;
export default timestamp => {
  let time = new Date(timestamp);
  return `${time.getFullYear()}-${addZero(time.getMonth() + 1)}-${addZero(time.getDate())} ${addZero(time.getHours())}:${addZero(time.getMinutes())}:${addZero(time.getSeconds())}`;
};
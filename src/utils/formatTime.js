export function addZero(data){
  return data < 10 ? "0" + data : data
}
export default function formatTime(timestamp) {
  let time = new Date(timestamp)
  return `${time.getFullYear()}-${addZero(time.getMonth() + 1)}-${addZero(time.getDate())} ${addZero(time.getHours())}:${addZero(time.getMinutes())}:${addZero(time.getSeconds())}`
};
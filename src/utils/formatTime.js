export default formatTime = timestamp => {
  let time = new Date(timestamp)
  return `${time.getFullYear()}-${this.addZero(time.getMonth() + 1)}-${this.addZero(time.getDate())} ${this.addZero(time.getHours())}:${this.addZero(time.getMinutes())}:${this.addZero(time.getSeconds())}`
}
export default function cqMsgClip(msg){
  /* 传入的 msg 去掉前面的 '[CQ:' 和后面的 ']' */
  let mc = msg.match(/,[a-z]+=/g), obj = {}
  obj.cqType = msg.substring(0, msg.indexOf(mc[0]))
  mc.forEach((param, index) => {
    if(index == mc.length - 1){
      obj[param.substring(1, param.length - 1)] = msg.substring(msg.indexOf(param) + param.length)
    } else {
      obj[param.substring(1, param.length - 1)] = msg.substring(msg.indexOf(param) + param.length, msg.indexOf(mc[index + 1]))
    }
  })
  return obj
}
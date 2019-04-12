export default message => {
    return message.replace(/\[CQ:image.+?\]/g, substr => {
        let newSubStr = substr.split("url=")[1];
        if (newSubStr) {
            console.log(`http://flanb.msharebox.com:10086/image?url=${newSubStr.slice(0, -1)}`);
            return `<img class="msg-image" src="http://flanb.msharebox.com:10086/image?url=${newSubStr.slice(0, -1)}">`;
        }
        newSubStr = substr.split("file=")[1].slice(0, -1);
        return `<img class="msg-image" src="http://flanb.msharebox.com:10086/image?d=${newSubStr}">`;
    });
}
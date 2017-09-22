module.exports=(server)=>{
    const io=require('socket.io')(server)
    //监听连接事件
    io.on("connection",function(socket){
        console.log("1个客户端连接了");
        // 监听客户端发送过来的消息
        socket.on("send",function(msg){
            // 给客户端发送消息
            // socket.emit("notice",msg);
            // 给所有客户端广播消息
            io.emit("notice",msg);
        });
    })
}
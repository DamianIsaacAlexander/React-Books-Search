const { disconnect } = require("mongoose");

const mainSocket = (io) => {
    io.on("connection", (socket) => {

        console.log("user connected");

        socket.on("saved", (title) => {
            io.emit("showSavedCard", title);
        });

        socket.on("disconnect", () => {
            console.log("disconnected");
        });
    });
}

module.exports = mainSocket;
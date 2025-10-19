const { PeerServer } = require('peer');

// 創建 PeerJS 伺服器，指定端口和路徑
const peerServer = PeerServer({
  port: 9000, // 伺服器運行的端口
  path: '/peerjs', // PeerJS 的路徑
  allow_discovery: true, // 允許客戶端發現其他對等端（可選）
});

// 當有新的對等端連接到伺服器時觸發
peerServer.on('connection', (client) => {
  console.log(`客戶端已連接到 PeerJS 伺服器，ID: ${client.getId()}`);
});

// 當對等端斷開連接時觸發
peerServer.on('disconnect', (client) => {
  console.log(`客戶端已斷開連接，ID: ${client.getId()}`);
});

// 伺服器啟動後的日誌
console.log('PeerJS 伺服器正在運行於端口 9000');
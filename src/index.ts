import { create, Whatsapp } from "venom-bot";

function main(whats: Whatsapp) {
  whats.onMessage((message) => {
    if (String(message.body).toUpperCase() == "1") {
      return whats.sendText(message.from, "Opção 1: Seja bem vindo!");
    }

    whats.sendText(message.from, `Olá. Digite 1 para receber uma surpresa.`);

    // console.log(message.sender.pushname);
    // console.log(message.from);
  });
}

try {
  (async () => {
    let venom = await create("session-1");
    main(venom);
  })();
} catch (error) {
  console.log(error);
}

// venom
//   .create()
//   .then((client) => start(client))
//   .catch((error) => {
//     console.log(error);
//   });

// function start(client) {
//   client.onMessage((message) => {
//     if (message.body === "Hi" && message.isGroupMsg === true) {
//       client
//         .sendText(message.from, "Welcome Venom 🕷")
//         .then((result) => {
//           console.log("Result: ", result); //return object success
//         })
//         .catch((error) => {
//           console.error("Error when sending: ", error); //return object error
//         });
//     }
//   });
// }

// async function start(client) {
// Retrieve all chats
//   const allMessages = await client.loadAndGetAllMessagesInChat(
//     '0000000@c.us'
//   );
//   console.log(allMessages);
// }

// process.on("SIGINT", function () {
//   client.close();
// });
// }, 5000);

// const fs = require("fs");
const fs = require("fs").promises;
const os = require("os");
const http = require("http");

console.log(`Number of CPU cores: ${os.cpus().length}`);

// Create the server
const server = http.createServer(async (req, res) => {
  const log = `${Date.now()}: ${req.url} Request received\n`;

  try {
    // Append log to the file
    await fs.appendFile("./log.txt", log);
    switch (req.url) {
      case "/":
        // Send response
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, World!\n");

        break;
      case "/about":
        // Send response
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, about\n");

        break;
      default:
        // Send response
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Not found!\n");
    }
  } catch (err) {
    console.error("Error writing to log file:", err.message);

    // Send error response
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error\n");
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
//===================write file means ceatefile ================
// fs.writeFileSync("./test.txt", "Test file has been created");
// fs.writeFile("./test2.txt", "test2 is created", (err, res) => {
//   if (err) {
//     console.log(`Error file creation: ${err}`);
//   } else {
//     console.log(res);
//   }
// });
// ============== read file =======================
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err.message);
//   } else {
//     console.log("File content:", data);
//   }
// });

// try {
//   const data = fs.readFileSync("./test2.txt");
//   //   console.log("File content as Buffer:", data);
//   console.log("File content as String:", data.toString());
// } catch (err) {
//   console.error("Error reading file:", err.message);
// }

// fs.appendFile("./test.txt", "Hello update \n", (err) => {
//   if (err) {
//     console.error("Error appending to file:", err.message);
//   } else {
//     console.log("Content appended successfully!");
//   }
// });

// async function appendToFile() {
//   try {
//     await fs.appendFile("./test.txt", "Hello update (async/await) \n");
//     console.log("Content appended successfully!");
//   } catch (err) {
//     console.error("Error appending to file:", err.message);
//   }
// }

// appendToFile();

// fs.unlink("./test2", (err) => {
//   if (err) {
//     console.error("Error deleting the file:", err.message);
//   } else {
//     console.log("File deleted successfully!");
//   }
// });

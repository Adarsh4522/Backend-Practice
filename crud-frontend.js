const { startServer, shutdown } = require("./backend");

startServer().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});

process.on("SIGINT", async () => {
  await shutdown();
  process.exit(0);
});

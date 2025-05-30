const { spawn } = require("child_process");

module.exports = async (req, res) => {
  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "Priyansh.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("error", (err) => {
    console.error("Error starting bot:", err);
  });

  res.status(200).send("✅ Bot started (temporarily). Vercel will auto-stop after 10s.");
};
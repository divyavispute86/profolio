const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "build");
const distDir = path.join(__dirname, "dist");

// Ensure the dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Copy index.html
fs.copyFileSync(
  path.join(buildDir, "index.html"),
  path.join(distDir, "index.html")
);

// Copy all JS files
const files = fs.readdirSync(path.join(buildDir, "static", "js"));
files.forEach(file => {
  if (file.endsWith(".js")) {
    fs.copyFileSync(
      path.join(buildDir, "static", "js", file),
      path.join(distDir, file)
    );
  }
});

console.log("Dist folder created with index.html and JS files!");

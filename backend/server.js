import path from "path";

console.log(path.basename("/this/path/blank.txt.jsx", "jsx"));
console.log(path.dirname("src/module.txt"));

console.log(path.extname("some/filename.txt"));

console.log(path.isAbsolute("/test/something"));

const name = "server";
console.log(path.isAbsolute(path.join("./", "users", name, "notes.txt")));

console.log(path.normalize("/users/black/file.txt/.."));
console.log(path.parse("/users/mike/file.txt"));
console.log(
  path.relative(
    "person/mike/price/mikael",
    "person/mike/michael/josh/james.txt/hamlin"
  )
);
console.log(path.relative("users/admin", "users/admin"));

console.log(path.resolve("users/admin", "readme.md"));

//const bcrypt = require("bcrypt");

async function getUserData() {
  return {
    username: "admin",
    //password: await bcrypt.hash("password", 10),
    password: "password",
    email: "admin@admin.com",
    photo: "https://randomuser.me/api/portraits/women/80.jpg",
    fullname: "administrator",
    bio: "hey",
    pet: "dog",
  };
}

module.exports = { getUserData };

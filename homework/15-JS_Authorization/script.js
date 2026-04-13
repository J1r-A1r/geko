const users = [
  { username: "admin", password: "1234", isBlocked: false },
  { username: "john", password: "qwerty", isBlocked: true },
  { username: "anna", password: "pass", isBlocked: false }
];

function login(users, username, password) {
  let foundUser = null;

  // 1. pntrum enq userin
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      foundUser = users[i];
      break; 
    }
  }

  // 2. Paymanneri stugum
  if (!foundUser) {
    console.log("Օգտատերը չի գտնվել");
  } else if (foundUser.password !== password) {
    console.log("Սխալ գաղտնաբառ");
  } else if (foundUser.isBlocked) {
    console.log("Օգտատերը արգելափակված է");
  } else {
    console.log(`Բարի գալուստ, ${foundUser.username}`);
  }
}

// Թեստավորում
login(users, "admin", "1234");  // Bari galust admin
login(users, "john", "qwerty"); // ogtatery argelapakvac e
login(users, "anna", "1111");   // sxal parol
login(users, "mike", "2222");   // ogtatery chi gtnvel
const password = "rahasia";

const passwordHash = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 10
});

const result = await Bun.password.verify("rahasia", passwordHash, "bcrypt");
console.info(result);

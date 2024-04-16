const appVersion = "1.2.3";

console.info(Bun.semver.satisfies(appVersion, "1.x"));
console.info(Bun.semver.satisfies(appVersion, "2.x"));
console.info(Bun.semver.satisfies(appVersion, ">=1.0.0"));
console.info(Bun.semver.satisfies(appVersion, "<2.0.0"));
console.info(Bun.semver.satisfies(appVersion, "^1.1.1"));

const fs = require('fs');

const expected = 100;

try {
    const stdinBuffer = fs.readFileSync(0);
    const lcov_data = JSON.parse(stdinBuffer.toString());
    const found = lcov_data[0].lines.found;
    const hit = lcov_data[0].lines.hit;
    const coverage = hit / found * 100;
    if (coverage < expected) {
        throw new Error(`Fail! Expected ${expected}% coverage. Actual coverage was ${coverage}%.`);
    }
    console.info(`\x1b[0mPassing with \x1b[32m${coverage}%\x1b[0m coverage.`);
    return 0;
} catch (e) {
    console.error("\x1b[31m",e);
    return 1;
}

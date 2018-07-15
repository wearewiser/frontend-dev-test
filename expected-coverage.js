const fs = require('fs');

const expected = 100;

try {
    const stdinBuffer = fs.readFileSync(0);
    const lcov_data = JSON.parse(stdinBuffer.toString());
    const found = lcov_data[0].lines.found;
    const hit = lcov_data[0].lines.hit;
    const coverage = hit / found * 100;
    if(coverage < expected) {
        throw new Error(`Fail! Expected ${expected}% coverage. Actual coverage was ${coverage}%.`);
    }
    console.info(`Passing with ${coverage}% coverage.`);
    return 0;
} catch(e) {
    console.error(e);
    return 1;
}

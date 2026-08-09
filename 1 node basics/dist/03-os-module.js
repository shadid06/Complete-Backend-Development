// check os, cpu, memeory, find home directory/temp dir
import * as os from 'node:os';
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.hostname());
// console.log(os.version());
// console.log(os.userInfo());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.uptime());
// console.log(os.loadavg());
// console.log(os.platform());
function runOsDemo() {
    console.log(os.platform());
    console.log(os.arch());
    console.log(os.release());
    console.log(os.homedir());
    console.log(os.tmpdir());
    const cpus = os.cpus();
    console.log(cpus.length);
    const firstCpu = cpus[0];
    if (firstCpu) {
        console.log(firstCpu.model);
        console.log(firstCpu.speed);
        console.log(firstCpu.times);
    }
    console.log(os.totalmem());
    console.log(os.freemem());
    console.log(os.uptime());
}
runOsDemo();
//# sourceMappingURL=03-os-module.js.map
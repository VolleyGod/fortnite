exports.run = (client, message, args, prettyMs) => {
const Fortnite = require('fortnite');
const cl = new Fortnite('df9e960d-6ffb-443d-99f6-753ed50201f5');
cl.getInfo('koyaser', 'pc').then(data => console.log(data));
}
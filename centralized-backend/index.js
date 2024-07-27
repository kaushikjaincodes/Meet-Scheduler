"use strict";

const web3_1 = __importDefault(require("web3"));
const abi_1 = require("./abi");
const providerUrl = ""; 
const contractAddress = "";
const webhookUrl = "";
const web3 = new web3_1.default(new web3_1.default.providers.WebsocketProvider(providerUrl));
const contract = new web3.eth.Contract(abi_1.abi, contractAddress);
//@ts-ignore
contract.events.PaymentReceived({
    fromBlock: 0
})
    .on('data', function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Adding user ${event.returnValues.email} to the Meet`);
        axios.post(webhookUrl, {
            email: event.returnValues.email,
        });
    });
});

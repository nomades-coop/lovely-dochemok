require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rate rural home grace hidden suspect ghost'; 
let testAccounts = [
"0xa474d88e9ca035cfac0cc3dae2b9617083bef5c2a0a57212cebbee508bb41dfa",
"0x740fd6230ab638bb97e8a06f0c512f4cbbf64c60a1f7a97925139ebcd87b3edd",
"0xb141ef16c87135dd98a1c326b2d222fda1809349e9875edca430cbb3a38791d4",
"0x2974046ab017e3e56a9c0b18ce05759dfa21b663480b871b936a01ecaff08027",
"0x70d2147bd3f3dffa1fab4a49d446e0973225398301fb654ec966db0f49ddbea8",
"0x6f100f1b5d5e005f32d6ec52c3645b6a3108a7674978ae81d67601173975fdb9",
"0xd9eb3712c576533f696544bc113d91e5836a0e1ceae6c2f810f72b3b7c7dba85",
"0x8ba6c20dba1556fa555ebeed5a78f5f517f42194af96d1c39d0c332f6d3a76d0",
"0x9653ad7ebe0a6c007345da17c21efc9fb62a12ba8a947337b14ab24fcf747045",
"0x8d25eb366f004fa783e0cee994d9ef830ab0eff351a1b3aaca0e75415c10da32"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note screen protect good kitchen olympic gather'; 
let testAccounts = [
"0x687b9a1595cec921ec96659c245477c1949e9f548660212582480a15f8c973ee",
"0x9decfe6a5d487559d7d978dce5f83d7f41e44551f3e4d19b81578a440a86e0c3",
"0x5d103bdf00707cdea709fb1deb91c10b604911dae1dbdba9b05864d7a4093dd5",
"0xe4930a75d881d7334b08161cba6927c6ca544454a4fd6ca0da9fb2b798e388c8",
"0x10fadf9d66a81d83ae3967b8d55f814be43fb5c81814496c7476bb5402422d6d",
"0x843cfab20a86dbe9818e1a1370057b802a979cb05325d839352eab16caeaf178",
"0x24a75a85ac22490f58c427cedb329ead4417f259f271dd47b6d7c701155877b7",
"0x7c43993e94df30932cd7b74c6d0e55da6992bcdccd2c18d1b5749ff9bd33a352",
"0x68b6c22777c7ca55f22c984b18d5671479ef6e051c416d39db5d6f4924da61ca",
"0xcc5bc147e9f281a44094acca43f92b71f04cc1b780965a9dbafd1ec594754077"
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

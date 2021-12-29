require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth pulse coconut hidden arm blue train'; 
let testAccounts = [
"0xe405a2896330ee51e312c9d538de7d94b7197ed2f4c02cbd05579b1009fe8181",
"0x3dfc784b7ccc9ad37e1063710c50aca777a01485f7ddec11ebbf8395534a48a5",
"0x376eca6d8684e7fb7cb4e18f75997468f696b16758b5d6d44a7501f0475e4083",
"0xc4c4121ad3ea13ea7cc90d6cf8b16f2e8eca1a24a565dfbbdb04799cd8892d23",
"0x55c47f7b4e2c7f7c8ad71c7025f44230622411afd84be2ccf331e8e030bdbd34",
"0xf4ee4031983cd87e4be2185401f42c01184e77559e89ad5fb05a5cf7fe9beb70",
"0xa9b4f1f59fbdb574f685f33e0ad1b5cecd7a9ae723f90c45714c70bd423e571d",
"0xf7ceed35716654b85fc4c7c2ce01c75c664d09aae65a5c8784acab826caaa1b1",
"0x7b5e750d278667b4e5dd7002203f8374bacc62a788211fcf279f86491bc00924",
"0x59700e96207b5d196dbbb5833b4221e2bd80173f7366355ab5e28cb3abd90cd9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



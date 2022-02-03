//getBalance.js
require('dotenv').config();
const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/".concat(process.env.API); // 원격 이더리움 노드에 접속할 수 있는 주소

const web3 = new Web3(rpcURL); // web3 객체 생성

const account = process.env.ACCOUNT; // 지갑 주소

web3.eth.getBalance(account)
    .then((bal) => {
        console.log(`지갑 ${account}의 잔액은... ${bal}입니다.`);
        return web3.utils.fromWei(bal, "ether"); // web3.utils.fromWei를 사용해 ether 단위로 변경
    })
    .then((eth) => {
        console.log(`이더 단위로는 ${eth} ETH 입니다.`);
    })

const txId = process.env.TRANSACTION;

web3.eth.getTransaction(txId)
    .then((obj) => {
        console.log('Transaction: ');
        console.log(obj);
    });

const blockNum = process.env.BLOCKNUM;

web3.eth.getBlock(blockNum)
    .then((obj) => {
        console.log('block:');
        console.log(obj);
    })
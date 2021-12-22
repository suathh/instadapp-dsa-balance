import dotEnv from "dotenv-flow";
dotEnv.config();
import tokens from "./assets/token-list.js";
import Web3 from "web3";
import dsaContracts from "./assets/dsa-contracts.js";
import { address, abi } from "./contracts/DSA Contracts/InstaERC20Resolver.js";

const web3 = new Web3(process.env.WEB3_PROVIDER);
const Resolver = new web3.eth.Contract(abi, address);

let tokenArray = [];
for (let i = 0; i < tokens.length; i++) {
  const token = tokens[i];
  tokenArray.push(token.address);
}
for (let l = 0; l < dsaContracts.length; l++) {
  const dsaContract = dsaContracts[l];
  let balances = await Resolver.methods
    .getBalances(dsaContract.address, tokenArray)
    .call();
  let summary = [];
  for (let k = 0; k < balances.length; k++) {
    const balance = balances[k];
    const name = tokens[k].name;
    summary.push(`${name} Balance : ${balance} \n`);
  }
  let output = `DSA CONTRACT : ${dsaContract.name} \n ${summary}`;
  console.log(
    output,
    "\n----------------------------------------------------------------------"
  );
}

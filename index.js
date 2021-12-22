import dotEnv from "dotenv-flow";
dotEnv.config();

import Web3 from "web3";
import TokenList from "./assets/token-list.js";
import { getERC20Contract } from "./store/contractStore.js";
import dsaContracts from "./assets/dsa-contracts.js";
const web3 = new Web3(process.env.WEB3_PROVIDER);
for (let l = 0; l < dsaContracts.length; l++) {
  const dsaContract = dsaContracts[l];
  for (let i = 0; i < TokenList.length; i++) {
    const token = TokenList[i];
    let contract = getERC20Contract(token.address, web3);
    let balance = `DSA CONTRACT : ${dsaContract.name} Token : ${
      token.name
    } Balance : ${await contract.methods
      .balanceOf(dsaContract.address)
      .call()}`;
    console.log(balance);
  }
}

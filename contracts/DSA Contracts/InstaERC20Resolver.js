import Web3 from "web3";

export const name = "InstaERC20Resolver";
export const token = "ERC20-Resolver-v1";
export const address = "0x6d9c624844e61280c19fd7ef588d79a6de893d64";
export const abi = [
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "address[]", name: "tknAddress", type: "address[]" },
    ],
    name: "getAllowances",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address[]", name: "tknAddress", type: "address[]" },
    ],
    name: "getBalances",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];

const web3 = new Web3(process.env.WEB3_PROVIDER);
const Resolver = new web3.eth.Contract(abi, address);
export default Resolver;

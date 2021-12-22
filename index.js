import dotEnv from "dotenv-flow";
dotEnv.config();
import Web3 from "web3";
import tokens from "./assets/token-list.js";

const web3 = new Web3(process.env.WEB3_PROVIDER);
let InstaImplementationM1Abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "origin",
        type: "address",
      },
    ],
    name: "LogAccountCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_newAccount",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_connectors",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_check",
        type: "address",
      },
    ],
    name: "LogNewAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "accountVersion",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "check",
        type: "address",
      },
    ],
    name: "LogNewCheck",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "master",
        type: "address",
      },
    ],
    name: "LogNewMaster",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "master",
        type: "address",
      },
    ],
    name: "LogUpdateMaster",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "account",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_newAccount", type: "address" },
      { internalType: "address", name: "_connectors", type: "address" },
      { internalType: "address", name: "_check", type: "address" },
    ],
    name: "addNewAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "uint256", name: "accountVersion", type: "uint256" },
      { internalType: "address", name: "_origin", type: "address" },
    ],
    name: "build",
    outputs: [{ internalType: "address", name: "_account", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "uint256", name: "accountVersion", type: "uint256" },
      { internalType: "address[]", name: "_targets", type: "address[]" },
      { internalType: "bytes[]", name: "_datas", type: "bytes[]" },
      { internalType: "address", name: "_origin", type: "address" },
    ],
    name: "buildWithCast",
    outputs: [{ internalType: "address", name: "_account", type: "address" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "accountVersion", type: "uint256" },
      { internalType: "address", name: "_newCheck", type: "address" },
    ],
    name: "changeCheck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newMaster", type: "address" }],
    name: "changeMaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "check",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "connectors",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "version", type: "uint256" },
      { internalType: "address", name: "query", type: "address" },
    ],
    name: "isClone",
    outputs: [{ internalType: "bool", name: "result", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "list",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "master",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_master", type: "address" },
      { internalType: "address", name: "_list", type: "address" },
      { internalType: "address", name: "_account", type: "address" },
      { internalType: "address", name: "_connectors", type: "address" },
    ],
    name: "setBasics",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateMaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "versionCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
const InstaImplementationM1 = new web3.eth.Contract(
  InstaImplementationM1Abi,
  "0x2971AdFa57b20E5a416aE5a708A8655A9c74f723"
);
let InstaListAbi = [
  {
    inputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    name: "accountAddr",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "accountID",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    name: "accountLink",
    outputs: [
      { internalType: "address", name: "first", type: "address" },
      { internalType: "address", name: "last", type: "address" },
      { internalType: "uint64", name: "count", type: "uint64" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint64", name: "", type: "uint64" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "accountList",
    outputs: [
      { internalType: "address", name: "prev", type: "address" },
      { internalType: "address", name: "next", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accounts",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "addAuth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "instaIndex",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "removeAuth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userLink",
    outputs: [
      { internalType: "uint64", name: "first", type: "uint64" },
      { internalType: "uint64", name: "last", type: "uint64" },
      { internalType: "uint64", name: "count", type: "uint64" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint64", name: "", type: "uint64" },
    ],
    name: "userList",
    outputs: [
      { internalType: "uint64", name: "prev", type: "uint64" },
      { internalType: "uint64", name: "next", type: "uint64" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const InstaList = new web3.eth.Contract(
  InstaListAbi,
  "0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb"
);
let ERC20PowerResolverv1Abi = [
  {
    inputs: [
      { internalType: "address[]", name: "owners", type: "address[]" },
      { internalType: "address[]", name: "tknAddress", type: "address[]" },
    ],
    name: "getBalances",
    outputs: [
      {
        components: [
          {
            internalType: "uint256[]",
            name: "userBalances",
            type: "uint256[]",
          },
        ],
        internalType: "struct Resolver.TokenBalances[]",
        name: "",
        type: "tuple[]",
      },
    ],
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
const ERC20PowerResolverv1 = new web3.eth.Contract(
  ERC20PowerResolverv1Abi,
  "0xAA9f6D02AB2BdEF272834E11426b2B8b976B4679"
);

let accounts = await InstaList.methods.accounts().call();
let step = 10000;
let count = Math.floor(accounts / step);
let extraStep = accounts % step;
let startBlock = 9747241;

let accountList = [];
for (let i = accounts; i > accountList.length; ) {
  try {
    console.log(`STARTED FROM BLOCK : ${startBlock} TO ${startBlock + step}`);
    let createdAccounts = await InstaImplementationM1.getPastEvents(
      "LogAccountCreated",
      {
        fromBlock: startBlock,
        toBlock: startBlock + step,
      }
    );
    console.log(`FOUNDED ACCOUNTS : ${createdAccounts.length}`);
    accountList = accountList.concat(createdAccounts);
    console.log(`TOTAL ACCOUNTS FOUND : ${accountList.length}`);
    startBlock += step;
  } catch (e) {
    startBlock -= step;
    let diff = accounts - accountList.length;
    step = diff;
  }
}
let balances = await ERC20PowerResolverv1.methods
  .getBalances(
    accountList.map((account) => account.address),
    tokens.map((token) => token.address)
  )
  .call();
console.log(balances);

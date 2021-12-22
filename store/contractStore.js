import ERC20ABI from "../assets/abi-erc20.js";

export function getERC20Contract(address, web3) {
  return web3
    ? new web3.eth.Contract(ERC20ABI, address, {
        from: web3.eth.defaultAccout,
      })
    : null;
}

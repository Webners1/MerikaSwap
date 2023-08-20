import { Contract } from '@ethersproject/contracts'
import {
  BAR_ADDRESS,
  BENTOBOX_ADDRESS,
  BORING_HELPER_ADDRESS,
  CHAIN_KEY,
  ChainId,
  CHAINLINK_ORACLE_ADDRESS,
  ENS_REGISTRAR_ADDRESS,
  FACTORY_ADDRESS,
  MAKER_ADDRESS,
  MASTERCHEF_ADDRESS,
  MASTERCHEF_V2_ADDRESS,
  MERKLE_DISTRIBUTOR_ADDRESS,
  MINICHEF_ADDRESS,
  MULTICALL2_ADDRESS,
  ROUTER_ADDRESS,
  SUSHI_ADDRESS,
  TIMELOCK_ADDRESS,
  WNATIVE_ADDRESS,
} from '@sushiswap/core-sdk'
import { LIMIT_ORDER_HELPER_ADDRESS, STOP_LIMIT_ORDER_ADDRESS } from '@sushiswap/limit-order-sdk'
import MISO from '@sushiswap/miso/exports/all.json'
//@ts-ignore
import ConstantProductPoolArtifact from '@sushiswap/trident/artifacts/contracts/pool/constant-product/ConstantProductPool.sol/ConstantProductPool.json'
//@ts-ignore
// import TRIDENT from '@sushiswap/trident/exports/all.json'
import { Pool, PoolType } from '@sushiswap/trident-sdk'
import {
  ARGENT_WALLET_DETECTOR_ABI,
  ARGENT_WALLET_DETECTOR_MAINNET_ADDRESS,
} from 'app/constants/abis/argent-wallet-detector'
import BAR_ABI from 'app/constants/abis/bar.json'
import BENTOBOX_ABI from 'app/constants/abis/bentobox.json'
import BORING_HELPER_ABI from 'app/constants/abis/boring-helper.json'
import CHAINLINK_ORACLE_ABI from 'app/constants/abis/chainlink-oracle.json'
import CLONE_REWARDER_ABI from 'app/constants/abis/clone-rewarder.json'
import COMPLEX_REWARDER_ABI from 'app/constants/abis/complex-rewarder.json'
import DASHBOARD_ABI from 'app/constants/abis/dashboard.json'
import EIP_2612_ABI from 'app/constants/abis/eip-2612.json'
import ENS_PUBLIC_RESOLVER_ABI from 'app/constants/abis/ens-public-resolver.json'
import ENS_ABI from 'app/constants/abis/ens-registrar.json'
import { ERC20_BYTES32_ABI } from 'app/constants/abis/erc20'
import ERC20_ABI from 'app/constants/abis/erc20.json'
import FACTORY_ABI from 'app/constants/abis/factory.json'
import INARI_ABI from 'app/constants/abis/inari.json'
import MULTICALL_ABI from 'app/constants/abis/interface-multicall.json'
import KASHI_REPOSITORY_ABI from 'app/constants/abis/kashi-repository.json'
import LIMIT_ORDER_ABI from 'app/constants/abis/limit-order.json'
import LIMIT_ORDER_HELPER_ABI from 'app/constants/abis/limit-order-helper.json'
import MAKER_ABI from 'app/constants/abis/maker.json'
import MASTERCHEF_ABI from 'app/constants/abis/masterchef.json'
import MASTERCHEF_V2_ABI from 'app/constants/abis/masterchef-v2.json'
import MEOWSHI_ABI from 'app/constants/abis/meowshi.json'
import MERKLE_DISTRIBUTOR_ABI from 'app/constants/abis/merkle-distributor.json'
import MINICHEF_ABI from 'app/constants/abis/minichef-v2.json'
import MISO_HELPER_ABI from 'app/constants/abis/miso-helper.json'
import MULTICALL2_ABI from 'app/constants/abis/multicall2.json'
import ROUTER_ABI from 'app/constants/abis/router.json'
import SUSHI_ABI from 'app/constants/abis/sushi.json'
import SUSHIROLL_ABI from 'app/constants/abis/sushi-roll.json'
import TIMELOCK_ABI from 'app/constants/abis/timelock.json'
import UNI_FACTORY_ABI from 'app/constants/abis/uniswap-v2-factory.json'
import IUniswapV2PairABI from 'app/constants/abis/uniswap-v2-pair.json'
import WETH9_ABI from 'app/constants/abis/weth.json'
import ZENKO_ABI from 'app/constants/abis/zenko.json'
import LPToken from 'app/features/migration/LPToken'
import { poolEntityMapper } from 'app/features/trident/poolEntityMapper'
import { getContract } from 'app/functions'
import { useActiveWeb3React } from 'app/services/web3'
import { useMemo } from 'react'

const UNI_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export function useEIP2612Contract(tokenAddress?: string): Contract | null {
  return useContract(tokenAddress, EIP_2612_ABI, false)
}

const TRIDENT = {
  "5": [
    {
      "name": "goerli",
      "chainId": "5",
      "contracts": {
        "ConstantProductPoolFactory": {
          "address": "0xf78031CBCA409F2FB6876BDFDBc1b2df24cF9bEf",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidTokenOrder",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "UnauthorisedDeployer",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bytecodeHash",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                }
              ],
              "name": "calculatePoolAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "name": "configAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getDeployData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "startIndex",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "name": "getPools",
              "outputs": [
                {
                  "internalType": "address[]",
                  "name": "pairPools",
                  "type": "address[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                }
              ],
              "name": "poolsCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "ConstantProductPoolFactoryHelper": {
          "address": "0xbE811A0D44E2553d25d11CB8DC0d3F0D0E6430E6",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "constantProductPoolFactory",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "tokens",
                  "type": "address[]"
                }
              ],
              "name": "getPoolsForTokens",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint8",
                      "name": "tokenA",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint8",
                      "name": "tokenB",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve0",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve1",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint16",
                      "name": "swapFeeAndTwapSupport",
                      "type": "uint16"
                    }
                  ],
                  "internalType": "struct ConstantProductPoolFactoryHelper.ConstantProductPoolInfo[]",
                  "name": "poolInfos",
                  "type": "tuple[]"
                },
                {
                  "internalType": "uint256",
                  "name": "length",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "MasterDeployer": {
          "address": "0x93395129bd3fcf49d95730d3c2737c17990ff328",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "_barFeeTo",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_bento",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidBarFee",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWhitelisted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "AddToWhitelist",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "barFeeTo",
                  "type": "address"
                }
              ],
              "name": "BarFeeToUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "barFee",
                  "type": "uint256"
                }
              ],
              "name": "BarFeeUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "DeployPool",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "RemoveFromWhitelist",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "addToWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFeeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "removeFromWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "renounceOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                }
              ],
              "name": "setBarFee",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_barFeeTo",
                  "type": "address"
                }
              ],
              "name": "setBarFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "whitelistedFactories",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "TridentRouter": {
          "address": "0xaB235da7f52d35fb4551AfBa11BFB56e18774A65",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bento",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "IncorrectSlippageParams",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotEnoughLiquidityMinted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWethSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "TooLittleReceived",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "native",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct ITridentRouter.TokenInput[]",
                  "name": "tokenInput",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "minLiquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "addLiquidity",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "approveMasterContract",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IPool.TokenAmount[]",
                  "name": "minWithdrawals",
                  "type": "tuple[]"
                }
              ],
              "name": "burnLiquidity",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "internalType": "uint256",
                  "name": "minWithdrawal",
                  "type": "uint256"
                }
              ],
              "name": "burnLiquiditySingle",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "native",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.InitialPath[]",
                      "name": "initialPath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "uint64",
                          "name": "balancePercentage",
                          "type": "uint64"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.PercentagePath[]",
                      "name": "percentagePath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "token",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "unwrapBento",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "minAmount",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Output[]",
                      "name": "output",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ComplexPathParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "complexPath",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInput",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingle",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingleWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "maxChangeAmount",
                  "type": "uint256"
                }
              ],
              "name": "harvest",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "fromBento",
                  "type": "bool"
                }
              ],
              "name": "sweep",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                }
              ],
              "name": "unwrapWETH",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "stateMutability": "payable",
              "type": "receive"
            }
          ]
        },
        "TridentSushiRollCP": {
          "address": "0xaa26771d497814E81D305c511Efbb3ceD90BF5bd",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IPoolFactory",
                  "name": "_poolFactoryCP",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "MinimumOutput",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IConstantProductPool",
                  "name": "currentPool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken0Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken1Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minLpReceived",
                  "type": "uint256"
                }
              ],
              "name": "migrateCP",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IUniswapV2Minimal",
                  "name": "pair",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken0Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken1Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minLpReceived",
                  "type": "uint256"
                }
              ],
              "name": "migrateLegacyToCP",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "poolFactoryCP",
              "outputs": [
                {
                  "internalType": "contract IPoolFactory",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "10": [
    {
      "name": "optimism",
      "chainId": "10",
      "contracts": {
        "ConstantProductPoolFactory": {
          "address": "0x93395129bd3fcf49d95730D3C2737c17990fF328",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidTokenOrder",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "UnauthorisedDeployer",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bytecodeHash",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                }
              ],
              "name": "calculatePoolAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "name": "configAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getDeployData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "startIndex",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "name": "getPools",
              "outputs": [
                {
                  "internalType": "address[]",
                  "name": "pairPools",
                  "type": "address[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                }
              ],
              "name": "poolsCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "ConstantProductPoolFactoryHelper": {
          "address": "0x2f686751b19a9d91cc3d57d90150Bc767f050066",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "constantProductPoolFactory",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "tokens",
                  "type": "address[]"
                }
              ],
              "name": "getPoolsForTokens",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint8",
                      "name": "tokenA",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint8",
                      "name": "tokenB",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve0",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve1",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint16",
                      "name": "swapFeeAndTwapSupport",
                      "type": "uint16"
                    }
                  ],
                  "internalType": "struct ConstantProductPoolFactoryHelper.ConstantProductPoolInfo[]",
                  "name": "poolInfos",
                  "type": "tuple[]"
                },
                {
                  "internalType": "uint256",
                  "name": "length",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "MasterDeployer": {
          "address": "0xCaAbdD9Cf4b61813D4a52f980d6BC1B713FE66F5",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "_barFeeTo",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_bento",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidBarFee",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWhitelisted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "AddToWhitelist",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "barFeeTo",
                  "type": "address"
                }
              ],
              "name": "BarFeeToUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "barFee",
                  "type": "uint256"
                }
              ],
              "name": "BarFeeUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "DeployPool",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "RemoveFromWhitelist",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "addToWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFeeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "removeFromWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "renounceOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                }
              ],
              "name": "setBarFee",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_barFeeTo",
                  "type": "address"
                }
              ],
              "name": "setBarFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "whitelistedFactories",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "TridentRouter": {
          "address": "0xbE811A0D44E2553d25d11CB8DC0d3F0D0E6430E6",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bento",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "IncorrectSlippageParams",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotEnoughLiquidityMinted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWethSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "TooLittleReceived",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "native",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct ITridentRouter.TokenInput[]",
                  "name": "tokenInput",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "minLiquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "addLiquidity",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "approveMasterContract",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IPool.TokenAmount[]",
                  "name": "minWithdrawals",
                  "type": "tuple[]"
                }
              ],
              "name": "burnLiquidity",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "internalType": "uint256",
                  "name": "minWithdrawal",
                  "type": "uint256"
                }
              ],
              "name": "burnLiquiditySingle",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "native",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.InitialPath[]",
                      "name": "initialPath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "uint64",
                          "name": "balancePercentage",
                          "type": "uint64"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.PercentagePath[]",
                      "name": "percentagePath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "token",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "unwrapBento",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "minAmount",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Output[]",
                      "name": "output",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ComplexPathParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "complexPath",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInput",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingle",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingleWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "maxChangeAmount",
                  "type": "uint256"
                }
              ],
              "name": "harvest",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "fromBento",
                  "type": "bool"
                }
              ],
              "name": "sweep",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                }
              ],
              "name": "unwrapWETH",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "stateMutability": "payable",
              "type": "receive"
            }
          ]
        },
        "TridentSushiRollCP": {
          "address": "0xaB235da7f52d35fb4551AfBa11BFB56e18774A65",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IPoolFactory",
                  "name": "_poolFactoryCP",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "MinimumOutput",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IConstantProductPool",
                  "name": "currentPool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken0Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken1Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minLpReceived",
                  "type": "uint256"
                }
              ],
              "name": "migrateCP",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IUniswapV2Minimal",
                  "name": "pair",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken0Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken1Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minLpReceived",
                  "type": "uint256"
                }
              ],
              "name": "migrateLegacyToCP",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "poolFactoryCP",
              "outputs": [
                {
                  "internalType": "contract IPoolFactory",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "137": [
    {
      "name": "polygon",
      "chainId": "137",
      "contracts": {
        "ConstantProductPoolFactory": {
          "address": "0x05689fCfeE31FCe4a67FbC7Cab13E74F80A4E288",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidTokenOrder",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "UnauthorisedDeployer",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "name": "configAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "startIndex",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "name": "getPools",
              "outputs": [
                {
                  "internalType": "address[]",
                  "name": "pairPools",
                  "type": "address[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                }
              ],
              "name": "poolsCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "ConstantProductPoolFactoryHelper": {
          "address": "0xDCd6a4B673B1C409e4b67F787935865b161232d3",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "constantProductPoolFactory",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "tokens",
                  "type": "address[]"
                }
              ],
              "name": "getPoolsForTokens",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint8",
                      "name": "tokenA",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint8",
                      "name": "tokenB",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve0",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve1",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint16",
                      "name": "swapFeeAndTwapSupport",
                      "type": "uint16"
                    }
                  ],
                  "internalType": "struct ConstantProductPoolFactoryHelper.ConstantProductPoolInfo[]",
                  "name": "poolInfos",
                  "type": "tuple[]"
                },
                {
                  "internalType": "uint256",
                  "name": "length",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "MasterDeployer": {
          "address": "0x351447fc9bd20A917783E159e61E86EDDA0b0187",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "_barFeeTo",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_bento",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidBarFee",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWhitelisted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "AddToWhitelist",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "barFee",
                  "type": "uint256"
                }
              ],
              "name": "BarFeeUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "DeployPool",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "RemoveFromWhitelist",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "addToWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFeeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "removeFromWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "renounceOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                }
              ],
              "name": "setBarFee",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "whitelistedFactories",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "TridentRouter": {
          "address": "0xc5017BE80b4446988e8686168396289a9A62668E",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bento",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "IncorrectTokenWithdrawn",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InsufficientWETH",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "InvalidPool",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotEnoughLiquidityMinted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWethSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "TooLittleReceived",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "native",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct ITridentRouter.TokenInput[]",
                  "name": "tokenInput",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "minLiquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "addLiquidity",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "approveMasterContract",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IPool.TokenAmount[]",
                  "name": "minWithdrawals",
                  "type": "tuple[]"
                }
              ],
              "name": "burnLiquidity",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "internalType": "uint256",
                  "name": "minWithdrawal",
                  "type": "uint256"
                }
              ],
              "name": "burnLiquiditySingle",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "native",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.InitialPath[]",
                      "name": "initialPath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "uint64",
                          "name": "balancePercentage",
                          "type": "uint64"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.PercentagePath[]",
                      "name": "percentagePath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "token",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "unwrapBento",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "minAmount",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Output[]",
                      "name": "output",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ComplexPathParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "complexPath",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInput",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingle",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingleWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "onBento",
                  "type": "bool"
                }
              ],
              "name": "sweep",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "amountMinimum",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                }
              ],
              "name": "unwrapWETH",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "stateMutability": "payable",
              "type": "receive"
            }
          ]
        },
        "TridentSushiRollCP": {
          "address": "0x5629CE74DdCAD7Cc72b3Ea30444dA7172AD851D9",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IPoolFactory",
                  "name": "_poolFactory",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "MinimumOutput",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IUniswapV2Minimal",
                  "name": "pair",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken0Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken1Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minLpReceived",
                  "type": "uint256"
                }
              ],
              "name": "migrate",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "1088": [
    {
      "name": "metis",
      "chainId": "1088",
      "contracts": {
        "ConstantProductPoolFactory": {
          "address": "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidTokenOrder",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "UnauthorisedDeployer",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bytecodeHash",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                }
              ],
              "name": "calculatePoolAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "name": "configAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getDeployData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "startIndex",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "name": "getPools",
              "outputs": [
                {
                  "internalType": "address[]",
                  "name": "pairPools",
                  "type": "address[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                }
              ],
              "name": "poolsCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "ConstantProductPoolFactoryHelper": {
          "address": "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "constantProductPoolFactory",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "tokens",
                  "type": "address[]"
                }
              ],
              "name": "getPoolsForTokens",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint8",
                      "name": "tokenA",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint8",
                      "name": "tokenB",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve0",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve1",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint16",
                      "name": "swapFeeAndTwapSupport",
                      "type": "uint16"
                    }
                  ],
                  "internalType": "struct ConstantProductPoolFactoryHelper.ConstantProductPoolInfo[]",
                  "name": "poolInfos",
                  "type": "tuple[]"
                },
                {
                  "internalType": "uint256",
                  "name": "length",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "MasterDeployer": {
          "address": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "_barFeeTo",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_bento",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidBarFee",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWhitelisted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "AddToWhitelist",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "barFeeTo",
                  "type": "address"
                }
              ],
              "name": "BarFeeToUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "barFee",
                  "type": "uint256"
                }
              ],
              "name": "BarFeeUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "DeployPool",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "RemoveFromWhitelist",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "addToWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFeeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "removeFromWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "renounceOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                }
              ],
              "name": "setBarFee",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_barFeeTo",
                  "type": "address"
                }
              ],
              "name": "setBarFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "whitelistedFactories",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "TridentRouter": {
          "address": "0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bento",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "IncorrectSlippageParams",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotEnoughLiquidityMinted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWethSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "TooLittleReceived",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "native",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct ITridentRouter.TokenInput[]",
                  "name": "tokenInput",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "minLiquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "addLiquidity",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "approveMasterContract",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IPool.TokenAmount[]",
                  "name": "minWithdrawals",
                  "type": "tuple[]"
                }
              ],
              "name": "burnLiquidity",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "internalType": "uint256",
                  "name": "minWithdrawal",
                  "type": "uint256"
                }
              ],
              "name": "burnLiquiditySingle",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "native",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.InitialPath[]",
                      "name": "initialPath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "uint64",
                          "name": "balancePercentage",
                          "type": "uint64"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.PercentagePath[]",
                      "name": "percentagePath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "token",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "unwrapBento",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "minAmount",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Output[]",
                      "name": "output",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ComplexPathParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "complexPath",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInput",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingle",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingleWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "maxChangeAmount",
                  "type": "uint256"
                }
              ],
              "name": "harvest",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "fromBento",
                  "type": "bool"
                }
              ],
              "name": "sweep",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                }
              ],
              "name": "unwrapWETH",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "stateMutability": "payable",
              "type": "receive"
            }
          ]
        },
        "TridentSushiRollCP": {
          "address": "0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IPoolFactory",
                  "name": "_poolFactoryCP",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "MinimumOutput",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IConstantProductPool",
                  "name": "currentPool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken0Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken1Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minLpReceived",
                  "type": "uint256"
                }
              ],
              "name": "migrateCP",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IUniswapV2Minimal",
                  "name": "pair",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken0Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken1Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minLpReceived",
                  "type": "uint256"
                }
              ],
              "name": "migrateLegacyToCP",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "poolFactoryCP",
              "outputs": [
                {
                  "internalType": "contract IPoolFactory",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "2222": [
    {
      "name": "kava",
      "chainId": "2222",
      "contracts": {
        "ConstantProductPoolFactory": {
          "address": "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidTokenOrder",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "UnauthorisedDeployer",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bytecodeHash",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                }
              ],
              "name": "calculatePoolAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "name": "configAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getDeployData",
              "outputs": [
                {
                  "internalType": "bytes",
                  "name": "",
                  "type": "bytes"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "startIndex",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "name": "getPools",
              "outputs": [
                {
                  "internalType": "address[]",
                  "name": "pairPools",
                  "type": "address[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token0",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "token1",
                  "type": "address"
                }
              ],
              "name": "poolsCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "count",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "ConstantProductPoolFactoryHelper": {
          "address": "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "constantProductPoolFactory",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "tokens",
                  "type": "address[]"
                }
              ],
              "name": "getPoolsForTokens",
              "outputs": [
                {
                  "components": [
                    {
                      "internalType": "uint8",
                      "name": "tokenA",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint8",
                      "name": "tokenB",
                      "type": "uint8"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve0",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint112",
                      "name": "reserve1",
                      "type": "uint112"
                    },
                    {
                      "internalType": "uint16",
                      "name": "swapFeeAndTwapSupport",
                      "type": "uint16"
                    }
                  ],
                  "internalType": "struct ConstantProductPoolFactoryHelper.ConstantProductPoolInfo[]",
                  "name": "poolInfos",
                  "type": "tuple[]"
                },
                {
                  "internalType": "uint256",
                  "name": "length",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "MasterDeployer": {
          "address": "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "_barFeeTo",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_bento",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "InvalidBarFee",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWhitelisted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "ZeroAddress",
              "type": "error"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "AddToWhitelist",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "barFeeTo",
                  "type": "address"
                }
              ],
              "name": "BarFeeToUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "barFee",
                  "type": "uint256"
                }
              ],
              "name": "BarFeeUpdated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "DeployPool",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                }
              ],
              "name": "RemoveFromWhitelist",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "addToWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFee",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "barFeeTo",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "_deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "pools",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_factory",
                  "type": "address"
                }
              ],
              "name": "removeFromWhitelist",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "renounceOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_barFee",
                  "type": "uint256"
                }
              ],
              "name": "setBarFee",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_barFeeTo",
                  "type": "address"
                }
              ],
              "name": "setBarFeeTo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "whitelistedFactories",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        "TridentRouter": {
          "address": "0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bento",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_wETH",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "IncorrectSlippageParams",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotEnoughLiquidityMinted",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "NotWethSender",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "TooLittleReceived",
              "type": "error"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "bool",
                      "name": "native",
                      "type": "bool"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct ITridentRouter.TokenInput[]",
                  "name": "tokenInput",
                  "type": "tuple[]"
                },
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "minLiquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "addLiquidity",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "approveMasterContract",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "bento",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "token",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct IPool.TokenAmount[]",
                  "name": "minWithdrawals",
                  "type": "tuple[]"
                }
              ],
              "name": "burnLiquidity",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "pool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "internalType": "uint256",
                  "name": "minWithdrawal",
                  "type": "uint256"
                }
              ],
              "name": "burnLiquiditySingle",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "native",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "amount",
                          "type": "uint256"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.InitialPath[]",
                      "name": "initialPath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "tokenIn",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "uint64",
                          "name": "balancePercentage",
                          "type": "uint64"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.PercentagePath[]",
                      "name": "percentagePath",
                      "type": "tuple[]"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "token",
                          "type": "address"
                        },
                        {
                          "internalType": "address",
                          "name": "to",
                          "type": "address"
                        },
                        {
                          "internalType": "bool",
                          "name": "unwrapBento",
                          "type": "bool"
                        },
                        {
                          "internalType": "uint256",
                          "name": "minAmount",
                          "type": "uint256"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Output[]",
                      "name": "output",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ComplexPathParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "complexPath",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "factory",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "deployData",
                  "type": "bytes"
                }
              ],
              "name": "deployPool",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInput",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingle",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "internalType": "address",
                      "name": "pool",
                      "type": "address"
                    },
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "bytes",
                      "name": "data",
                      "type": "bytes"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputSingleParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputSingleWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "tokenIn",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountIn",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amountOutMinimum",
                      "type": "uint256"
                    },
                    {
                      "components": [
                        {
                          "internalType": "address",
                          "name": "pool",
                          "type": "address"
                        },
                        {
                          "internalType": "bytes",
                          "name": "data",
                          "type": "bytes"
                        }
                      ],
                      "internalType": "struct ITridentRouter.Path[]",
                      "name": "path",
                      "type": "tuple[]"
                    }
                  ],
                  "internalType": "struct ITridentRouter.ExactInputParams",
                  "name": "params",
                  "type": "tuple"
                }
              ],
              "name": "exactInputWithNativeToken",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "maxChangeAmount",
                  "type": "uint256"
                }
              ],
              "name": "harvest",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "fromBento",
                  "type": "bool"
                }
              ],
              "name": "sweep",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                }
              ],
              "name": "unwrapWETH",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "stateMutability": "payable",
              "type": "receive"
            }
          ]
        },
        "TridentSushiRollCP": {
          "address": "0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "_bentoBox",
                  "type": "address"
                },
                {
                  "internalType": "contract IPoolFactory",
                  "name": "_poolFactoryCP",
                  "type": "address"
                },
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "_masterDeployer",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "inputs": [],
              "name": "MinimumOutput",
              "type": "error"
            },
            {
              "inputs": [],
              "name": "bentoBox",
              "outputs": [
                {
                  "internalType": "contract IBentoBoxMinimal",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "masterDeployer",
              "outputs": [
                {
                  "internalType": "contract IMasterDeployer",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IConstantProductPool",
                  "name": "currentPool",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken0Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken1Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minLpReceived",
                  "type": "uint256"
                }
              ],
              "name": "migrateCP",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IUniswapV2Minimal",
                  "name": "pair",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "swapFee",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "twapSupport",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken0Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minToken1Received",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minLpReceived",
                  "type": "uint256"
                }
              ],
              "name": "migrateLegacyToCP",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "liquidity",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "data",
                  "type": "bytes[]"
                }
              ],
              "name": "multicall",
              "outputs": [
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "poolFactoryCP",
              "outputs": [
                {
                  "internalType": "contract IPoolFactory",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowed",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiry",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitAllowedIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "selfPermitIfNecessary",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            }
          ]
        }
      }
    }
  ],
  "31337": [
    {
      "name": "localhost",
      "chainId": "31337",
      "contracts": {
        "BentoBoxV1": {
          "address": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          "abi": [
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "wethToken_",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "masterContract",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "cloneAddress",
                  "type": "address"
                }
              ],
              "name": "LogDeploy",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogDeposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "borrower",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "feeAmount",
                  "type": "uint256"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "receiver",
                  "type": "address"
                }
              ],
              "name": "LogFlashLoan",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "protocol",
                  "type": "address"
                }
              ],
              "name": "LogRegisterProtocol",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "masterContract",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "LogSetMasterContractApproval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "LogStrategyDivest",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "LogStrategyInvest",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "LogStrategyLoss",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "LogStrategyProfit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "contract IStrategy",
                  "name": "strategy",
                  "type": "address"
                }
              ],
              "name": "LogStrategyQueued",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "contract IStrategy",
                  "name": "strategy",
                  "type": "address"
                }
              ],
              "name": "LogStrategySet",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "targetPercentage",
                  "type": "uint256"
                }
              ],
              "name": "LogStrategyTargetPercentage",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogTransfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "masterContract",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "LogWhiteListMasterContract",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "LogWithdraw",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "inputs": [],
              "name": "DOMAIN_SEPARATOR",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes[]",
                  "name": "calls",
                  "type": "bytes[]"
                },
                {
                  "internalType": "bool",
                  "name": "revertOnFail",
                  "type": "bool"
                }
              ],
              "name": "batch",
              "outputs": [
                {
                  "internalType": "bool[]",
                  "name": "successes",
                  "type": "bool[]"
                },
                {
                  "internalType": "bytes[]",
                  "name": "results",
                  "type": "bytes[]"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IBatchFlashBorrower",
                  "name": "borrower",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "receivers",
                  "type": "address[]"
                },
                {
                  "internalType": "contract IERC20[]",
                  "name": "tokens",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "amounts",
                  "type": "uint256[]"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "batchFlashLoan",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "claimOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "masterContract",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "internalType": "bool",
                  "name": "useCreate2",
                  "type": "bool"
                }
              ],
              "name": "deploy",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "cloneAddress",
                  "type": "address"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token_",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "deposit",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shareOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IFlashBorrower",
                  "name": "borrower",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "receiver",
                  "type": "address"
                },
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "flashLoan",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "balance",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "maxChangeAmount",
                  "type": "uint256"
                }
              ],
              "name": "harvest",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "masterContractApproved",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "masterContractOf",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "nonces",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "pendingOwner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "pendingStrategy",
              "outputs": [
                {
                  "internalType": "contract IStrategy",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "permitToken",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "registerProtocol",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "user",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "masterContract",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                },
                {
                  "internalType": "uint8",
                  "name": "v",
                  "type": "uint8"
                },
                {
                  "internalType": "bytes32",
                  "name": "r",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "s",
                  "type": "bytes32"
                }
              ],
              "name": "setMasterContractApproval",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "contract IStrategy",
                  "name": "newStrategy",
                  "type": "address"
                }
              ],
              "name": "setStrategy",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint64",
                  "name": "targetPercentage_",
                  "type": "uint64"
                }
              ],
              "name": "setStrategyTargetPercentage",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "strategy",
              "outputs": [
                {
                  "internalType": "contract IStrategy",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "strategyData",
              "outputs": [
                {
                  "internalType": "uint64",
                  "name": "strategyStartDate",
                  "type": "uint64"
                },
                {
                  "internalType": "uint64",
                  "name": "targetPercentage",
                  "type": "uint64"
                },
                {
                  "internalType": "uint128",
                  "name": "balance",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "roundUp",
                  "type": "bool"
                }
              ],
              "name": "toAmount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "roundUp",
                  "type": "bool"
                }
              ],
              "name": "toShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "totals",
              "outputs": [
                {
                  "internalType": "uint128",
                  "name": "elastic",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "base",
                  "type": "uint128"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address[]",
                  "name": "tos",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "shares",
                  "type": "uint256[]"
                }
              ],
              "name": "transferMultiple",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "direct",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "renounce",
                  "type": "bool"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "masterContract",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "approved",
                  "type": "bool"
                }
              ],
              "name": "whitelistMasterContract",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "whitelistedMasterContracts",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "token_",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "share",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shareOut",
                  "type": "uint256"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "stateMutability": "payable",
              "type": "receive"
            }
          ]
        },
        "WETH9": {
          "address": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          "abi": [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "dst",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
                }
              ],
              "name": "Deposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "src",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
                }
              ],
              "name": "Withdrawal",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "subtractedValue",
                  "type": "uint256"
                }
              ],
              "name": "decreaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "addedValue",
                  "type": "uint256"
                }
              ],
              "name": "increaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "wad",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "stateMutability": "payable",
              "type": "receive"
            }
          ]
        }
      }
    },
    {
      "name": "hardhat",
      "chainId": "31337",
      "contracts": {}
    }
  ]
}
// returns null on errors
export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { library, account, chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null
    let address: string | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId]
    if (!address) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWETH9Contract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? WNATIVE_ADDRESS[chainId] : undefined, WETH9_ABI, withSignerIfPossible)
}

export function useArgentWalletDetectorContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(
    chainId === ChainId.ETHEREUM ? ARGENT_WALLET_DETECTOR_MAINNET_ADDRESS : undefined,
    ARGENT_WALLET_DETECTOR_ABI,
    false
  )
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? ENS_REGISTRAR_ADDRESS[chainId] : undefined, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(pairAddress, IUniswapV2PairABI, withSignerIfPossible)
}

export function useMerkleDistributorContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? MERKLE_DISTRIBUTOR_ADDRESS[chainId] : undefined, MERKLE_DISTRIBUTOR_ABI, true)
}

export function useProtocolMerkleDistributorContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? '0x1026cbed7b7E851426b959BC69dcC1bf5876512d' : undefined, MERKLE_DISTRIBUTOR_ABI, true)
}

export function useKashiRepositoryContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? '0x400AFAbFB249210E08A8dfC429FfE20d32245f57' : undefined, KASHI_REPOSITORY_ABI, false)
}

export function useBoringHelperContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  // TODO ramin update in sdk
  return useContract(
    chainId
      ? chainId === ChainId.KOVAN
        ? '0x5bd6e4eFA335192FDA5D6B42a344ccA3d45894B8'
        : BORING_HELPER_ADDRESS[chainId]
      : undefined,
    BORING_HELPER_ABI,
    false
  )
}

export function useMulticall2Contract() {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? MULTICALL2_ADDRESS[chainId] : undefined, MULTICALL2_ABI, false)
}

const MULTICALL_ADDRESS = {
  [ChainId.ETHEREUM]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.ROPSTEN]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.RINKEBY]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [204]: '0xe0D5583B69957a10594d6c0e6c58C6A116264B1E',
  [ChainId.GÖRLI]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.KOVAN]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.MATIC]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.MATIC_TESTNET]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.OPTIMISM]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.ARBITRUM]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [ChainId.MOONBEAM]: '0x34c471ddceb20018bbb73f6d13709936fc870acc',
  [ChainId.AVALANCHE]: '0x8C0F842791F03C095b6c633759224FcC9ACe68ea',
  [ChainId.BSC]: '0x47A307e3167820daf22a377D777371753758f59c',
  [ChainId.FANTOM]: '0xB1395e098c0a847CC719Bcf1Fc8114421a9F8232',
  [ChainId.CELO]: '0x3d0B3b816DC1e0825808F27510eF7Aa5E3136D75',
  [ChainId.HARMONY]: '0xaAB49386BFcB605F853763Ea382B91C9c83b9Ac5',
  [ChainId.MOONRIVER]: '0x8C8BF5Dea280A1eC68219D66E8A21E60585830F5',
  [ChainId.XDAI]: '0x2B75358D07417D4e895c952Ca84A44E63AEBE3Dd',
  [ChainId.TELOS]: '0x64e1E895866B3126f8f2E2912B475FDB35b2F315',
  [ChainId.FUSE]: '0x393B6DC9B00E18314888678721eC0e923FC5f49D',
  [ChainId.OKEX]: '0x8C8BF5Dea280A1eC68219D66E8A21E60585830F5',
  [ChainId.HECO]: '0x64e1E895866B3126f8f2E2912B475FDB35b2F315',
  [ChainId.PALM]: '0x4d4A0D45a98AE8EC25b359D93A088A87BC9eF70b',
  [ChainId.KAVA]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [ChainId.METIS]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [ChainId.ARBITRUM_NOVA]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.BOBA_AVAX]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
}

export function useInterfaceMulticall(): Contract | null | undefined {
  return useContract(MULTICALL_ADDRESS, MULTICALL_ABI, false)
}

export function useSushiContract(withSignerIfPossible = true): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? SUSHI_ADDRESS[chainId] : undefined, SUSHI_ABI, withSignerIfPossible)
}

export function useMasterChefContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? MASTERCHEF_ADDRESS[chainId] : undefined, MASTERCHEF_ABI, withSignerIfPossible)
}

export function useMasterChefV2Contract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? MASTERCHEF_V2_ADDRESS[chainId] : undefined, MASTERCHEF_V2_ABI, withSignerIfPossible)
}
export function useMiniChefContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? MINICHEF_ADDRESS[chainId] : undefined, MINICHEF_ABI, withSignerIfPossible)
}

export function useFactoryContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? chainId === 204
      ? '0xa7408904620F14C4FEB898c8c20c2189636d4009'
      //@ts-ignore
      : FACTORY_ADDRESS[chainId] : undefined, FACTORY_ABI, false)
}

export function useRouterContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  // @ts-ignore TYPE NEEDS FIXING
  return useContract(chainId === 204
      ? '0xEE5128f6c8e2cdfb1e5f2A01fe470aCe680aF85c'
      //@ts-ignore
      : ROUTER_ADDRESS[chainId], ROUTER_ABI, withSignerIfPossible)
}

export function useSushiBarContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? BAR_ADDRESS[chainId] : undefined, BAR_ABI, withSignerIfPossible)
}

export function useMakerContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? MAKER_ADDRESS[chainId] : undefined, MAKER_ABI, false)
}

export function useTimelockContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? TIMELOCK_ADDRESS[chainId] : undefined, TIMELOCK_ABI, false)
}

export function useBentoBoxContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? BENTOBOX_ADDRESS[chainId] : undefined, BENTOBOX_ABI, withSignerIfPossible)
}

export function useChainlinkOracle(): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? CHAINLINK_ORACLE_ADDRESS[chainId] : undefined, CHAINLINK_ORACLE_ABI, false)
}

export function useUniV2FactoryContract(): Contract | null {
  return useContract(UNI_FACTORY_ADDRESS, UNI_FACTORY_ABI, false)
}

// @ts-ignore TYPE NEEDS FIXING
export function useComplexRewarderContract(address, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, COMPLEX_REWARDER_ABI, withSignerIfPossible)
}

// @ts-ignore TYPE NEEDS FIXING
export function useCloneRewarderContract(address, withSignerIfPossibe?: boolean): Contract | null {
  return useContract(address, CLONE_REWARDER_ABI, withSignerIfPossibe)
}

export function useMeowshiContract(withSignerIfPossible?: boolean): Contract | null {
  return useContract('0x650F44eD6F1FE0E1417cb4b3115d52494B4D9b6D', MEOWSHI_ABI, withSignerIfPossible)
}

export function useLimitOrderContract(withSignerIfPossibe?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? STOP_LIMIT_ORDER_ADDRESS[chainId] : undefined, LIMIT_ORDER_ABI, withSignerIfPossibe)
}

export function useLimitOrderHelperContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(
    chainId ? LIMIT_ORDER_HELPER_ADDRESS[chainId] : undefined,
    LIMIT_ORDER_HELPER_ABI,
    withSignerIfPossible
  )
}

export function useInariContract(withSignerIfPossible?: boolean): Contract | null {
  return useContract('0x195E8262AA81Ba560478EC6Ca4dA73745547073f', INARI_ABI, withSignerIfPossible)
}

export function useZenkoContract(withSignerIfPossible?: boolean): Contract | null {
  return useContract('0xa8f676c49f91655ab3b7c3ea2b73bb3088b2bc1f', ZENKO_ABI, withSignerIfPossible)
}

export function useTridentMigrationContract() {
  const { chainId } = useActiveWeb3React()
  return useContract(
    chainId ? (TRIDENT as any)[chainId][0].contracts.TridentSushiRollCP.address : undefined,
    chainId ? (TRIDENT as any)[chainId][0].contracts.TridentSushiRollCP.abi : undefined
  )
}

export function useTridentPoolContract(pool?: Pool, withSignerIfPossible?: boolean) {
  let artifact
  if (pool && poolEntityMapper(pool) === PoolType.ConstantProduct) artifact = ConstantProductPoolArtifact
  if (pool && poolEntityMapper(pool) !== PoolType.ConstantProduct) {
    throw new Error('Implement new pool type')
  }

  return useContract(pool?.liquidityToken.address ?? undefined, artifact?.abi, withSignerIfPossible)
}

export function useTridentRouterContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  // @ts-ignore TYPE NEEDS FIXING
  const router = TRIDENT[chainId]?.[0]?.contracts.TridentRouter
  return useContract(router?.address, router?.abi, withSignerIfPossible)
}

export function useMasterDeployerContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  // @ts-ignore TYPE NEEDS FIXING
  const masterDeployer = TRIDENT[chainId]?.[0]?.contracts.MasterDeployer
  return useContract(masterDeployer?.address, masterDeployer?.abi, withSignerIfPossible)
}

export function useConstantProductPoolFactory(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  // @ts-ignore TYPE NEEDS FIXING
  const factory = TRIDENT[chainId]?.[0]?.contracts.ConstantProductPoolFactory
  return useContract(factory?.address, factory?.abi, withSignerIfPossible)
}

export function useStablePoolFactory(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  // @ts-ignore TYPE NEEDS FIXING
  const factory = TRIDENT[chainId]?.[0]?.contracts.HybridPoolFactory
  return useContract(factory?.address, factory?.abi, withSignerIfPossible)
}

export function useMisoHelperContract(withSignerIfPossible = true): Contract | null {
  const { chainId } = useActiveWeb3React()
  // @ts-ignore TYPE NEEDS FIXING
  const factory = MISO[chainId]?.[CHAIN_KEY[chainId]]?.contracts.MISOHelper
  return useContract(factory?.address, MISO_HELPER_ABI, withSignerIfPossible)
}

export function useSushiRollContract(dex: LPToken['dex']): Contract | null {
  const { chainId } = useActiveWeb3React()
  let address: string | undefined
  if (chainId) {
    switch (chainId) {
      case ChainId.ETHEREUM:
        if (dex === 'uniswap_v2') {
          address = '0x16E58463eb9792Bc236d8860F5BC69A81E26E32B'
        }

        break
      case ChainId.ROPSTEN:
        address = '0xCaAbdD9Cf4b61813D4a52f980d6BC1B713FE66F5'
        break
      case ChainId.BSC:
        if (dex === 'pancakeswap_v2') {
          address = '0x2DD1aB1956BeD7C2d938d0d7378C22Fd01135a5e'
        }
        break
      case ChainId.MATIC:
        if (dex === 'quickswap') {
          address = '0x0053957E18A0994D3526Cf879A4cA7Be88e8936A'
        }
        break
      case ChainId.FANTOM:
        if (dex === 'spiritswap') {
          address = '0x2D2ed6871f473Fb9f8958F67C2302360A79fd071'
        } else if (dex === 'spookyswap') {
          address = '0xFB232C6D1E3ad48fEdF8A29c7dEf7A33ce43E56a'
        }
        break
      case ChainId.AVALANCHE:
        if (dex === 'traderjoe') {
          address = '0x22a2fBd8bd1123bC3307554AD00bBFF4EDAbB1d5'
        } else if (dex === 'pangolin') {
          address = '0x34F1cC395BeE698d070f33C1c0f8EC4C1022bcFc'
        }

      case ChainId.MOONBEAM:
        if (dex === 'stellaswap') {
          address = '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3'
        } else if (dex === 'beamswap') {
          address = '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287'
        }
      // Spookyswap
      // 0xFB232C6D1E3ad48fEdF8A29c7dEf7A33ce43E56a
    }
  }
  return useContract(address, SUSHIROLL_ABI, true)
}

export function useDashboardContract(): Contract | null {
  const { chainId } = useActiveWeb3React()
  let address: string | undefined
  if (chainId) {
    switch (chainId) {
      case ChainId.ETHEREUM:
        address = '0xD132Ce8eA8865348Ac25E416d95ab1Ba84D216AF'
        break
      case ChainId.ROPSTEN:
        address = '0xC95678C10CB8b3305b694FF4bfC14CDB8aD3AB35'
        break
      case ChainId.BSC:
        address = '0xCFbc963f223e39727e7d4075b759E97035457b48'
        break
    }
  }
  return useContract(address, DASHBOARD_ABI, false)
}

export function useQuickSwapFactoryContract(): Contract | null {
  return useContract('0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32', FACTORY_ABI, false)
}

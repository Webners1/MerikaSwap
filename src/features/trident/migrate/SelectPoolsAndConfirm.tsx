import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
//@ts-ignore
// import EXPORTS from '@sushiswap/trident/exports/all.json'
import Button from 'app/components/Button'
import Dots from 'app/components/Dots'
import { LoadingSpinner } from 'app/components/LoadingSpinner'
import { SelectTridentPoolPanel } from 'app/components/Migrate/SelectTridentPoolPanel'
import { migrateGridLayoutCss } from 'app/features/trident/migrate/AvailableToMigrate'
import {
  addSLPPermit,
  editMigration,
  MigrationSource,
  selectLeftToChoose,
  selectTridentMigrations,
} from 'app/features/trident/migrate/context/migrateSlice'
import { useExecuteTridentMigration } from 'app/features/trident/migrate/context/useExecuteTridentMigration'
import { MigrationTransactionModal } from 'app/features/trident/migrate/MigrationTransactionModal'
import { SlippageWidget } from 'app/features/trident/migrate/SlippageWidget'
import TridentApproveGate from 'app/features/trident/TridentApproveGate'
import { useGetAllTridentPools } from 'app/services/graph/hooks/pools'
import { useActiveWeb3React } from 'app/services/web3'
import { useAppDispatch, useAppSelector } from 'app/state/hooks'
import { useTokenBalances } from 'app/state/wallet/hooks'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Typography from '../../../components/Typography'


const EXPORTS = {
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

export const SelectPoolsAndConfirm: FC = () => {
  const { i18n } = useLingui()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const selectedMigrations = useAppSelector(selectTridentMigrations)
  /* Need to select pools on previous page */
  if (selectedMigrations.length === 0) router.replace('/trident/migrate')
  const leftToSelect = useAppSelector(selectLeftToChoose)

  const { account, chainId } = useActiveWeb3React()

  const { data, error, isValidating } = useGetAllTridentPools({ chainId })

  const lpTokenAmounts = useTokenBalances(
    account ?? undefined,
    selectedMigrations.map((m) => m.v2Pair.liquidityToken)
  )
  const migrationContractAddress = chainId
    ? (EXPORTS as any)[chainId][0].contracts.TridentSushiRollCP.address
    : undefined

  const execute = useExecuteTridentMigration()

  return (
    <div>
      <MigrationTransactionModal />

      <div className="flex items-center gap-3">
        <Typography variant="h3" className="text-high-emphesis" weight={700}>
          {leftToSelect === 0 ? i18n._(t`All set ✅`) : i18n._(t`Pools left to select: ${leftToSelect}`)}
        </Typography>
        <LoadingSpinner active={isValidating} />
        {error && <span className="text-red">⚠️ Loading Error</span>}
      </div>
      {selectedMigrations.length > 0 && (
        <div className="flex flex-col">
          <div className={migrateGridLayoutCss}>
            {selectedMigrations.map((migration, i) => (
              <SelectTridentPoolPanel
                key={i}
                migration={migration}
                tridentPools={data ?? []}
                source={MigrationSource.SUSHI_V2}
                setFunc={(migration) => dispatch(editMigration({ indexToReplace: i, migration }))}
              />
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {leftToSelect !== 0 ? (
          <Button disabled={true}>{i18n._(t`Pools left to select: ${leftToSelect}`)}</Button>
        ) : (
          <TridentApproveGate
            inputAmounts={Object.values(lpTokenAmounts)}
            tokenApproveOn={migrationContractAddress}
            onSLPPermit={(permit) => dispatch(addSLPPermit(permit))}
          >
            {({ loading, approved }) => {
              if (loading)
                return (
                  <Button disabled={true}>
                    {i18n._(t`Loading`)}
                    <Dots />
                  </Button>
                )

              if (approved)
                return (
                  <>
                    <Button color="gradient" onClick={() => execute()}>
                      {i18n._(t`Confirm Migration`)}
                    </Button>
                    <SlippageWidget />
                  </>
                )
            }}
          </TridentApproveGate>
        )}
        <div
          className="text-center cursor-pointer text-blue md:text-left md:mt-3"
          onClick={() => router.replace('/trident/migrate')}
        >
          {i18n._(t`← Previous Step`)}
        </div>
      </div>
    </div>
  )
}

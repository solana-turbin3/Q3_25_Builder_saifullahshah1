import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor"

export type Turbin3Prereq = {
    "address": "TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM",
    "metadata": {
      "name": "q3_pre_reqs_rs",
      "version": "0.1.0",
      "spec": "0.1.0",
      "description": "Created with Anchor"
    },
    "instructions": [
      {
        "name": "close",
        "discriminator": [
          98,
          165,
          201,
          177,
          108,
          65,
          206,
          96
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true
          },
          {
            "name": "account",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      },
      {
        "name": "create_collection",
        "discriminator": [
          156,
          251,
          92,
          54,
          233,
          2,
          16,
          82
        ],
        "accounts": [
          {
            "name": "creator",
            "writable": true,
            "signer": true
          },
          {
            "name": "collection",
            "writable": true,
            "signer": true
          },
          {
            "name": "authority",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    108,
                    108,
                    101,
                    99,
                    116,
                    105,
                    111,
                    110
                  ]
                },
                {
                  "kind": "account",
                  "path": "collection"
                }
              ]
            }
          },
          {
            "name": "mpl_core_program",
            "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      },
      {
        "name": "initialize",
        "discriminator": [
          175,
          175,
          109,
          31,
          13,
          152,
          155,
          237
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "account",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "github",
            "type": "string"
          }
        ]
      },
      {
        "name": "submit_rs",
        "discriminator": [
          77,
          124,
          82,
          163,
          21,
          133,
          181,
          206
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "account",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "mint",
            "writable": true,
            "signer": true
          },
          {
            "name": "collection",
            "writable": true
          },
          {
            "name": "authority",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    108,
                    108,
                    101,
                    99,
                    116,
                    105,
                    111,
                    110
                  ]
                },
                {
                  "kind": "account",
                  "path": "collection"
                }
              ]
            }
          },
          {
            "name": "mpl_core_program",
            "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      },
      {
        "name": "submitTs",
        "discriminator": [
          137,
          241,
          199,
          223,
          125,
          33,
          85,
          217
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "account",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "mint",
            "writable": true,
            "signer": true
          },
          {
            "name": "collection",
            "writable": true
          },
          {
            "name": "authority",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    108,
                    108,
                    101,
                    99,
                    116,
                    105,
                    111,
                    110
                  ]
                },
                {
                  "kind": "account",
                  "path": "collection"
                }
              ]
            }
          },
          {
            "name": "mpl_core_program",
            "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      },
      {
        "name": "update",
        "discriminator": [
          219,
          200,
          88,
          176,
          158,
          63,
          253,
          127
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "account",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "github",
            "type": "string"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "ApplicationAccount",
        "discriminator": [
          222,
          181,
          17,
          200,
          212,
          149,
          64,
          88
        ]
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "PreReqTsNotCompleted",
        "msg": "TS submission not completed."
      },
      {
        "code": 6001,
        "name": "PreReqTsAlreadyCompleted",
        "msg": "TS submission already completed."
      },
      {
        "code": 6002,
        "name": "PreReqRsAlreadyCompleted",
        "msg": "Rust submission already completed."
      },
      {
        "code": 6003,
        "name": "PreReqRsNotInTimeWindow",
        "msg": "Submission not allowed."
      }
    ],
    "types": [
      {
        "name": "ApplicationAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "user",
              "type": "pubkey"
            },
            {
              "name": "bump",
              "type": "u8"
            },
            {
              "name": "pre_req_ts",
              "type": "bool"
            },
            {
              "name": "pre_req_rs",
              "type": "bool"
            },
            {
              "name": "github",
              "type": "string"
            }
          ]
        }
      }
    ]
  }

  export const IDL: Turbin3Prereq = {
    "address": "TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM",
    "metadata": {
      "name": "q3_pre_reqs_rs",
      "version": "0.1.0",
      "spec": "0.1.0",
      "description": "Created with Anchor"
    },
    "instructions": [
      {
        "name": "close",
        "discriminator": [
          98,
          165,
          201,
          177,
          108,
          65,
          206,
          96
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true
          },
          {
            "name": "account",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      },
      {
        "name": "create_collection",
        "discriminator": [
          156,
          251,
          92,
          54,
          233,
          2,
          16,
          82
        ],
        "accounts": [
          {
            "name": "creator",
            "writable": true,
            "signer": true
          },
          {
            "name": "collection",
            "writable": true,
            "signer": true
          },
          {
            "name": "authority",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    108,
                    108,
                    101,
                    99,
                    116,
                    105,
                    111,
                    110
                  ]
                },
                {
                  "kind": "account",
                  "path": "collection"
                }
              ]
            }
          },
          {
            "name": "mpl_core_program",
            "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      },
      {
        "name": "initialize",
        "discriminator": [
          175,
          175,
          109,
          31,
          13,
          152,
          155,
          237
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "account",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "github",
            "type": "string"
          }
        ]
      },
      {
        "name": "submit_rs",
        "discriminator": [
          77,
          124,
          82,
          163,
          21,
          133,
          181,
          206
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "account",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "mint",
            "writable": true,
            "signer": true
          },
          {
            "name": "collection",
            "writable": true
          },
          {
            "name": "authority",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    108,
                    108,
                    101,
                    99,
                    116,
                    105,
                    111,
                    110
                  ]
                },
                {
                  "kind": "account",
                  "path": "collection"
                }
              ]
            }
          },
          {
            "name": "mpl_core_program",
            "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      },
      {
        "name": "submitTs",
        "discriminator": [
          137,
          241,
          199,
          223,
          125,
          33,
          85,
          217
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "account",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "mint",
            "writable": true,
            "signer": true
          },
          {
            "name": "collection",
            "writable": true
          },
          {
            "name": "authority",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    108,
                    108,
                    101,
                    99,
                    116,
                    105,
                    111,
                    110
                  ]
                },
                {
                  "kind": "account",
                  "path": "collection"
                }
              ]
            }
          },
          {
            "name": "mpl_core_program",
            "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      },
      {
        "name": "update",
        "discriminator": [
          219,
          200,
          88,
          176,
          158,
          63,
          253,
          127
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "account",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    112,
                    114,
                    101,
                    114,
                    101,
                    113,
                    115
                  ]
                },
                {
                  "kind": "account",
                  "path": "user"
                }
              ]
            }
          },
          {
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "github",
            "type": "string"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "ApplicationAccount",
        "discriminator": [
          222,
          181,
          17,
          200,
          212,
          149,
          64,
          88
        ]
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "PreReqTsNotCompleted",
        "msg": "TS submission not completed."
      },
      {
        "code": 6001,
        "name": "PreReqTsAlreadyCompleted",
        "msg": "TS submission already completed."
      },
      {
        "code": 6002,
        "name": "PreReqRsAlreadyCompleted",
        "msg": "Rust submission already completed."
      },
      {
        "code": 6003,
        "name": "PreReqRsNotInTimeWindow",
        "msg": "Submission not allowed."
      }
    ],
    "types": [
      {
        "name": "ApplicationAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "user",
              "type": "pubkey"
            },
            {
              "name": "bump",
              "type": "u8"
            },
            {
              "name": "pre_req_ts",
              "type": "bool"
            },
            {
              "name": "pre_req_rs",
              "type": "bool"
            },
            {
              "name": "github",
              "type": "string"
            }
          ]
        }
      }
    ]
  }

const MPL_CORE_PROGRAM_ID = new
PublicKey("CoREENxTm7R94rH4PZNhX7d");


const wallet = [
    148,    206, 158, 160,   2,  20,  42, 139,  14, 171, 186, 237,
    243,  85,  67, 137, 113, 149, 173,  24,  10
  ]
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");

const provider = new AnchorProvider(connection, new Wallet(keypair), {
    commitment: "confirmed"});

    const program : Program<Turbin3Prereq> = new Program(IDL, provider);

    // Create the PDA for our enrollment account
const account_seeds = [
    Buffer.from("prereqs"),
    keypair.publicKey.toBuffer(),
    ];
    const [account_key, _account_bump] =
    PublicKey.findProgramAddressSync(account_seeds, program.programId);

    const mintCollection = new
PublicKey("5ebsp5RChCGKbNaotcZ5UvytN2");

const mintTs = Keypair.generate();

const SYSTEM_PROGRAM_ID = new PublicKey("11111111111111111111111111111111");

// // Execute the initialize transaction
// (async () => {
//     try {
//     const txhash = await program.methods
//     .initialize("saifullahshah1")
//     .accountsPartial({
//     user: keypair.publicKey,
//     account: account_key,
//     system_program: SYSTEM_PROGRAM_ID,
//     })
//     .signers([keypair])
//     .rpc();
//     console.log(`Success! Check out your TX here:
//     https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
//     } catch (e) {
//     console.error(`Oops, something went wrong: ${e}`);
//     }
//     })();

    (async () => {
        try {
        const txhash = await program.methods
        .submitTs()
        .accountsPartial({
        user: keypair.publicKey,
        account: account_key,
        mint: mintTs.publicKey,
        collection: mintCollection,
        mpl_core_program: MPL_CORE_PROGRAM_ID,
        system_program: SYSTEM_PROGRAM_ID,
    })
    .signers([keypair, mintTs])
    .rpc();
    console.log(`Success! Check out your TX here:
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
}
})();

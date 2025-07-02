import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import wallet from "../turbin3-wallet.json"

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const token_decimals = 1_000_000n;

// Mint address
const mint = new PublicKey("FZGVUe3REDxMUgVULefCpnaiykNtTYC4DKumr1YVGi5c");

(async () => {
    try {
        // Create an ATA
        const ata = await getOrCreateAssociatedTokenAccount(
            connection, 
            keypair,
            mint,
            keypair.publicKey,
            true,
            commitment,
        )


        console.log(`Your ata is: ${ata.address.toBase58()}`); // 7eB7q1uqwobVeZ9ReUeZVrzRgr3YX5nrsnatavGDinoD

        // Mint to ATA
        const mintTx = await mintTo(
            connection,
            keypair,
            mint,
            ata.address,
            keypair.publicKey,
            100n * token_decimals,
        )

        console.log(`Your mint txid: ${mintTx}`); // 2RAP8pjGTu8RxWts4Y94Hz73CtoaDzspJVdKW6NXdipdjzvi4jaFAt7MnDKNYnHJWquFCSEGTF4CVAyXpW5azFX7
    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()

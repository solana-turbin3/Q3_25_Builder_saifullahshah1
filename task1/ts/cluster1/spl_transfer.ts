import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import wallet from "../turbin3-wallet.json"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("FZGVUe3REDxMUgVULefCpnaiykNtTYC4DKumr1YVGi5c");

// Recipient address
const to = new PublicKey("CyJgfV19ut3SkSnVbv18GNVswSMr3oEqjBGgMz7cqNYJ");

(async () => {
    try {
        // Get the token account of the fromWallet address, and if it does not exist, create it
        const from = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            keypair.publicKey,
        )

        // Get the token account of the toWallet address, and if it does not exist, create it
        const toReceiver = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            to
        )

        // Transfer the new token to the "toTokenAccount" we just created
        const tx = await transfer(
            connection,
            keypair,
            from.address,
            toReceiver.address,
            keypair.publicKey, 
            50n * 1_000_000n
        )

        console.log(`Transaction id: ${tx}`) // 5DFdQZ3b3JFYxw5joC32b5shjFoG9S96WKeoNMGorginjiFzXZhUTMGggTmrr5ZWrTz2ohoo1xrLnDFwQPajVPwR
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();
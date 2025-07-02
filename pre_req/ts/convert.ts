import bs58 from 'bs58';

function base58ToWallet(): void {
    const base58String: string = 'guyguugug7go87g87';
    const base58StringDevnet : string = 'guyguyuguguyguygu';

    try {
        const wallet: Uint8Array = bs58.decode(base58StringDevnet);
        console.log(Array.from(wallet));
    } catch (error) {
        console.error('Error decoding base58:', error);
    }
}

base58ToWallet();
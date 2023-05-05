import { useQuery} from '@tanstack/react-query'
import { BigNumber } from 'ethers'
import Web3 from 'web3'
import { FlipCoin } from '../components/constants/flipCoin';
import coinFlipContract from "@/common/abi/json/CoinFlip.json"
import { toEther } from '../components/MainSection/MainMiddle';
import { AbiItem } from 'web3-utils'

const Wrb3 = require('web3');
const rpcUrl= "https://eth-sepolia.g.alchemy.com/v2/qMQVuCB9xu8P0oObjoXHiG13BLCClHs3";
const web3 = new Web3(rpcUrl);

export const useMaxPayouts = () => {
    return useQuery({
        queryKey:[ "maxPayout"],
        queryFn: async () => {
            const coinFlip = new web3.eth.Contract(
                coinFlipContract.abi as AbiItem[],
                FlipCoin.address,
              )
            let data = "0"
            await coinFlip.methods
                .maxPayout()
                .call((err: unknown, res:BigNumber) =>{
                    if(!err){
                        data= toEther(res)
                    }
                })
                return data
        },
    })
}
export const usePastEvents = () => {
    return useQuery({
        queryKey:[ "pastEvents"],
        queryFn: async () => {
            const coinFlip = new web3.eth.Contract(
                coinFlipContract.abi as AbiItem[],
                FlipCoin.address,
              )
            await coinFlip.getPastEvents(
                "CoinFlipped",
                {
                    fromBlock: 0,
                    toBlock: "latest",
                }
            )
        },
    })
}
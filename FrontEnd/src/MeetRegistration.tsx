import {useState} from "react";

export const MeetRegistration = ({web3, MeetContract, MeetFee}) => {
    const [email, setEmail] = useState('');

    const payForMeet = async () => {
        if (!web3 || !MeetContract) return;

        const accounts = await web3.eth.getAccounts();
        MeetContract.methods.payForMeet(email).send({ from: accounts[0], value: web3.utils.toWei(MeetFee, 'ether') })
            .on('transactionHash', hash => {
                console.log('Transaction hash:', hash);
            })
            .on('receipt', receipt => {
                console.log('Transaction successful:', receipt);
            })
            .on('error', error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            Schedule a meet
            <br/>
            <h1>Meet Registration</h1>
            <p>Meet Fee: {MeetFee} ETH</p>
            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={payForMeet}>Pay for Meet</button>
        </div>
    );
};

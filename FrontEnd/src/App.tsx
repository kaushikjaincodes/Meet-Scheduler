import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {contractABI} from "./abi";
import {Admin} from "./Admin";
import {MeetRegistration} from "./MeetRegistration";

function App() {
    const [web3, setWeb3] = useState(null);
    const [MeetContract, setMeetContract] = useState(null);
    const [MeetFee, setMeetFee] = useState('');
    const contractAddress = '';

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(() => {
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);

                    const MeetInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
                    setMeetContract(MeetInstance);

                    MeetInstance.methods.MeetFee().call()
                        .then(fee => {
                            setMeetFee(web3Instance.utils.fromWei(fee, 'ether'));
                        });
                })
                .catch(err => {
                    // Handle error if the user rejects the connection request
                    console.error(err);
                });
        } else {
            alert('Please install an another Ethereum wallet.');
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MeetRegistration web3={web3} MeetContract={MeetContract} MeetFee={MeetFee} />} />
                <Route path="admin" element={<Admin web3={web3} MeetContract={MeetContract} MeetFee={MeetFee} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

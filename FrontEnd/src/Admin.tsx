import {useEffect, useState} from "react";


export function Admin({web3, MeetContract}) {
    const [payments, setPayments] = useState([]);

    const init = () => {
        if (!web3 || !MeetContract) return;
        console.log(MeetContract.methods.payments);

        MeetContract.methods.getAllPayments().call()
            .then(values => {
                setPayments(values)
            });
    }

    useEffect(() => {
        if (web3 && MeetContract) {
            init();
        }
    }, [web3, MeetContract]);

    return (
        <div>
            <h1>Admin</h1>
            Total {payments.length} people have bought the Meet!
            {payments.map(payment => (
                <div key={payment.email}>
                    <p>Email: {payment.email}</p>
                </div>
            ))}
        </div>
    )
}
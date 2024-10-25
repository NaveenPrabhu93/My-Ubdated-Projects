import { useState, useEffect } from "react";


export default function POS() {

    const [Burger, setBurger] = useState("");
    const [itemsBurger, setitemsBurger] = useState(0);
    const [countBurger, setCountBurger] = useState(0);

    const [Sanwitch, setSanwitch] = useState("")
    const [itemsSandwitch, setitemsSandwitch] = useState(0);
    const [countSandwitch, setCountSandwitch] = useState(0);

    const [Pizza, setPizza] = useState("")
    const [itemsPizza, setitemsPizza] = useState(0);
    const [countPizza, setCountPizza] = useState(0);

    const [Pastha, setPastha] = useState("")
    const [itemsPastha, setitemsPastha] = useState(0);
    const [countPastha, setCountPastha] = useState(0);

    const [Noodles, setNoodels] = useState("")
    const [itemsNoodels, setitemsNoodels] = useState(0);
    const [countNoodels, setCountNoodels] = useState(0);




    const showBurger = () => {
        setBurger("Burger:");
        setCountBurger((c) => c + 50)
        setitemsBurger((c) => c + 1)

    };
    const handleminusBurger = () => {
        setCountBurger((c) => c - 50)
        setitemsBurger((c) => c - 1)

    }


    const showSanwitch = () => {
        setSanwitch("Sandwitch:");
        setCountSandwitch((c) => c + 70)
        setitemsSandwitch((c) => c + 1)
    };
    const handleminusSandwitch = () => {
        setCountSandwitch((c) => c - 70)
        setitemsSandwitch((c) => c - 1)
    }


    const showPizza = () => {
        setPizza("Pizza:");
        setCountPizza((c) => c + 100)
        setitemsPizza((c) => c + 1)
    };
    const handleminusPizza = () => {
        setCountPizza((c) => c - 100)
        setitemsPizza((c) => c - 1)
    }

    const showPastha = () => {
        setPastha("Pastha:");
        setCountPastha((c) => c + 100)
        setitemsPastha((c) => c + 1)
    };
    const handleminusPastha = () => {
        setCountPastha((c) => c - 100)
        setitemsPastha((c) => c - 1)
    }

    const showNoodels = () => {
        setNoodels("Noodels:");
        setCountNoodels((c) => c + 100)
        setitemsNoodels((c) => c + 1)
    };
    const handleminusNoodels = () => {
        setCountNoodels((c) => c - 100)
        setitemsNoodels((c) => c - 1)
    }



    return (
        <>
       
        
            <div className="main-div">
                

                <div className="items">
                    <p>SELECT YOUR ORDERS:</p>
                    <button onClick={showBurger} className="button-items">Burger</button>
                    <button onClick={showSanwitch} className="button-items">Sandwitch</button>
                    <button onClick={showPizza} className="button-items">Pizza</button>
                    <button onClick={showPastha} className="button-items">Pastha</button>
                    <button onClick={showNoodels} className="button-items">Noodels</button>
                    <button className="button-items">Ramen</button>
                    <button className="button-items">Fried Chicken</button>
                    <button className="button-items">Chicken Nuggets</button>
                    <button className="button-items">Fish Fingers</button>
                    <button className="button-items">Chicken Lolipop</button>
                    <button className="button-items">Chicken Manchurian</button>
                    <button className="button-items">Crab Lolipop</button>
                    <button className="button-items">Fried Rice </button>
                    <button className="button-items">schezwan fried rice</button>
                    <button className="button-items">schezwan Noodels</button>
                    <button className="button-items">Fish Fingers</button>
                    <button className="button-items">Chicken Lolipop</button>
                    <button className="button-items">Chicken Manchurian</button>
                    <button className="button-items">Crab Lolipop</button>
                    <button className="button-items">Crab Lolipop</button>

                </div>


                <div className="bill">
                    <center>
                        <p>
                            {Burger && <p>{Burger} &nbsp;&nbsp;&nbsp; Nos:{itemsBurger}&nbsp;&nbsp;&nbsp; Price: {countBurger} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={handleminusBurger} className="button-minus" >Remove</button>
                            </p>}
                        </p>

                        <p>{Sanwitch && <p>{Sanwitch} &nbsp;&nbsp;&nbsp; Nos:{itemsSandwitch} &nbsp;&nbsp;&nbsp;Price: {countSandwitch}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={handleminusSandwitch} className="button-minus">Remove</button></p>}
                        </p>


                        <p>{Pizza && <p>{Pizza} &nbsp;&nbsp;&nbsp;Nos:{itemsPizza} &nbsp;&nbsp;&nbsp; Price: {countPizza}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={handleminusPizza} className="button-minus">Remove</button></p>}
                        </p>

                        <p>{Pastha && <p>{Pastha}&nbsp;&nbsp;&nbsp; Nos:{itemsPastha} &nbsp;&nbsp;&nbsp; Price: {countPastha}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={handleminusPastha} className="button-minus">Remove</button></p>}
                        </p>

                        <p>{Noodles && <p>{Noodles} &nbsp;&nbsp;&nbsp;Nos:{itemsNoodels} &nbsp;&nbsp;&nbsp; Price: {countNoodels}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={handleminusNoodels} className="button-minus">Remove</button></p>}
                        </p>



                        <div className="div-bill">
                            <center>
                                <p className="bill-p">Your Total Bill+ 18% Tax = {countBurger + countNoodels + countPastha + countPizza + countSandwitch}</p>
                                <button className="print">Print Bill</button>
                            </center>
                        </div>
                    </center>



                </div>
            </div>
        </>
    );
}
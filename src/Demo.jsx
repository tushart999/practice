import { useState } from "react";
import Props from './Props';

function Demo() {
    const [name, setName] = useState('Tushar');

    const changeName = () => {
        setName('Sakshi');
    }
    


    let namee = "Tushar Tyagi";

    let userdata = {
        name: "Tushar",
        age: "19",
        email: "tushar@gmail.com",
        phone: "9898989898"
    }

        let userdata2 = {
        name: "swati",
        age: "22",
        email: "swati@gmail.com",
        phone: "9898989898"
    }

        let userdata3 = {
        name: "sakshi",
        age: "22",
        email: "saskhi@gmail.com",
        phone: "9898989898"
    }


    let arr=["Samsung","Apple","Banana","Guava"]

    return (
        <div>
            <h1>My name is {name}</h1>
            <button onClick={changeName}>Change my Name to Sakshi</button>
            {/* <Props userr={userdata} />
            <Props userr={userdata2} />
            <Props userr={userdata3} /> */}

            {
                <Props hehe={arr} />
            }
            
        </div>
    );
}

export default Demo;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./note";
import Input from "./input"

const day=new Date().toLocaleDateString('en-us',{day:"numeric",weekday:"long",month:"short"})
console.log(day)





function App() {
    const [values, setvalue] = useState([{title:day,content:"Enjoy Your Day 😇"}])

    const [inputvalue, setinputvalue] = useState(
        {
            title: "",
            content: ""
        }
    )
    // Storing the input value ...
    function handelinput(e) {
        const { name, value } = e.target

        setinputvalue({ ...inputvalue, [name]: value })

    }
    function handelbutton() {
        setvalue([...values, inputvalue])
        setinputvalue({ title: "", content: "" })

    }
    function handeldelete(id) {
        setvalue((pre) => {
            return pre.filter((data, index) => {
                return index !== id
            })
        })

    }






    return <div>
        <Header />
        <Input
            handelinput={handelinput}
            handelbutton={handelbutton}
            Value={inputvalue}



        />
        {
            values.map((data, index) => {

                return <Note
                    key={index}
                    note={data.title}
                    content={data.content}
                    id={index}
                    handeldelete={handeldelete}
                />
            })

        }



        <Footer />

    </div>

}
export default App;

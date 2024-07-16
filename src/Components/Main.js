import react ,{useState}from "react";
import Card from "./Card";
import SearchIcon from "./search.svg";
import axios from "axios";

const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40')
            // here seacrh is our search query, for eg if we seacrh java, then it will show results reltaed to java
            .then((res)=>setData(res.data.items)) // res = response
            .catch((err)=>console.log(err)) // err = error
        }
    }

    const handleClick=()=>{

            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40')
            // here seacrh is our search query, for eg if we seacrh java, then it will show results reltaed to java
            .then((res)=>setData(res.data.items)) // res = response
            .catch((err)=>console.log(err)) // err = error
    }

    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Search books..."
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <img
                        src={SearchIcon}
                        alt="search"
                        onClick={handleClick}
                        />
                    </div>
                    <img src="./images/bg2.png" alt="kids reading" />
                    <h3>NOTE - Results show only saleable books</h3>
                </div>
            </div>

            <div className="container">

              {
                    <Card book={bookData}/>
                    // the bookData state, which is an array, is passed to the Card component as a prop
              }  
            </div>
        </>
    )
}
export default Main;
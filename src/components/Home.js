import React,{useEffect} from "react";
import axios from "axios";
import './Home.css'
import {useSelector,useDispatch} from "react-redux";
import { addData, addToCart } from "../redux/action/CartAction";

const Home = () => {

    const {data} = useSelector(state=>state)

    const dispatch = useDispatch();
    useEffect(()=>{
         async function getPosts(){
            try{
               const posts =  await axios.get("https://dummyjson.com/products")
               dispatch(addData(posts.data));
               console.log(posts.data.products);
            }
            catch(err){
                console.log(err)
            }
        }

        getPosts();
           
    },[dispatch])

    const handdleClick = (post) => {
        console.log(post)
        dispatch(addToCart(post));
    }
  return (
    <div>
         <div className="row_line">
            {
               data.products && data.products.map(post => 
                     (
                        <div className="item" key={post.id}>
                           <img className="img" src={post.thumbnail} alt="item_post" />
                           <p className="title">Title : {post.title}</p>
                           <p className="price">Price : ${post.price}</p>
                           <button className="btn" onClick={ () => handdleClick(post)}>Add to cart</button>
                        </div>
                    )
                )
               }
         </div>
          
    </div>
  )
}

export default Home
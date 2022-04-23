import {React,useState} from 'react'
import user from '../assets/user.png'
import upvote from '../assets/upvote.png'
import {Link} from 'react-router-dom'
export const Card = () => {
  const [counter,setCounter] = useState(0);
  const [x,setX] = useState(0);
  const fun = () => {
    if(x===1){
      setX(0);
      console.log(x);
      setCounter( count => count - 1);
    }
    else if(x===0){
      setX(1);
      setCounter( count => count + 1);
    }

  }
  return (
    <div className="card">
      {/* TODO: 1. LINK PROFILE PHOTO AND NAME FROM DATABASE 2. MAKE STUFF CLICKABLE */}
      <div className="nameAndProfile"><img src={user} alt="user.png" width="30px" /><span>Name</span></div>
      <div className="title"><h2>Title</h2></div>
      <div className="cardBody">
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ratione quos quae quo aliquam, beatae ducimus deserunt voluptatum eaque facere impedit quas ipsam cum vero velit deleniti numquam sapiente sunt magnam iure. Vel libero veritatis aliquam laudantium id laborum consequuntur est dolorum? Facere, doloribus repellat! Maxime, eius amet. Vero, libero.</p>
      </div>
      <div className='doFlex'>
        <div className="votesAndComments">
          <input type="image" src={upvote} alt="upvote.png" className="upvoteImage" style={{width:"14px"}} onClick={fun} /><span className="upvoteCount">{counter}</span>
        </div>
        
        <div className='btn'><Link to="/payment">Donate 500rs</Link></div>
      </div>
    </div>
  )
}

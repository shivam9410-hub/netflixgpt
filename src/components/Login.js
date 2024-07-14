import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
 import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { photoURL } from '../utils/constants';
const Login = () => {
   const navigate = useNavigate() ;
    const [isSignInForm, setIsSignInForm] = useState(true); 
    const [errorMessage, setErrorMessage]= useState('') ; 
    const name = useRef(null) ; 
    const email = useRef(null) ; 
    const dispatch= useDispatch() ; 
    
    const password= useRef(null) ;
 const handleButtonClick =(e)=>{
  
/// validate the form data  
   const message =  checkValidData(email.current.value,password.current.value);
 setErrorMessage(message);
      if(message)
        return ; 
       if(!isSignInForm){
           ///signup logice
     createUserWithEmailAndPassword(auth, email.current.value,password.current.value).then((userCredential
     )=>{
        const user = userCredential.user ;
        console.log(user) ; 
 updateProfile(user, {
    displayName:name.current.value, photoURL:{photoURL}
 }).then(()=>{
   const {uid, email, displayName,photoURL}= auth.currentUser;
   dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
 
    navigate("/browse")
 }).catch((error)=>{
setErrorMessage(error.message);
 })

     }).catch((error)=>{
        const errorCode= error.code; 
        const errormessage = error.message;
        setErrorMessage(errorCode+"-"+errormessage) ; 
        console.log(error) ; 
     })

       }
       else {
          //sign in logic
          signInWithEmailAndPassword(auth , email.current.value, password.current.value).then((userCredential)=>{
            const user= userCredential.user ; 
   
          }).catch((error)=>{
            console.log(error);

          }) ; 

       }
      
 }
    const toggleSignForm=()=>{

  setIsSignInForm(!isSignInForm); 

    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'   alt='logo'/>
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
   <h1 className='font-bold text-3xl py-4'> {isSignInForm ?"Sign In":"Sign Up"}</h1>
 {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 myh-4 w-full bg-gray-700'/>)}
 <input  ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/ >
 <input ref={password}  type='text' placeholder='Enter Password' className='p-4 my-4 w-full  bg-gray-700'/>
  <p className='text-red-500 font-bold text-lg '>{errorMessage} </p>
  <button className='p-4 my-6 bg-red-700 w-full rounded-lg' 
     onClick={handleButtonClick}
  >{isSignInForm ?"Sign In":"Sign Up"}</button>
  <p    className='py-4 cursor-pointer' onClick={toggleSignForm}>
    
  {isSignInForm ?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}
     </p>
        </form>
    </div>

  )
}

export default Login

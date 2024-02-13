import './Registration.css'
import { useParams } from 'react-router-dom';
import React from 'react'
import {db} from "../../config/firebase.js"
import {getDoc,doc} from 'firebase/firestore'

function Registration()
{
    const [EventName, setEventName] = React.useState('')
    const [EventDetails, setEventDetails] = React.useState('')
    const [RegisterLink, setRegisterLink] = React.useState('')
    const {name} = useParams();
    const EventRef=doc(db,"Events",name)


    React.useEffect( () => {

        async function getEventDetails(){
            try{
                const doc=await getDoc(EventRef)
                console.log(doc.data()['EventName'])
                const data=doc.data()
                setEventName(data['EventName'])
                setEventDetails(data['EventDetails'])
                setRegisterLink(data['RegisterLink'])
            }
            catch(e){
                console.log(e)
            }
        }
        getEventDetails();
        

        
    },[]);
    return(
        <>
        <div className='Registration-main-container'>
            <div className='Registration-glass-container'>
                <div className='Registration-leftside'>
                    <h1 className='Registration-Eventname'>{EventName}</h1>
                    <p className='Registration-EventDesc'>{EventDetails}</p>
                    <a href={RegisterLink} className='Registration-EventLink'>Register</a>
                </div>
                <div className='Registration-RightSide'>
                    <img src="../../images/Mask group.png" alt="" className='Registeration-Image'/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Registration;
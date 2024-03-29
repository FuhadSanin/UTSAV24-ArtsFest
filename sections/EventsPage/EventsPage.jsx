import React from 'react'
import EventsCard from './EventsCard'
import "./EventsPage.css"
import {db} from "../../config/firebase.js"
import {getDocs,collection} from 'firebase/firestore'
import {Link} from 'react-router-dom'

function EventsPage() {
    const [EventsList, setEventsList] = React.useState([])

    const EventsCollection=collection(db,"Events")

    React.useEffect(() => {
        const getEvents = async () => {
            try{

                const data = await getDocs(EventsCollection);
                const filtereddata=data.docs.map((doc)=>({...doc.data(),id:doc.id}))
                console.log(filtereddata)
                setEventsList(filtereddata)
            }
            catch(e){
                console.log(e)
            }
        }
        getEvents();
},[]);
    // const EventsData = [
    //     {
    //         "id": 0,
    //         "title": "Event 1",
    //         "date": "2024-02-05",
    //         "link": "open",
    //         "description": "Description of Event 1."
    //     },
    //     {
    //         "id": 1,
    //         "title": "Event 2",
    //         "date": "2024-02-10",
    //         "link": "closed",
    //         "description": "Description of Event 2."
    //     },
    //     {
    //         "id": 2,
    //         "title": "Event 3",
    //         "date": "2024-02-15",
    //         "link": "open",
    //         "description": "Description of Event 3."
    //     },
    //     {
    //         "id": 3,
    //         "title": "Event 4",
    //         "date": "2024-02-20",
    //         "link": "closed",
    //         "description": "Description of Event 4."
    //     },
    //     {
    //         "id": 4,
    //         "title": "Event 5",
    //         "date": "2024-02-25",
    //         "link": "open",
    //         "description": "Description of Event 5."
    //     },
    //     {
    //         "id": 5,
    //         "title": "Event 6",
    //         "date": "2024-03-01",
    //         "link": "closed",
    //         "description": "Description of Event 6."
    //     },
    //     {
    //         "id": 6,
    //         "title": "Event 7",
    //         "date": "2024-03-05",
    //         "link": "open",
    //         "description": "Description of Event 7."
    //     },
    //     {
    //         "id": 7,
    //         "title": "Event 8",
    //         "date": "2024-03-10",
    //         "link": "closed",
    //         "description": "Description of Event 8."
    //     },
    //     {
    //         "id": 8,
    //         "title": "Event 9",
    //         "date": "2024-03-15",
    //         "link": "open",
    //         "description": "Description of Event 9."
    //     },
    //     {
    //         "id": 9,
    //         "title": "Event 10",
    //         "date": "2024-03-20",
    //         "link": "closed",
    //         "description": "Description of Event 10."
    //     }
    // ]




    // const openEvents = EventsData ? EventsData.filter(item => item.link !== "closed") : [];
    // const openEventsSorted = openEvents.sort((a, b) => a.date < b.date ? 1 : -1,);



    // const closedEvents = EventsData ? EventsData.filter(item => item.link === "closed") : [];
    // const closedEventsSorted = closedEvents.sort((a, b) => a.date < b.date ? 1 : -1,);

    return (
        <div className="EventsPage" >


            <div className='Event-Heading'>Events</div>
            <div className='EventsCards-Container'>
                {EventsList.map((item ,id)=> (
                   < Link to={`/events/${item.id}`}>
                    <EventsCard key={id} title={item["EventName"]} id={id} />
                    </Link>
                ))}

                {/* {closedEventsSorted.map(item => (
                    <EventsCard key={item.title} {...item} />
                ))} */}


            </div>
        </div >
    )
}

export default EventsPage
"use client"
import { useEffect, useState } from "react"


export default function Client() {
    const [newMessage, setNewMessage] = useState('old client message')
    useEffect(() => {
        (async () => {
            const message = await getData()
            setNewMessage(message)
        })()
    })
    return <div>{newMessage} from client component</div>

  }
  

  async function getData() {
    const res = await fetch('https://us-central1-nest-node-mailer.cloudfunctions.net/api')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.text()
  }
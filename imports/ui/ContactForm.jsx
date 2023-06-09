import React, { useState } from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { TasksCollection } from "../api/TaskCollection";


export const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const saveContact = () => {
    console.log({name, email, imageUrl});
 
    ContactsCollection.insert({ name, email, imageUrl });
    setName("");
    setEmail("");
    setImageUrl("");
  }

  return (
    <form>
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input 
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imgURL">Image URL</label>
        <input 
          type="text"
          id="imgURL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={saveContact}>Save Contact</button>
      </div>
    </form>
  )
}
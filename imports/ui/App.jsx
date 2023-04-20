import React from 'react';

// Contact: name, email, imageURL
export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <form>
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input type="text"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>
      </div>
      <div>
        <label htmlFor="imgURL">Image URL</label>
        <input type="text" id="imgURL"/>
      </div>
      <div>
        <button>Save Contact</button>
      </div>
    </form>
  </div>
);

import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";


const remainingContacts = [...contacts];

const initAgenda = remainingContacts.splice(0, 5);

function App() {
  const [agenda, setAgenda] = useState(initAgenda);
  const addContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1);
    // const randomContact = remainingContacts(randomIndex)
    setAgenda(agenda.concat(randomContact));
  };

  const sortByName = () => {
    const sortedContacts = remainingContacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setAgenda(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = remainingContacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setAgenda(sortedContacts);
  };

  const deleteContact = (index) => {
    const newList = agenda.slice();
    newList.splice(index, 1);
    setAgenda(newList);
  };
  
  return (
    <>
      <h1>IRONCONTACTS</h1>
      <button onClick={addContact}>Add Contact</button>
      <button onClick={sortByName}>sort by name </button>
      <button onClick={sortByPopularity}>sort by popularity </button>
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>oscar won</th>
              <th>emmy won</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((contact, index) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      width="100px"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar && "👹"}</td>
                  <td>{contact.wonEmmy && "👹"}</td>
                  <td>
                    <button onClick={()=> deleteContact(index)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default App;

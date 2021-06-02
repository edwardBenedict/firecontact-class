import { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import Form from "./components/form/Form";
import { addInfo } from "./utils/functions";

const initialValues = { username: "", phoneNumber: "", gender: "NO INFO!" };

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    addInfo(info);
  };

  const updateFormHandler = (id, username, phoneNumber, gender) => {
    setInfo(id, username, phoneNumber, gender);
  };

  return (
    <div className="App">
      <Form
        className="form"
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts className="contacts" updateFormHandler={updateFormHandler} />
    </div>
  );
}

export default App;

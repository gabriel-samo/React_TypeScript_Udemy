import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";
import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {

  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const expectedData = data as { name: string; age: string };
    customForm.current?.clear();
    console.log(expectedData);
  }

  return (
    <>
      <h1>Let's get started!</h1>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <p>
          <Button element="button" type="submit">Submit</Button>
          <Container as={Button} element='button' type='button' onClick={() => customForm.current?.clear()}>Clear</Container>
        </p>
      </Form>
    </>
  );
}

export default App;

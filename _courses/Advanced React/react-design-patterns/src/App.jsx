import React, { useState } from 'react'
import axios from "axios";

import { SplitScreen } from './components/split-screen'
//-- Lists
import { RegularList } from './components/lists/Regular';
import { authors } from './data/authors'
import { books } from './data/books'
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { LargeBookListItem } from './components/books/LargeListItems';
//-- Modal
import { Modal } from './components/modal';
//-- Loader
import { ResourceLoader } from './components/container-pattern/resource-loader';
import { CurrentUserLoader } from './components/container-pattern/current-user-loader';
import { UserLoader } from './components/container-pattern/user-loader';
import { UserInfo } from './components/container-pattern/user-info';
import { BookInfo } from "./components/container-pattern/book-info";
import { DataSource } from "./components/container-pattern/data-source";
import { DataSourceWithRenderProps } from "./components/container-pattern/data-source-with-render-props";
//-- Controlled/Uncontrolled
import { UncontrolledFlow } from "./components/controlled-uncontrolled/uncontrolled-flow";
import { ControlledFlow } from "./components/controlled-uncontrolled/controlled-flow";

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

//
// - For uncontrolled flow
// const StepOne = ({ next }) => {
//   return (
//     <>
//       <h1>Step #1</h1>
//       <button onClick={next}>Next</button>
//     </>
//   );
// };
// const StepTwo = ({ next }) => {
//   return (
//     <>
//       <h1>Step #2</h1>
//       <button onClick={next}>Next</button>
//     </>
//   );
// };
// const StepThree = ({ next }) => {
//   return (
//     <>
//       <h1>Step #3</h1>
//       <button onClick={next}>Next</button>
//     </>
//   );
// };

const StepOne = ({ next }) => {
  return (
    <>
      <h1>Step #1: Enter your name</h1>
      <button onClick={() => next({ name: "TestName" })}>Next</button>
    </>
  );
};
const StepTwo = ({ next }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => next({ age: 30 })}>Next</button>
    </>
  );
};
const StepThree = ({ next }) => {
  return (
    <>
      <h1>Step #3: You qualify!</h1>
      <button onClick={() => next({})}>Next</button>
    </>
  );
};

const StepFour = ({ next }) => {
  return (
    <>
      <h1>Step #4: Enter your country</h1>
      <button onClick={() => next({ country: "Poland" })}>Next</button>
    </>
  );
};

function App() {

  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = (dataFromStep) => {
    setData(dataFromStep);
    setCurrentStepIndex(currentStepIndex + 1);
  };


  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title={'Right'} />
        <RightSideComp title={'Left'} />
      </SplitScreen>

      <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem}></RegularList>
      <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem}></RegularList>

      <RegularList items={books} sourceName={"book"} ItemComponent={LargeBookListItem}></RegularList>

      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>

      <CurrentUserLoader>
        <UserInfo></UserInfo>
      </CurrentUserLoader>

      <UserLoader userId={"3"}>
        <UserInfo></UserInfo>
      </UserLoader>

      <ResourceLoader resourceUrl={"api/users/1"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={"api/books/1"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader>


      <DataSource getData={() => fetchData("api/users/1")} resourceName={"user"}>
        <UserInfo />
      </DataSource>

      <DataSourceWithRenderProps
        getData={() => fetchData("api/users/1")}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRenderProps>

      <DataSource getData={() => getDataFromLocalStorage("test")} resourceName={"msg"}>
        <Message />
      </DataSource>

      <UncontrolledFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>

      <ControlledFlow currentStepIndex={currentStepIndex} onNext={next}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  )
}

export default App

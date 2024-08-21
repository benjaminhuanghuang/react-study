

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
import { ResouceLoader } from './components/container-pattern/resource-loader';
import { CurrentUserLoader } from './components/container-pattern/current-user-loader';
import { UserLoader } from './components/container-pattern/user-loader';
import { UserInfo } from './components/container-pattern/user-info';
import { BookInfo } from "./components/container-pattern/book-info";

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};
function App() {
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

      <ResouceLoader resouceUrl={"api/users/1"} resourceName={"user"}>
        <UserInfo />
      </ResouceLoader>

      <ResouceLoader resouceUrl={"api/books/1"} resourceName={"book"}>
        <BookInfo />
      </ResouceLoader>
    </>
  )
}

export default App

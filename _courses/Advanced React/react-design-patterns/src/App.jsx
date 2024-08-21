

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
    </>
  )
}

export default App

import { RecentThoughts } from './Components/RecentThoughts';
import { Header } from './Components/Header';
import { PostThought } from './Components/PostThought';

export const App = () => {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="input-new-thought-container">
        <PostThought />
      </div>
      <div className="thoughts-container">
        <RecentThoughts />
      </div>
    </>
  )
};

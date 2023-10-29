// import { Profiler } from "react";
import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from '../data/data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../data/friends.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../data/transactions.json';
import { GlobalStyle } from "./GlobalStyle";



export const App = () => {
  return (
    <main>
      <section>
        <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      </section>

      <section>
        <Statistics title="Upload stats" stats={data} />
      </section>

      <section>
        <FriendList friends={friends} />
      </section>

      <section>
        <TransactionHistory items={transactions} />
      </section>
    
      <GlobalStyle/>
    </main>
  );
};

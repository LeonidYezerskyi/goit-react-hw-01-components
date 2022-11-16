import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx'
import { FriendList } from './FriendList/FriendList.jsx'
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx'
import user from '../utils/user.json';
import data from '../utils/data.json';
import friends from '../utils/friends.json';
import transactions from '../utils/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};

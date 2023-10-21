import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import items from 'transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={items} />
    </>
  );
};

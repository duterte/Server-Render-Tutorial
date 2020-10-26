import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContestLists from './contestlists';

const textCenter = {
  textAlign: 'center',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
};

function pushState(obj, url) {
  window.history.pushState(obj, '', url);
}

export default function App({ initialContests = [] }) {
  const [contests, setContests] = useState(initialContests);

  function fetchContest(contestId) {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
  }

  useEffect(() => {
    axios
      .get('/api/contests')
      .then((res) => {
        setContests(() => res.data.contests);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2 style={textCenter}>Contests</h2>
      <div>
        <ContestLists onContestClick={fetchContest} contests={contests} />
      </div>
    </>
  );
}

// {contests.map((contest) => (
// <ContestPreview key={contest.id} {...contest} />
// ))}

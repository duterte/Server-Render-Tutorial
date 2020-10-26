import React from 'react';
import ContestPreview from './contestpreview';

export default function ContestList({ contests, onContestClick }) {
  return (
    <div className="content-list">
      {contests.map((contest) => (
        <ContestPreview
          key={contest.id}
          onClick={onContestClick}
          {...contest}
        />
      ))}
    </div>
  );
}

import React from 'react';

export default function ContestPreview(contest) {
  function handleClick() {
    contest.onClick(contest.id);
    // console.log(contest.contestName);
  }

  return (
    <div className="contest-preview" onClick={handleClick}>
      <div className="category-name">{contest.categoryName}</div>
      <div className="contest-name">{contest.contestName}</div>
    </div>
  );
}

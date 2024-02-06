// import React,{useState} from 'react';

 
// export default function Polling() {
// 	const [votes,setVote] = useState([
// 		{id: 1,name : 'option 1', voteCount: 0},
// 		{id: 2,name : 'option 2', voteCount: 0},
// 		{id: 3,name : 'option 3', voteCount: 0},
// 		{id: 4,name : 'option 4', voteCount: 0},
// 	])
	

// 	const handleVoteIncrement = (id) => {
// 		setVote(
// 			votes.map((vote) => (
// 				vote.id === id ? {...vote ,voteCount: vote.voteCount+1} : vote
// 			))
// 		)
// 	}

// 	return (
// 		<>
			
// 			<h1>Hello there!</h1>
// 			<h4 id="question"></h4>
// 			{votes.map((vote,index) => (
// 				<button className="option" onClick = {() => handleVoteIncrement(vote.id)}>
// 				<span>{vote.name}</span>
// 				<span>   {vote.voteCount}</span>
// 				</button>
// 			))}

			
// 		</>
// 	);
// }

import React, { useState } from 'react'

export default function PollingSystem() {
	const[votes, setVotes] = useState([
		{id: 1, name: "BJP", count: 0},
		{id: 2, name: "SPA", count: 0},
		{id: 3, name: "CANG", count: 0},
		{id: 4, name: "HATHI", count: 0},
	])

	function handleVote(id){
		setVotes(
			votes.map((vote)=> vote.id === id ? ({...vote, count: vote.count +1}): vote)
		)
	}
  return (
	<div>
		<h1>Polling System</h1>
		{votes.map((vote)=>
			<button onClick={()=> handleVote(vote.id)}>
				<span>{vote.name} : </span>
				<span>{vote.count}</span>
			</button>
		)}
	</div>
  )
}

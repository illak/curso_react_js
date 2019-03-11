import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					avatar={faker.image.avatar()}
					time={faker.date.recent().toDateString()}
					content={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					avatar={faker.image.avatar()}
					time={faker.date.recent().toDateString()}
					content={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					avatar={faker.image.avatar()}
					time={faker.date.recent().toDateString()}
					content={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					avatar={faker.image.avatar()}
					time={faker.date.recent().toDateString()}
					content={faker.lorem.sentence()}
				/>
			</ApprovalCard>
		</div>
	);
};

export default App;

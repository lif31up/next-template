import React from 'react';

function FirstBlock({}):React.JSX.Element{
	return (
	<div className="w-96 h-fit grid justify-items-center _bg-blue-200 rounded-2xl p-6 _border-blue-100 shadow">
		<div className="w-full flex-wrap p-4 pb-12 rounded-2xl _bg-gradient-green _border-green-200">
			<h1 className="text-2xl font-bold text-green-200 shadow">WELCOME TO PORTAL<br/>INPUT:_</h1>
		</div>
		<div className="w-full h-8 flex-wrap flex relative items-center mt-4">
			<div className="absolute left-0 top-0 flex gap-2">
				<div className="w-10 h-10 rounded-full bg-black"/>
				<div className="w-10 h-10 rounded-full bg-black"/>
				<div className="w-10 h-10 rounded-full bg-black"/>
				<div className="w-10 h-10 rounded-full bg-black"/>
				<div className="w-10 h-10 rounded-full bg-black"/>
			</div>
			<div className="h-24 w-24 absolute right-0 -top-8 _border-blue-100 bg-gray-500 rounded-full"/>
		</div>
	</div>
	)
}
export default FirstBlock
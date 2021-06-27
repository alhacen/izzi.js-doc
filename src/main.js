import React, {useState} from 'react';
import {COMMON_ROUTES} from './constants/routes/main.routes.constant';

const Main = () =>{
	const [exampleHash, setExampleHash] = useState(COMMON_ROUTES[0].hash)
	console.log(exampleHash)
	return(
		<div class="flex">
			<div>
				<div class="w-40 h-screen flex flex-col bg-gray-900">					
					
					{
						COMMON_ROUTES.map((route, index)=>{
							return(
								<div class="w-full flex justify-center h-12 items-center hover:bg-purple-900 cursor-pointer" onClick={()=>{setExampleHash(route.hash)}} style={{color:"white"}}>{route.name}</div>
							)
						})
					}
				</div>
			</div>
			<div class="flex w-full">
			<iframe height="100%" width="100%" scrolling="no" title="hello-world" src={`https://codepen.io/alhaqhassan/embed/${exampleHash}?defaultTab=html%2Cresult&editable=true`} frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
			See the Pen <a href={`https://codepen.io/alhaqhassan/pen/${exampleHash}`}>
			hello-world</a> by alhaqhassan (<a href="https://codepen.io/alhaqhassan">@alhaqhassan</a>)
			on <a href="https://codepen.io">CodePen</a>.
			</iframe>
			
				{/* <Codepen hash="zYwORwb" user="alhaqhassan" height="100%" defaultTab="html,result" preview={false} editable={true}/> */}
			</div>
		</div>

	)
}
export default Main;
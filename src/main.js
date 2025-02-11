import React, {useState} from 'react';
import {COMMON_ROUTES} from './constants/routes/main.routes.constant';

const Main = () =>{
	const [exampleHash, setExampleHash] = useState(COMMON_ROUTES[0].hash)
	return(
		<div class="flex">
			<div>
				<div class="w-40 h-screen flex flex-col bg-gray-900">					
					<a href='https://github.com/alhacen/izzi.js' target='_blank' class={`w-full flex justify-center h-12 items-center cursor-pointer gap-2 `} style={{color:"white"}}>
						git
						<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#e8eaed">
							<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
						</svg>
					</a>
					{
						COMMON_ROUTES.map((route, index)=>{
							return(
								<div class={`w-full flex justify-center h-12 items-center cursor-pointer ${
									route.hash === exampleHash
									  ? " bg-purple-900"
									  : " hover:bg-purple-500"
								  }`} onClick={()=>{setExampleHash(route.hash)}} style={{color:"white"}}>{route.name}</div>
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
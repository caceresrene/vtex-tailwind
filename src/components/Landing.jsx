import React from 'react';

const Landing = () => {
	return (
		<div className='bg-rose-600 '>
			<div className='max-w-5xl mx-auto h-[40em] text-white flex items-center p-16'>
				<section className='space-y-8 max-w-md'>
					<h1 className='text-5xl'>Where you run your world of commerce</h1>
					<p>
						VTEX is the Enterprise Digital Commerce Platform that puts your business
						on a fast path to growth, with the agility you need for what's next.
					</p>
					<div className='space-x-8'>
						<button className='uppercase text-sm font-semibold py-4 px-3 bg-slate-800 rounded-md hover:bg-slate-900 transition-all hover:-translate-y-1'>
							request a demo
						</button>
						<button className='uppercase font-bold text-sm py-4 px-3'>
							get a platform overview
						</button>
					</div>
				</section>
				<section>
					<img
						src='https://images.unsplash.com/photo-1587586062323-836089e60d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
						alt=''
						className='w-72 rounded-md'
					/>
				</section>
			</div>
		</div>
	);
};

export default Landing;

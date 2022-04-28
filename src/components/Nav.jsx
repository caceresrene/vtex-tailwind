import React from 'react';

const Nav = () => {
	return (
		<nav className='p-4'>
			<ul className='flex justify-between items-center'>
				<li className='font-bold text-lg'>Logo</li>
				<li>
					<ul className='flex gap-2 font-semibold'>
						<li>Products</li>
						<li>Solutions</li>
						<li>Customers</li>
						<li>Partners</li>
						<li>Company</li>
						<li>Resources</li>
					</ul>
				</li>
				<li className='uppercase font-bold hover:text-red-500 hover:cursor-pointer'>
					contact us
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

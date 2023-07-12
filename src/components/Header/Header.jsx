import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useSection from '../../hooks/useSection';

function Header() {
	const { data } = useSection();
	const { pathname } = useLocation();
	const pathnames = pathname.split('/').filter((item) => item);

	return (
		<header className="mx-auto bg-stone-900 p-4">
			<h1 className="flex justify-center font-bold text-2xl md:text-5xl md:mb-0">
				<Link to="/" className="uppercase items-center text-stone-300">
					Mobile ECommerce
				</Link>
			</h1>
			<div className="mx-8 flex flex-wrap flex-col md:flex-row md:justify-between items-center">
				<nav className="flex p-3">
					<ol className="inline-flex items-center space-x-1 md:space-x-3">
						{pathnames.length > 0 ? (
							<>
								<li className="inline-flex items-center">
									<Link
										to="/"
										className="text-xl text-stone-400 hover:text-stone-200"
									>
										Products
									</Link>
								</li>
								<li className="inline-flex items-center">
									<svg
										className="w-3 h-3 text-stone-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 6 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m1 9 4-4-4-4"
										/>
									</svg>
								</li>
								<li className="inline-flex items-center">
									<span className="text-xl font-bold text-stone-400">
										Details
									</span>
								</li>
							</>
						) : (
							<li className="inline-flex items-center">
								<span className="text-xl font-bold text-stone-400">Products</span>
							</li>
						)}
					</ol>
				</nav>
				<p className="px-5">
					<span className="text-xl font-medium text-stone-300">
						{data.productsInCart}
					</span>
				</p>
			</div>
		</header>
	);
}

export default Header;

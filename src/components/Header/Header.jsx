import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import useSection from '../../hooks/useSection';

function Header() {
	const { data } = useSection();
	const { pathname } = useLocation();
	const pathnames = pathname.split('/').filter((item) => item);

	return (
		<header className="p-4 mx-auto bg-stone-900">
			<h1 className="flex justify-center text-2xl font-bold md:mb-0 md:text-5xl">
				<Link to="/" className="items-center uppercase text-stone-300">
					Mobile ECommerce
				</Link>
			</h1>
			<div className="flex flex-col flex-wrap items-center mx-8 md:flex-row md:justify-between">
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
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
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

import React, { Component } from "react";

class Header extends Component {
	render() {
		if (this.props.data) {
			var name = this.props.data.name;
			var occupation = this.props.data.occupation;
			var description = this.props.data.description;
			var city = this.props.data.address.city;
			var networks = this.props.data.social.map(function(network) {
				return (
					<li key={network.name}>
						<a href={network.url}>
							<i className={network.className}></i>
						</a>
					</li>
				);
			});
		}

		return (
			<header id='home'>
				<nav id='nav-wrap'>
					<a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
						Show navigation
					</a>
					<a className='mobile-btn' href='#home' title='Hide navigation'>
						Hide navigation
					</a>

					<ul id='nav' className='nav'>
						<li className='current'>
							<a className='smoothscroll' href='#home'>
								Home
							</a>
						</li>
						<li>
							<a className='smoothscroll' href='#about'>
								About
							</a>
						</li>
						<li>
							<a className='smoothscroll' href='#resume'>
								Resume
							</a>
						</li>
						<li>
							<a className='smoothscroll' href='#portfolio'>
								Works
							</a>
						</li>
						<li>
							<a className='smoothscroll' href='#contact'>
								Contact
							</a>
						</li>
					</ul>
				</nav>

				<div className='row banner'>
					<div className='banner-text'>
						<h1 className='responsive-headline'>{name}</h1>
						<h3>
							"Versatile Junior Software Developer with more than 1 year I love
							to develop fully functional web projects with the latest and most
							current technologies. Although I have not yet had the opportunity
							to work in a company, I have been putting into practice all the
							knowledge I'm acquiring, developing projects to improve my skills"
						</h3>
						<br/>
						<h3>JS | TypeScript | Python | Vue | React | Next | Angular | Bootstrap |
							Tailwind | SASS | Node.js | MySQL | MongoDB</h3>
						<h3>
							<a className='site_link' href='#'>
								{/* Project 1 */}
							</a>
						</h3>
						<h3>
							<a
								className='site_link'
								href='#'>
								{/* project 2 */}
							</a>
						</h3>
		
						<hr />
						<ul className='social'>{networks}</ul>
					</div>
				</div>

				<p className='scrolldown'>
					<a className='smoothscroll' href='#about'>
						<i className='icon-down-circle'></i>
					</a>
				</p>
			</header>
		);
	}
}

export default Header;

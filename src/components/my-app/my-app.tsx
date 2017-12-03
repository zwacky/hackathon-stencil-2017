import { Component } from '@stencil/core';


@Component({
	tag: 'my-app',
	styleUrl: 'my-app.scss'
})
export class MyApp {

	render() {
		return (
			<ion-app>

				<ion-header color='dark'>
					<ion-toolbar color='dark'>
						<ion-title>Berlin Meetups</ion-title>
					</ion-toolbar>
				</ion-header>

				{/* <ion-menu content="lulz">
					<ion-content>
						<ion-list>
							{['1231', 'aaaa', 'bbbb'].map(item => (
								<ion-item>{item}</ion-item>
							))}
						</ion-list>
					</ion-content>
				</ion-menu>

				<ion-nav id="lulz"></ion-nav> */}

				<stencil-router>
					<stencil-route url='/' component='app-home'></stencil-route>
					{/* <stencil-route url='/profile/:name' component='app-profile'></stencil-route> */}
				</stencil-router>
			</ion-app>
		);
	}

}

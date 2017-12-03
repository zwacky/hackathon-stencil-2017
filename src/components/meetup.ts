export interface Meetup {
	name: string;
	location: string;
	coordinates: {
		latitude: string;
		longitude: string;
	},
	description: string;
	time: string;
	day: string;
	nextMeetup: string;
	twitter: string;
	id: string;
	url: string;
};

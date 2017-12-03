// import { Meetup } from '../meetup';

import { Component, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @State() meetups = [];
  @State() markers = [];
  @State() selectedMeetup = null;

  map = null;
  keys = [
    { key: "name", text: "Name" },
    { key: "description", text: "Description" }
  ];

  componentWillLoad() {
    window
      .fetch("http://berlin-meetup.glitch.me/meetup")
      .then(res => res.json())
      .then(items => {
        this.meetups = items.data;

        this.map = new window["google"].maps.Map(
          document.getElementById("map"),
          {
            // default location
            center: { lat: 52.516151, lng: 13.401183 },
            zoom: 12
          }
        );

        this.markers = this.meetups.map(meetup => {
          const marker = new window["google"].maps.Marker({
            position: {
              lat: parseFloat(meetup.coordinates.latitude),
              lng: parseFloat(meetup.coordinates.longitude)
            },
            map: this.map,
            title: meetup.name
          });
          marker.addListener("click", () => {
            this.select(meetup);
          });
          return marker;
        });
      });
  }

  select(meetup) {
		this.selectedMeetup = meetup;

    // set center
    this.map.setCenter({
      lat: parseFloat(meetup.coordinates.latitude),
      lng: parseFloat(meetup.coordinates.longitude)
    });
  }

  render() {
    return (
      <ion-page style={{ marginTop: "50px" }}>
        <ion-content>
          <ion-grid>
            <ion-row>
              <ion-col col-4>
                <ion-list>
                  {this.meetups.map(item => {
                    return (
											<ion-item
												class={['list--active'].filter(() => this.selectedMeetup === item).join(' ')}
												onClick={() => this.select(item)}>
                        {item.name}
                      </ion-item>
                    );
                  })}
                </ion-list>
              </ion-col>

              <ion-col col-8>
                {this.keys.map(key => (
                  <ion-item>
                    <ion-label>{key.text}</ion-label>
                    <ion-input
                      value={
                        this.selectedMeetup !== null
                          ? this.selectedMeetup[key.key]
                          : ""
                      }
                    />
                  </ion-item>
                ))}

                <div
                  style={{
                    marginTop: "44px",
                    width: "100%",
                    height: "300px"
                  }}
                  id="map"
                />
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </ion-page>
    );
  }
}

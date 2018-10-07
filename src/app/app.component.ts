import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   @ViewChild('gmap') gmapElement: any;

   //Create a Map Instance
 	 map: google.maps.Map;

    setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
  }

  ngOnInit() {

    /* Set MAP BasicPROPERTIES*/
    var mapProp = {
      center: new google.maps.LatLng(37.782551, -122.445368),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /*
      Code For Polyline On MAP 
    */
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
     var flightPlanCoordinates = [
          {lat: 37.782551, lng: -122.445368},
          {lat: 37.782551, lng: -122.445360},
          {lat: 37.782551, lng: -121.445368},
          {lat: 37.782551, lng: -120.445368}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(this.map);
     /*
      * Code For HEAT MAP Layer
     */   
        function getPoints() {
        return [
          new google.maps.LatLng(37.782551, -122.445368),
          new google.maps.LatLng(37.782745, -122.444586),
          new google.maps.LatLng(37.782842, -122.443688),
          new google.maps.LatLng(37.782919, -122.442815),
          new google.maps.LatLng(37.782992, -122.442112),
          new google.maps.LatLng(37.783100, -122.441461),
          new google.maps.LatLng(37.783206, -122.440829),
          new google.maps.LatLng(37.783273, -122.440324)]};

       var heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: this.map
        });
  }
}

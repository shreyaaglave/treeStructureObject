import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-dropdowns',
  templateUrl: './dynamic-dropdowns.component.html',
  styleUrls: ['./dynamic-dropdowns.component.css']
})
export class DynamicDropdownsComponent implements OnInit {
  public countries: { id: string; name: string; }[];
  public states: { id: string; parentId: string; name: string; }[];
  public districts: { id: string; parentId: string; name: string; }[];
  public places: { id: string; parentId: string; name: string; }[];

  public dynamicStateList=[];
  public dynamicDistrictList = [];
  public dynamicPlaceList = [];

  constructor() { }

  ngOnInit() {

    this.countries = [
      { id: "1", name: "India" },
      { id: "2", name: "Germany" }
      ];
      this.states = [
      { id: "s1", parentId: "2", name: "Bavaria" },
      { id: "s2", parentId: "2", name: "Berlin" },
      { id: "s3", parentId: "1", name: "Maharashtra" },
      { id: "s4", parentId: "1", name: "Tamilnadu" }
      ];
      this.districts = [
      { id: "d1", parentId: "s1", name: "Upper Bavaria" },
      { id: "d2", parentId: "s1", name: "Lower Bavaria" },
      { id: "d3", parentId: "s2", name: "Berlin-Mitte" },
      { id: "d4", parentId: "s2", name: "Kreuzberg" },
      { id: "d5", parentId: "s3", name: "Nashik" },
      { id: "d6", parentId: "s3", name: "Jalgoan" },
      { id: "d7", parentId: "s4", name: "Ariyalur" },
      { id: "d8", parentId: "s4", name: "Chennai" }
      ];
      this.places = [
      { id: "p1", parentId: "d1", name: "Munich" },
      { id: "p2", parentId: "d1", name: "Erding" },
      { id: "p3", parentId: "d2", name: "Leipzig" },
      { id: "p4", parentId: "d2", name: "Landshut" },
      { id: "p5", parentId: "d3", name: "Passau" },
      { id: "p6", parentId: "d3", name: "Gesundbrunnen" },
      { id: "p7", parentId: "d4", name: "Frieburg" },
      { id: "p8", parentId: "d4", name: "Hamburg" },
      { id: "p9", parentId: "d6", name: "Raver" },
      { id: "p10", parentId: "d6", name: "Savda" },
      { id: "p11", parentId: "d5", name: "Ozar" },
      { id: "p12", parentId: "d5", name: "Manmad" },
      { id: "p13", parentId: "d7", name: "Thirumanur" },
      { id: "p14", parentId: "d7", name: "Sendurai" },
      { id: "p15", parentId: "d8", name: "New Chennai" },
      { id: "p16", parentId: "d8", name: "Old Chennai" }
      ];
  }

  protected countryChanged(id){
    this.dynamicStateList = this.states.filter((state)=>
      state.parentId == id
    )
    //when country changes dependent district and place dropdowns are resetted
    this.dynamicDistrictList = [];
    this.dynamicPlaceList = [];
  }

  protected stateChanged(id){
    this.dynamicDistrictList = this.districts.filter((district)=>
    district.parentId == id
    )

    //when state changes dependent place dropdown is resetted
    this.dynamicPlaceList = [];
  }

  protected districtChanged(id){
    this.dynamicPlaceList = this.places.filter((place)=>
      place.parentId == id
    )
  }

}

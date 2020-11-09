import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {

  registrationList = [
    {
      name: "New Registration"
    },
    {
      name: "Create Registration", 
      subItems: [{ name: "Registration Type" }, { name: "Search or Add New Patient" }, { name: "Time Slot" }, { name: "Service Details" }]
    },
    {
      name: "Finalize Registration", subItems: [{ name: "dfhfdg" }, { name: "gfhfg" }, { name: "fhfj3" }]
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}

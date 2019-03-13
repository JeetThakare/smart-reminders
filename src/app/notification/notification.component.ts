import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from './notification-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private service: NotificationServiceService) { }
  display: String;
  name: String;
  date: String;
  data = [
       {
          "id":11,
          "reminder":"reminder sdkfj",
          "type":""
       },
       {
          "id":12,
          "reminder":"ashwin",
          "type":""
       },
       {
        "id":13,
        "reminder":"reminderdsds sdkfj",
        "type":""
     },
     {
        "id":14,
        "reminder":"dsdssasd",
        "type":""
     }
    ];
 
  ngOnInit() {
   // To get notifications
   
  //  this.service.getNotifications().subscribe(data => {
  //    console.log(data);
  //  })

  // To get notifications
  }
  
  openModal() {
    this.display = 'true';
  }

  createNotifications(val) {
    console.log(val);
    this.name =  val.target[0].value;
    this.date = val.target[1].value;
    let dateSplit:any = this.date.split("-");
    let year = dateSplit[0];
    let month = dateSplit[1];
    let day = dateSplit[2];
    this.date = day +"-"+ month +"-"+ year; 
    console.log(this.name, this.date);
    let obj = {
      "name" : this.name,
      "date" : this.date
    }
    // Create Reminders POST
    // this.service.createNotifications(obj).subscribe(data => {
    //   console.log(data);
    // })
    // Create Reminders POST
  }

}

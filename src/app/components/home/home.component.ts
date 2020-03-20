import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { ServerDoc } from 'src/app/models/Models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public servers: ServerDoc[];

  constructor(public ui: UIService) {
    ui.getServers().subscribe(data => {
      this.servers = data;
    })
   }

  ngOnInit() {
  }

}

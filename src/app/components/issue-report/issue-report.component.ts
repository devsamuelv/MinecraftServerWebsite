import { Component, OnInit } from '@angular/core';
import { ServerDoc } from 'src/app/models/Models';
import { UIService } from 'src/app/services/ui.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.scss'],
  animations: [
    trigger('msgAni', [
      // ENTRY ANIMATION
      transition('void => *', [
        // init state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          // all padding expressions because of an err in firefox
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        animate('50ms', style({
          // change this according to the object
          height: '*',
          'margin-bottom': '2vh',
          'margin-top': '5vw',
          'margin-right': '26vw',
          'margin-left': '26vw',
        })),
        animate(68)
      ]),

      transition('* => void', [
        animate(50, style({
          transform: 'scale(1.05)'
        })),

        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),

        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0,
        }))
      ])
    ])
  ]
})
export class IssueReportComponent implements OnInit {

  public servers: ServerDoc[];

  public ServerName: string;
  public ServerIssue: string;
  public msg: boolean = false;

  constructor(public ui: UIService) {
    ui.getServers().subscribe(data => {
      this.servers = data;
    })
   }

  ngOnInit() {
  }

  submit() {
    this.ui.sendData(this.ServerName, this.ServerIssue).then(data => {
      this.ServerName = "";
      this.ServerIssue = "";
      this.msg = true;
    })
  }

  hideMsg() {
    this.msg = false;
  }

}

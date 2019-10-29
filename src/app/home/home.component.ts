import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../core/services';
import * as http from 'http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  server: http.Server;
  constructor(private _electron: ElectronService) { }

  ngOnInit() {
    this.server = this._electron.http.createServer((req, res) => {
      if (req.method == 'GET') {
        console.log(req);
        res.end('hello :D');
      }
      else if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            console.log("POST payload: " + body);
          res.end( '' );
        });
      }
    });

    this.server.listen(3000, 'localhost');
  }

}

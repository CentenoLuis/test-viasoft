import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ScrapeddataService } from './services/scrapeddata.service';
import { Datah } from 'src/data-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  datas: Datah[] = [];
  constructor(
    private primengConfig: PrimeNGConfig,
    private scrapeddataService: ScrapeddataService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.scrapeddataService.loadData().subscribe((response) => {
      this.datas = response;
    });
  }

  title = 'front-end-scss-primeng';
}

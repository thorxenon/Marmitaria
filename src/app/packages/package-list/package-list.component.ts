import { Component, OnInit } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [
    new Package('Churrasco dos cria','Churrasco de picanha','https://media.istockphoto.com/photos/barbecue-barbecue-table-spread-beef-brisket-chicken-pork-ribs-beef-picture-id1277777024'),
    new Package('Churrasco dos cria','Churrasco de picanha','https://media.istockphoto.com/photos/barbecue-barbecue-table-spread-beef-brisket-chicken-pork-ribs-beef-picture-id1277777024')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

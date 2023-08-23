import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'vessel', 'type', 'msisdn', 'iccid'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  name: string;
  vessel: string;
  type: string;
  msisdn: string;
  iccid: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: "16192150177", vessel: "Ocean Starlight", type: "International Iridium Certus", msisdn: "16192150177", iccid: "8988169771000021429" },
  { name: "16192150513", vessel: "Aurora Voyager", type: "International Iridium Certus", msisdn: "16192150513", iccid: "8988169771000246679" },
  { name: "16192150565", vessel: "Serene Seafarer", type: "International Iridium Certus", msisdn: "16192150565", iccid: "8988169771000122565" },
  { name: "16193209125", vessel: "Crystal Wavecrest", type: "International Iridium Certus", msisdn: "16193209125", iccid: "8988169771000122649" },
  { name: "16193209713", vessel: "Mystic Mariner", type: "International Iridium Certus", msisdn: "16193209713", iccid: "8988169771000080094" },
  { name: "16193730493", vessel: "Silver Horizon", type: "International Iridium Certus", msisdn: "16193730493", iccid: "8988169771000122557" },
  { name: "16197160395", vessel: "Celestial Breeze", type: "International Iridium Certus", msisdn: "16197160395", iccid: "8988169771000080375" },
  { name: "18052615660", vessel: "Radiant Sailfish", type: "International Iridium Certus", msisdn: "18052615660", iccid: "898816977100008101" }
];
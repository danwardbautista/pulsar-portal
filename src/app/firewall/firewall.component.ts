import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-firewall',
  templateUrl: './firewall.component.html',
  styleUrls: ['./firewall.component.scss']
})
export class FirewallComponent {
  displayedColumns: string[] = ['name', 'inbound', 'outbound'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private modalService: NgbModal) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  open(content: any) {
    this.modalService.open(content);

    console.log('click');
  }

  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }
}

export interface PeriodicElement {
  name: string;
  outbound: string;
  inbound: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { name: "Media Player", outbound: "Deny All", inbound: "Allow All"},
    { name: "Block Youtube", outbound: "Deny All", inbound: "Deny All"},
    { name: "SMTP Server", outbound: "Allow All", inbound: "Deny All"},
    { name: "Block Facebook", outbound: "Deny All", inbound: "Deny All"},
    { name: "Geolocation Tracking Services", outbound: "Deny All", inbound: "Allow All"},
    { name: "Block Twitter", outbound: "Deny All", inbound: "Deny All"},
];

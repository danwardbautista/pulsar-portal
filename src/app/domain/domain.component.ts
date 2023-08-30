import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent {
  displayedColumns: string[] = ['name', 'domain'];
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
  domain: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { name: "Block Youtube", domain: "6",},
    { name: "Block Facebook", domain: "3",},
    { name: "Allow CNN", domain: "3",},
    { name: "Allow Fox News", domain: "1",},
    { name: "Allow Reuters", domain: "3",},
    { name: "Block Netflix", domain: "2",},
    { name: "Block Tiktok", domain: "5",},
    { name: "Allow Whatsapp", domain: "8",},
    { name: "Allow Viber", domain: "2",},
    { name: "Allow Gmail", domain: "3",},

];


import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerting',
  templateUrl: './alerting.component.html',
  styleUrls: ['./alerting.component.scss']
})
export class AlertingComponent {
  rows: any[] = [{ 
    presetService: '',
    protocol: '',
    portRange: '',
    remoteAddress: '',
    description: '',
  }];

  addRow() {
    this.rows.push({
      presetService: '',
      protocol: '',
      portRange: '',
      remoteAddress: '',
      description: '',
    });
  }

  deleteRow(index: number) {
    if (this.rows.length > 1) {
      this.rows.splice(index, 1);
    }
  }

  rows2: any[] = [{ 
    presetService: '',
    protocol: '',
    portRange: '',
    remoteAddress: '',
    description: '',
  }];

  addRow2() {
    this.rows2.push({
      presetService: '',
      protocol: '',
      portRange: '',
      remoteAddress: '',
      description: '',
    });
  }

  deleteRow2(index: number) {
    if (this.rows2.length > 1) {
      this.rows2.splice(index, 1);
    }
  }

  isCardVisible: boolean = false;
  display:any;

  toggleCardOpen(elementData:any) {
    this.display = elementData;

    this.isCardVisible = true;
  }

  
  toggleCardClose() {
    this.isCardVisible = false;
  }

  displayedColumns: string[] = ['name', 'status'];
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
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { name: "1125 Block", status: "Enabled"},
    { name: "12.5MB Alert", status: "Enabled"},
    { name: "120 MB Alert", status: "Enabled"},
    { name: "135766", status: "Enabled"},
    { name: "137222 Block at 5GB alert every 1000MB sisinc", status: "Enabled"},
    { name: "15 MB Alert", status: "Enabled"},
    { name: "151972 block 5gb per greglee", status: "Enabled"},
    { name: "152512 block at 1100 base 500ish", status: "Enabled"},
    { name: "152736", status: "Enabled"},
    { name: "156197", status: "Enabled"},
];
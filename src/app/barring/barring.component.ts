import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-barring',
  templateUrl: './barring.component.html',
  styleUrls: ['./barring.component.scss']
})
export class BarringComponent {
  displayedColumns: string[] = ['name', 'status', 'action'];
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
    { name: "1 GB Block", status: "Enabled"},
    { name: "100% usage bar no alert off rental", status: "Enabled"},
    { name: "100% usage bar no alert off rental", status: "Enabled"},
    { name: "137222 Block at 5GB alert every 1000MB sisinc", status: "Enabled"},
    { name: "151972 block 5gb per greglee", status: "Enabled"},
    { name: "152512 block at 1100 base 500ish", status: "Enabled"},
    { name: "16196129241 5gb block", status: "Enabled"},
    { name: "16193199613 100 meg barr", status: "Enabled"},
    { name: "16194801889 1gb barr", status: "Enabled"},
    { name: "17865780494 rental c700 215651", status: "Enabled"},
    { name: "186446 Pasquale De Rosa", status: "Enabled"},
    { name: "190516 rental subd 10gb vl", status: "Enabled"},
    { name: "20 meg step 100 meg bar", status: "Enabled"},
];
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

  // This is for outbound section

  presetServiceValues: { [key: string]: { protocol: string; portRange: string } } = {
    custom: { protocol: '', portRange: '' },
    HTTP: { protocol: '6', portRange: '80' },
    HTTPS: { protocol: '6', portRange: '443' },
    HTTPUDP: { protocol: '17', portRange: '80' },
    HTTPSUDP: { protocol: '17', portRange: '443' },
    FTP: { protocol: '6', portRange: '21' },
    NTP: { protocol: '17', portRange: '123' },
    POP3: { protocol: '6', portRange: '110' },
    SIP: { protocol: '6', portRange: '5060' },
    SMTP: { protocol: '6', portRange: '25' },
    SNMP: { protocol: '17', portRange: '161' },
    SSH: { protocol: '6', portRange: '22' },
    TELNET: { protocol: '6', portRange: '23' },
  };

  selectedPresetService: string = 'custom';


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

  // THIS IS FOR INBOUND SECTION

  presetServiceValues2: { [key: string]: { protocol: string; portRange: string } } = {
    custom: { protocol: '', portRange: '' },
    HTTP: { protocol: '6', portRange: '80' },
    HTTPS: { protocol: '6', portRange: '443' },
    HTTPUDP: { protocol: '17', portRange: '80' },
    HTTPSUDP: { protocol: '17', portRange: '443' },
    FTP: { protocol: '6', portRange: '21' },
    NTP: { protocol: '17', portRange: '123' },
    POP3: { protocol: '6', portRange: '110' },
    SIP: { protocol: '6', portRange: '5060' },
    SMTP: { protocol: '6', portRange: '25' },
    SNMP: { protocol: '17', portRange: '161' },
    SSH: { protocol: '6', portRange: '22' },
    TELNET: { protocol: '6', portRange: '23' },
  };

  selectedPresetService2: string = 'custom';


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

  deleteRow2(index2: number) {
    if (this.rows2.length > 1) {
      this.rows2.splice(index2, 1);
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
  
  displayedColumns: string[] = ['name', 'inbound', 'outbound'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private modalService: NgbModal) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.addRow();

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

  openXxl(content: any) {
    this.modalService.open(content, { size: '500' });
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

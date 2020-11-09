import { AfterViewInit, Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  address: string;
  description: string;
}
const ADDRS: string[] = [
  'Pendidikan', 'Pedungan', 'Sidakarya', 'Sanur', 'Tohpati', 'Serangan', 'Kuta', 'Canggu', 'Buleleng', 'Gianyar',
  'Klungkung', 'Jimbaran', 'Sesetan', 'Denpasar', 'Ubud'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const STATUS: string[] = [
  'Waiting','Pending','Completed','Cancelled'
];

const DESC: string[] = [
  'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.',
  'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.',
  'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.'
];


@Component({
  selector: 'app-data-registration',
  templateUrl: './data-registration.component.html',
  styleUrls: ['./data-registration.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DataRegistrationComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'address', 'edit'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<UserData>(true, []);
  expandedElement: UserData| null;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: UserData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  constructor() {

    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  const address = ADDRS[Math.round(Math.random() * (ADDRS.length - 1))];

  const progress = STATUS[Math.round(Math.random() * (STATUS.length - 1))];

  return {
    id: id.toString(),
    name: name,
    progress: progress,
    address: address,
    description: DESC.toString()
  };
}

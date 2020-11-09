"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataRegistrationComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var collections_1 = require("@angular/cdk/collections");
var animations_1 = require("@angular/animations");
var ADDRS = [
    'Pendidikan', 'Pedungan', 'Sidakarya', 'Sanur', 'Tohpati', 'Serangan', 'Kuta', 'Canggu', 'Buleleng', 'Gianyar',
    'Klungkung', 'Jimbaran', 'Sesetan', 'Denpasar', 'Ubud'
];
var NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
var STATUS = [
    'Waiting', 'Pending', 'Completed', 'Cancelled'
];
var DESC = [
    'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.',
    'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.',
    'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.'
];
var DataRegistrationComponent = /** @class */ (function () {
    function DataRegistrationComponent() {
        this.displayedColumns = ['id', 'name', 'progress', 'address', 'edit'];
        this.selection = new collections_1.SelectionModel(true, []);
        // Create 100 users
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource = new table_1.MatTableDataSource(users);
    }
    DataRegistrationComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    DataRegistrationComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    DataRegistrationComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.id + 1);
    };
    DataRegistrationComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DataRegistrationComponent.prototype.ngOnInit = function () {
    };
    DataRegistrationComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], DataRegistrationComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], DataRegistrationComponent.prototype, "sort");
    DataRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-data-registration',
            templateUrl: './data-registration.component.html',
            styleUrls: ['./data-registration.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                animations_1.trigger('detailExpand', [
                    animations_1.state('collapsed', animations_1.style({ height: '0px', minHeight: '0' })),
                    animations_1.state('expanded', animations_1.style({ height: '*' })),
                    animations_1.transition('expanded <=> collapsed', animations_1.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ]
        })
    ], DataRegistrationComponent);
    return DataRegistrationComponent;
}());
exports.DataRegistrationComponent = DataRegistrationComponent;
/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    var address = ADDRS[Math.round(Math.random() * (ADDRS.length - 1))];
    var progress = STATUS[Math.round(Math.random() * (STATUS.length - 1))];
    return {
        id: id.toString(),
        name: name,
        progress: progress,
        address: address,
        description: DESC.toString()
    };
}

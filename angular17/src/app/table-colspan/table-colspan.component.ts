import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-table-colspan',
  templateUrl: './table-colspan.component.html',
  styleUrl: './table-colspan.component.scss'
})
export class TableColspanComponent implements OnInit{
  displayedColumns: string[] = [];
  dataSource = ELEMENT_DATA;

  tables = [0];
  body: any = {
    employeeId: "MPTaPeba1tFN_56N2BzN3Q",
    typeArea: "NA",
     startDate: moment().startOf('isoWeek').format('YYYY/MM/DD'),
     endDate: moment().startOf('isoWeek').add(4, 'weeks').subtract(1, 'day').endOf('isoWeek').format('YYYY/MM/DD'),
    timeZone: "Europe/Sofia",
    marketPlace: false
  };

  constructor(
    private http: HttpClient
  ) {
    this.displayedColumns.length = 24;
    this.displayedColumns.fill('filler');

    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns[0] = 'position';
    this.displayedColumns[1] = 'name';
    this.displayedColumns[22] = 'weight';
    this.displayedColumns[23] = 'symbol';
  }
ngOnInit(){
this.getMyPlanningBoard()
}
  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  getMyPlanningBoard() {
    // this.loadingService.isGlobalLoading = true;
    this.http.post(`/ramp_it_war/api1/getUserPlanningBoardData`, this.body).subscribe((response: any) => {
      console.log(response)
      // this.dataContainer = response;
      // this.allValues = this.extractValues(this.dataContainer.weeksData);
      // this.userData = response?.userInformationDTO || {};
      // // setTimeout(() => {
      // //   this.getAvailableHours()
      // // },1000)
      // if (response) {
      //   this.loadingService.isGlobalLoading = false;
      //   for (const week of response.weeksData) {
      //     if (week.projectsData) {

      //       for (const projectsData of week.projectsData) {
      //         if (projectsData.planningBoardDayData) {
      //           for (const dayData of projectsData.planningBoardDayData) {
      //             this.staffingIdComment = dayData.staffingId
      //             this.getWeeksData = dayData.value;
      //           }
      //           for (const dayData of projectsData.planningBoardDayData) {
      //             this.dayDataComment = dayData.comment;

      //           }
      //         }
      //       }
      //     }
      //   }
      //   this.changeDetectorRef.detectChanges(); // Trigger change detection manually
      // }
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
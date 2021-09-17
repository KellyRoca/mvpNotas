import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import {FormsModule} from "@angular/forms";


@NgModule({
 declarations: [],
 exports: [
   MatInputModule,
   MatTableModule,
   MatListModule,
   MatDialogModule,
   MatToolbarModule,
   MatMenuModule,
   MatTooltipModule,
   MatSnackBarModule,
   MatExpansionModule,
   MatCardModule,
   MatDividerModule,
   MatSidenavModule,
   FormsModule
 ],
 providers: [
 ]
})
export class MaterialModule { }
 
 


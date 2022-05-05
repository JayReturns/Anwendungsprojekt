import {Component, Input} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditTransactionDialogComponent} from "./edit-transaction-dialog/edit-transaction-dialog.component";
import {Transaction} from "../../models/transaction.model";

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent {
  @Input() transaction?: Transaction

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = "50%";

    dialogConfig.data = {
      transaction_id: this.transaction?.id,
      transaction_title: this.transaction?.title,
      transaction_date: this.transaction?.date,
      transaction_amount: this.transaction?.value,
      transaction_note: this.transaction?.notice



    }

    const dialogRef = this.dialog.open(EditTransactionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Edited Transaction:", data)
    );

  }

}
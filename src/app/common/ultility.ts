import { MatSnackBar } from '@angular/material/snack-bar';
export class Ultility {
  static showSnackBar(
    snackbar: MatSnackBar,
    message: string = '',
    type: string = ''
  ) {
    if (message && type) {
      snackbar.open(message, 'Đóng', {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['custom-snackbar', type.toLowerCase()],
      });
    }
  }
}

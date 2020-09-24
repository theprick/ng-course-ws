import { AbstractControl, AsyncValidator, ValidationErrors, FormGroup } from '@angular/forms';

export const VALID_PASSWORD = 'abcdefghij';

export class PasswordValidators {
  static checkPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === VALID_PASSWORD) {
          resolve(null);
        } else {
          resolve({
            wrongPasswd: true
          });
        }
      }, 3000)
    });
  }

  static matchConfirmPassword(control: AbstractControl): ValidationErrors | null {
    let confPasswd = control.value;
    if (control.parent) {
      let newPasswd = (control.parent as FormGroup).get('newPasswd').value;
      if (confPasswd !== newPasswd) {
        return { mismatchedPasswd: true }
      }
    }
    return null;
  }
}

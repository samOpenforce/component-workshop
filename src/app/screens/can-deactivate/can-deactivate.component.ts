import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DialogService } from '../../services/dialog.service';
import { AbstractFormComponent } from '../../shared/abstract-form-component';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
  styleUrls: ['./can-deactivate.component.scss'],
})
export class CanDeactivateComponent
  extends AbstractFormComponent
  implements OnInit
{
  accountForm!: FormGroup;
  hasChanges = false;
  constructor(
    protected dialogService: DialogService,
    private formBuilder: FormBuilder
  ) {
    super(dialogService);
  }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      membershipId: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
    });

    this.accountForm.valueChanges.subscribe((changes) => {
      this.hasChanges = true;
    });
  }

  // controls canDeactivate via abstract-form.component
  hasFormChanges(): boolean {
    return this.hasChanges;
  }

  get getControl(): {
    [key: string]: AbstractControl;
  } {
    return this.accountForm.controls;
  }

  // TODO move to utils
  suppressNegatives(event: KeyboardEvent): void {
    if (event.key === '-' || event.code === 'Minus') {
      event.preventDefault();
    }
  }
}

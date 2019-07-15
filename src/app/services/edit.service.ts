import {Injectable} from '@angular/core';

@Injectable()
export class EditService {

  private currentEditingObject = null;

  public stopEditing() {
    this.currentEditingObject = null;
  }

  public isEditing(obj) {
    return obj !== null && this.currentEditingObject === obj;
  }

  public isNotEditing(obj) {
    return obj === null || this.currentEditingObject !== obj;
  }

  public startEditing(objectToEdit) {
    this.currentEditingObject = objectToEdit;
  }
}

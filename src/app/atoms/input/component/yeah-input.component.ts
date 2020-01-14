import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "yeah-input",
  templateUrl: "./yeah-input.component.html",
  styleUrls: ["./yeah-input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YeahInputComponent),
      multi: true
    }
  ]
})
export class YeahInputComponent implements ControlValueAccessor {
  @Input() inputId: string;
  @Input() inputTabIndex: string;
  @Input() inputType: string;
  @Input() placeholderText: string;
  @Input() labelText: string;
  inputValue: string;

  constructor() {
    this.inputId = "txt";
    this.inputTabIndex = "1";
    this.inputType = "text";
    this.placeholderText = "Enter here...";
    this.labelText = "Label...";
    this.inputValue = "";
  }

  private _propagateChange = (_: any) => {};

  writeValue(obj: any): void {
    if (obj) {
      this.inputValue = obj;
    }
  }

  registerOnChange(fn: any): void {
    this._propagateChange = fn;
  }

  onChange(event: any) {
    this.inputValue = event.target.value;
    this._propagateChange(this.inputValue);
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}

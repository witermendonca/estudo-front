import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../service/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public value?: string;

  @Input() public label: string = '';

  @Output() public valueChange = new EventEmitter();

  public options = YesNoButtonGroupOptions;

  public id!: string;

  public onChange = (value: string) => {};

  public onTouched = (value: string) => {};

  constructor(uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generatedUniqueIdWithPrefix('yes-no-button-group');
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: (value: string) => void): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  public activate(value: string): void {
    this.writeValue(value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public form!: FormGroup;

  title = 'projeto-acessibilidade';

  constructor(private formBuider: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuider.group({
      yesNoAnswer: ['no'],
    });
  }

  public submit() {
    console.log(this.form.value);
  }
}

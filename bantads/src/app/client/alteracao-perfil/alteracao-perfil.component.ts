import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alteracao-perfil',
  templateUrl: './alteracao-perfil.component.html',
  styleUrls: ['./alteracao-perfil.component.css']
})
export class AlteracaoPerfilComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.checkPasswords });
  }

  onSubmit() {
    // Logic to handle form submission
    console.log(this.profileForm.value);
  }

  checkPasswords(group: FormGroup) { 
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }   
  }
}

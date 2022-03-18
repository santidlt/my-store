import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'san'
  age = 19
  img = 'https://source.unsplash.com/random'
  buttonDisable = true

  person = {
    name: 'kk',
    age: 12,
    avatar: 'https://source.unsplash.com/random'
  }

  toggleButton(){
    this.buttonDisable = !this.buttonDisable;
  }

  alertAtSending(){
    alert('CAGASTE')
  }

  ageIncrease(){
    this.person.age += 1
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement
    this.person.name = element.value
  }
}

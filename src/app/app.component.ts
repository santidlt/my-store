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
  newName=''
  widthImage = 200

  person = {
    name: 'kk',
    age: 25,
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

  names: string[] = ['rene', 'hasbu', 'san']
  boxName = ''
  box={
    width: 100,
    height: 100,
    background: 'red'
  }

  addName(){
    this.names.push(this.newName)
    this.newName = ''
  }

  deleteName(index: number){
    this.names.splice(index, 1)
  }
}

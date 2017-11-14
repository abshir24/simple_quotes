import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  quote = {author:"",quote:"",votes:0}
  quotes = []

  addQuote(){
    console.log("addquote")
    this.quotes.push(this.quote)
    this.quote = {author:"",quote:"",votes:0}
  }

  upVote(idx){
    this.quotes[idx].votes+=1
    return
  }

  downVote(idx){
    if(this.quotes[idx].votes > 0){
      this.quotes[idx].votes-=1
    }
    return
  }

  removeQuote(idx){
    this.quotes.splice(idx, 1)
  }


}

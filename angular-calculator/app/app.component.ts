import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {

  memory = [];
  latest = 0;
  operators = ['+', '-', '*', '/', '%'];
  operator = this.operators[0]
  first;
  second;

  doAddition() {
      var times = 5;
      this.latest = '. ';
      var _this = this;
      setTimeout(function tickslowly() {
        if (times == 0) {
          var latestResult;
          var first = parseInt(_this.first);
          var second = parseInt(_this.second);
          switch (_this.operator) {
            case '+':
              latestResult = first + second;
              break;
            case '-':
              latestResult = first - second;
              break;
            case '*':
              latestResult = first * second;
              break;
            case '/':
              latestResult = first / second;
              break;
            case '%':
              latestResult = first % second;
              break;
          }
          _this.memory.unshift({
            timestamp: new Date(),
            first: _this.first,
            operator: _this.operator,
            second: _this.second,
            value: latestResult
          });
          _this.first = _this.second = '';
          _this.latest = latestResult;
        } else {
          _this.latest += '. ';
          times--;
          setTimeout(tickslowly, 300);
        }
      }, 300)
  }



}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
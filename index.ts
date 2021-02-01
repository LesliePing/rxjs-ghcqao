import './style.css';
console.clear();

// begin lesson code
import { Observable } from 'rxjs';

const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete!')
};

const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
});

// You can pass an observer object, with any of the three callbacks
// observable.subscribe(observer);

/*
 * Or, if you only need a next callback you can just supply
 * it as the first argument. As of RxJS 7 supplying more then the 
 * next callback in this way is deprecated.
 */
observable.subscribe(value => console.log('next', value));

/********************
 * Have a question, comment, or just want to chat about RxJS?
 * Ping me on Ultimate Courses slack or on 
 * Twitter https://twitter.com/btroncone
 * I look forward to hearing from you!
 * For additional RxJS info and operator examples check out
 * Learn RxJS (https://www.learnrxjs.io) and
 * the Ultimate Course RxJS blog!
 * (https://ultimatecourses.com/blog/category/rxjs)
 ********************/
import React, { useEffect, useState } from "react";
import { BehaviorSubject, interval } from "rxjs";
import { map, filter, switchMap, startWith } from "rxjs/operators";

import "./CounterApp.css";
const counter$ = new BehaviorSubject(0);
const autoIncrement$ = new BehaviorSubject(false);

const autoIncrementLogic$ = autoIncrement$.pipe(
  switchMap((isEnabled) =>
    isEnabled
      ? interval(1100).pipe(
        map(() => 1)
      )
      : []
  )
);


autoIncrementLogic$.subscribe((increment) => {
  counter$.next(Math.min(98, counter$.getValue() + increment));
});

const CounterApp = () => {
  const [count, setCount] = useState(counter$.getValue());
  const [isAutoIncrement, setIsAutoIncrement] = useState(false);

  useEffect(() => {
    const subscription = counter$.subscribe(setCount);
    return () => subscription.unsubscribe();
  }, []);

  const increment = () => {
    counter$.next(Math.min(98, count + 1));
  };

  const decrement = () => {
    counter$.next(Math.max(0, count - 1));
  };

  const reset = () => {
    counter$.next(0);
  };

  const toggleAutoIncrement = () => {
    autoIncrement$.next(!isAutoIncrement);
    setIsAutoIncrement(!isAutoIncrement);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-display">Counter App</h1>
      <h1 className="count">{count}</h1>
      <div className="button-row">
        <button className="counter-button decrement" onClick={decrement}>-</button>
        <button className="counter-button increment" onClick={increment}>+</button>
      </div>
      <button className="counter-button reset" onClick={reset}>Reset</button>
      <div className="toggle-wrapper">
        <div className="toggle-container" onClick={toggleAutoIncrement}>
          <div className={`toggle-switch ${isAutoIncrement ? "active" : ""}`}></div>
        </div>
        <span className="toggle-label">Auto Increment</span>
      </div>
    </div>
  );
};

export default CounterApp;

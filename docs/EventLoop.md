# The Race

There are 2 cubes that are animated pixel by pixel. The first one is updated using `setTimeout`, the second one using `requestAnimationFrame`.

Which one is going to be faster?

# The Alert (in the app)

There is a button that triggers a function that triggers an alert. Here is the code of the function:

```javascript
const incrementWithAlert = () => {
  let toto = 0;

  new Promise(resolve => {
    resolve();
  }).then(() => {
    toto++;
  });

  setTimeout(() => {
    Alert.alert('count pressed', `total: ${toto}`);
  }, 0);
};
```

What is going to be displayed in the alert? Try to draw a diagram of the microtasks to understand.

# The Alert (in the test)

The test is broken :(

Let's try to fix it :)

<details>
  <summary>If you need help</summary>
  see: [https://jestjs.io/docs/timer-mocks](https://jestjs.io/docs/timer-mocks)
</details>

<details>
  <summary>If you have succeeded, extra question</summary>
  Why does `runAllTimers` work and `runOnlyPendingTimers` does not?
</details>

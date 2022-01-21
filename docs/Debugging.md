# Debugging

On the debugging page, we have a todo list.
We can enter a title for a new item, and add it to the list.
Once an item is added, an alert is displayed.

## Understanding the system

One user encountered a bug.
Sometimes the alert is displayed twice on Android. Here is a quote from a user:

> "I add a few items to the list, then take a screenshot, tap the back arrow to close the app, open Twitter and post my screenshot. Then when I reopen the app and add new items, the bug happens"

Can you understand why?

## Getting to know Flipper

When on the debug page, when you click on the "Populate" button it adds 200 items to the list.
Afterwards, there is a small lag every time we add a new item.

Use the Flipper React debugger to understand how to fix this.

# What is Fiber

A Fiber is a plain JS object, = unit of work processed by function like beginWork() and completeWork()

The work 
- state change
- lifecycle function
- DOM change

The work is later committed resulting in visible changes in the DOM
Work can be handled directly or scheduled for the future

Fiber focuses on Animations and Responsiveness
It can 
- split work into chunks and prioritize tasks.
- pause work and come back to it later.
- reuse previously completed work
- abort work if it is needed.


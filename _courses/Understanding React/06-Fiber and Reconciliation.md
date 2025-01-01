# Fiber and Reconciliation

The Fiber Tree is a data structure used internally by React starting from React 16. 
It represents the components of a React application. React uses this tree to efficiently schedule and reconcile updates to the UI.

Each node in the Fiber Tree corresponds to a React component or element.

Reconciliation:
The Fiber Tree enables React to efficiently update the UI by comparing the current and previous versions of the tree (a process called reconciliation).

Concurrency:
React Fiber introduces features like concurrent rendering, which allows React to break down rendering work into smaller units and prioritize updates for a smoother user experience.
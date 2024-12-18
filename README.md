# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by incorrectly using the dependency array.

## Bug Description
The `bug.js` file contains a component that uses the `useEffect` hook to update a state variable.  The dependency array is empty (`[]`), meaning the effect runs after every render.  Inside the effect, the state is updated, which triggers a re-render, leading to an infinite loop.

## Solution
The `bugSolution.js` file provides a corrected version.  The solution involves correctly specifying the dependency array in useEffect. In this case, an empty array means the effect only runs once on mount and it should update only when certain values change.
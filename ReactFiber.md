- React Fiber is an ongoing implementation of React’s core algorithm
- Its Headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames
- Other key features include:
  - ability to pause, abort, or reuse work as new updates come in;
  - the ability to assign priority to different types of updates and new concurrency primitives

## Reconciliation

- Whenever a change is made to the state of the react application, the virtual DOM is updated to reflect the change. React then compares the virtual DOM to the real DOM and determines the most effective way to update the real DOM. This process is called reconciliation
  [Reconciliation 🔗](https://medium.com/@surksha8/virtual-dom-and-real-dom-understanding-the-differences-da8f3fab4261#:~:text=The%20Virtual%20DOM%20is%20a,process%20is%20known%20as%20Reconciliation)

## Update

- A change in the data used to render a React app. Usually the result of ‘setState’, eventually results in a re-render
- The central idea of React’s API is to think of updates as if they cause the re-render of the entire React app. This allows the developer to think declaratively rather than worry about effectively transitioning between states
- Re-rendering entire applications on each change can work only for trivial applications. For large applications, it is prohibitively costly in terms of performance. React has optimizations that create the appearance of the whole app re-rendering while maintaining great performance
- Reconciliation is an algorithm behind what’s popularly understood as ‘virtual-dom’.
- A high-level description of reconciliation goes like this:
  - When app is rendered for the first time, a tree of nodes is generated and is saved in memory
  - Then the tree is flushed to the rendering environment
  - In the case of a browser application, the three is converted to a set of DOM instructions
  - When the app is updated (usually via setState) a new tree is generated
  - This is then diffed with the old tree to compute the operations that are needed to update the rendered app

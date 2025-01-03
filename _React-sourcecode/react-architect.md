
# React update process, 异步可中断

schedule : Create update

reconciler: Decide which component need update. Create v-dom tree, run Diff algorithm, add updated tag

render: Render the component 
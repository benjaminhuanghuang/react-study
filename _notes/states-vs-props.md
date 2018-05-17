- States and properties are both attributes of a class, meaning they’re this.state and
this.props

- States are mutable (changing), props are immutable (no changing).

- Props are passed parent components, States are defined in the component itself

The philosophy is that you can only change the value of a property from the
parent, not the component. So properties determine the view upon creation, and
then they remain static (they don’t change). The state, on the other hand, is set and
updated by the object.

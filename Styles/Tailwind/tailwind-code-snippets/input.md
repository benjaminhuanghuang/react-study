


## letter space
```css
/* adds 5 pixels of space between each character */
input[type='password'] {
@apply tracking-[5px];
}

/* Using default letter-spacing, overriding any previous letter-spacing applied to the element. */
input[type='password']::placeholder {
@apply tracking-normal;
}
```
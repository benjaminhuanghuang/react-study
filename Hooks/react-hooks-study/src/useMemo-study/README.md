# useMemo
useMemo will only recompute the memorized value when the dependencies has changed.

## Use case
a toggle theme button changes theme may cause a data loading unnecessary


```ts
function filterProductsByPrice() {

}

const memorizeFilterProductsByPrice = 
    useMemo(() => filterProductsByPrice(price), [price]);


{
    memorizeFilterProductsByPrice.map(i => <li>{i.title}</li>)
}
```
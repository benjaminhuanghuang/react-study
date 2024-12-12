# Motion code snippets


## Moving
initial defines the starting state of the element before any animation occurs

whileInView specifies the animation to play when the element comes into the viewport

viewport is used to control how the animation is triggered when the element enters the viewport.

cubic-bezier(x1, y1, x2, y2)

x1 and x2 are the horizontal control points (on the X-axis).
y1 and y2 are the vertical control points (on the Y-axis).

```js
<motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.44, 0, 0, 1] },
    }}
    viewport={{
        amount: "some",
        once: true,
    }}>
    You partner in Health & Wellness
</motion.h1>
```


```js
<motion.div className="col-lg-6 d-flex justify-content-center"
    initial={{ opacity: 0, x: -300 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}>
    <img className='img-fluid w-75 mt-4 mt-lg-0' src={AboutImg} alt='About us' />
</motion.div>
```
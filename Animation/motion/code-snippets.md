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

## Button with mask
```html
 <button className="group relative h-[56px] w-[180px] overflow-hidden 
rounded-full border-2 border-[#131S316] text-base font-medium leading-[28px] 
text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05] md:h-[60px] md:w-[202px] md:text-[18px]">
    <div className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] 
    w-[207px] rounded-full bg-violet-900 transition-all duration-300 group-hover:h-[59px]"></div>
    <span className="group-hover:text-white">Book Now</span>
</button>
```

## Button with link
```html
 <button
    className="flex h-[56px] w-[180px] items-center justify-center
            gap-3 rounded-full text-base font-medium leading-[28px] text-[#445568] 
            underline-offset-8 transition-all hover:underline
            md:h-[60pxl md:w-[202px] md:text-[18px]"
    >
    <span>Appointment</span>
    <img src={arrow} alt="" />
</button>
```
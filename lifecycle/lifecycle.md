- 卡老师的硬核React面试题
  - https://www.bilibili.com/video/BV16t4y1r7oJ/?spm_id_from=333.788.recommend_more_video.0



React components lifecycle events:
- constructor()—Happens when an element is created and lets you set the default properties and the initial state 
- Mounting
    - componentWillMount()—Happens before mounting to the DOM
    - componentDidMount()—Happens after mounting and rendering
- Updating
    - componentWillReceiveProps(nextProps)—Happens when the component is about to receive properties
    - shouldComponentUpdate(nextProps, nextState)-> bool—Lets you optimize the component’s rerendering by determining when to update and when to not update
    - componentWillUpdate(nextProps, nextState)—Happens right before the component is updated
    - componentDidUpdate(prevProps, prevState)—Happens right after the component updated
- Unmounting
    - componentWillUnmount function()—Lets you unbind and detach any event listeners or do other cleanup work before the component is unmounted


Events categories:
- Mounting events—Happen when a React element (an instance of a component class) is attached to a DOM node
- Updating events—Happen when a React element is updated as a result of new values of its properties or state
- Unmounting events—Happen when a React element is detached from the DOM


Each category can fire events various number of times:
- Mounting—React invokes events only once.
- Updating—React can invoke events many times.
- Unmounting—React invokes events only once.
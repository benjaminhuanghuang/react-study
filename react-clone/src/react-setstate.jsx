function componentDidMount() {
  for(let i=0;i < 100 ;i ++)
  {
    this.setState((prevstate, prevProps)=>{
      console.log(prevState.num);
      return {
        num: prevState.num + 1
      }
    })
  }
}
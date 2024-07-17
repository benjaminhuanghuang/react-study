


export default class AboutThisPage extends component {
  constructor(props) {
    super(props);

    // Bind this
    this.handleThis = this.handle.bind(this);
  }


  handle() {
    console.log("Normal this", this);
  }


  handleArrow = ()=>{
    console.log("Arrow this", this);
  }

  render(){
    reutrn (
      <div>
        <button onClick={this.handleArrow}></button>

        <button onClick={this.handleThis}></button>
        
        <button onClick={(...args)=>this.handle(...args)}></button>
      </div>
    )
  }
}
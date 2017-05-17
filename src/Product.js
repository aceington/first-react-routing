import React, {Component} from 'react';
import axios from 'axios';

class Product extends Component {

  constructor(props){
    super(props)

    this.state = {
      product: {}
    }
  }

  componentDidMount(){
    axios.get('https://practiceapi.devmountain.com/products/' + this.props.match.params.id).then(response=>{
      this.setState({product: response.data})
    })
  }

  render(){
    var {product} = this.state;

    return(
      <div>
        <img src={product.image} alt={product.title}/>
        <h1>{product.title}</h1>
        <h5>Price: {product.price}</h5>
        <h5>{product.desc}</h5>
      </div>
    )
  }
}

export default Product

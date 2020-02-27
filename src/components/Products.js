import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Products extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const productItems = this.props.posts.map(post => (
      <div className="product" key={post.npkId}>
        <div>
          <img className="product-img" src={post.image} alt="img"></img>
          <h3 className="product-brand">{post.brand}</h3>
          <p className="product-name">{post.name}</p>
          <p>{post.price},-</p>
          <div>
            <button className="btnRemove">-</button>
            <input
              defaultValue="0"
              type="number"
              className="inputQty"
              min="0"
            ></input>
            <button className="btnAdd">+</button>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <div className="flex-container">{productItems}</div>
      </div>
    );
  }
}

//Takes state and puts into prop
const mapStateToProps = state => {
  return {
    posts: state.posts.items
  };
};

//Connects the react component to the store
export default connect(mapStateToProps, { fetchPosts })(Products);

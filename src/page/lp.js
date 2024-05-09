// lp.js
import React, { Component } from "react";
import ItemCard from "./components/itemcard";
class Listpage extends Component {
    state = {};
    render() {
        const { Itemcard } = this.props;
        return (
            <ul className="list__itemview">
                {Itemcard &&
                    Itemcard.map((itemdata) => {
                        return (
                            <ItemCard
                                ImageURL={itemdata.ImageURL}
                                BrandName={itemdata.BrandName}
                                GoodsName={itemdata.GoodsName}
                            />
                        );
                    })}
            </ul>
        );
    }
}
export default Listpage;
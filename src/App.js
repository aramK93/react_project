//App.js
import React, { Component } from "react";
import axios from "axios";  // 설치 후 import
import Listpage from "./page/lp";

class App extends Component {
    state = {
        loading: false,
        ItemList: []
    };
    loadItem = async () => {
        axios
            .get("./SearchJson.json")
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    ItemList: data.Item
                });
            })
            .catch(e => {  // API 호출이 실패한 경우
                console.error(e);  // 에러표시
                this.setState({
                    loading: false
                });
            });
    };

    componentDidMount() {
        this.loadItem();
    }

    render() {
        const { ItemList } = this.state;
        console.log(ItemList);

        return (
            <div>
                <Listpage Itemcard={ItemList} />
            </div>
        );
    }
}

export default App;
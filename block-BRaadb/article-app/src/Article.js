import React from "react";
import withData from "./withData";
import data from './data.json'
import { Link } from "react-router-dom";

class Article extends React.Component{
    state = {
        searchTerm: ""
      };
    handleChange = ({ target: { value } }) => {
        this.setState({ searchTerm: value });
      };
    render(){
        let filteredArticles = data.filter((article) =>
        article.title.toLowerCase().includes(this.state.searchTerm)
      );
  
        console.log(data)
        return<>
        <div>
        <input 
          placeholder="Search"
          className="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />

        <ul>
            {
                filteredArticles.map((d)=>{
                    return (
                        <li key={d.title} className="article">
                          <h5>  <Link to={"data/" + d.slug}>{d.title}</Link></h5>
                          <h6>{d.author}</h6>
                            </li>
                    )
                })
            }
        </ul>
        </div>
        
        </>
    }
}
export default withData(Article)
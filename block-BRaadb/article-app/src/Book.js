import React from "react";

import bookdata  from './book.json';

class Book extends React.Component{
    state={
        searchI:"",
    }
    handleChange = ({ target: { value } }) => {
        this.setState({ searchI: value });
      };

    
    render(){
        let filteredBook = bookdata.filter((book) =>
        book.title.toLowerCase().includes(this.state.searchI)
      );

        return<>
        <div>
            <input type="search"
            className="search"
             placeholder="Find your Book"
             onChange={this.handleChange}
             value={this.state.searchI}
             />

            <ul className="grid">

                {filteredBook.map((book)=>{
                    return(

                    <div className="card">
                         <li className="card-li" >
                             <img src={book.image} alt={book.name} width='100'/>
                             <h4 className="h4">{book.title}</h4>
                             <h5 className="h5"> Author:{book.author}</h5>
                              <a href={book.website}><button>Buy Know</button></a>
                         </li>
                    </div>
                    )
                })}
            </ul>
        </div>
        </>
    }
}
export default Book;
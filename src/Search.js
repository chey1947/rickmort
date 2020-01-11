import React from 'react';
import Displayrickymorty from './Displayrickmorty'

class Search extends React.Component {
    constructor (){
        super()
        this.state = {
            results: [],
            searchTerm: '',
            type: ''
        }
    }
    componentDidMount () {
        fetch('https://rickandmortyapi.com/api/character/')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
         this.setState({results: myJson.results})
  });
    }
    handelSearchTerm = e => {
    this.setState({
         searchTerm: e.target.value
    })
    }

    selectSort = e => {
        const value = e.target.value
        this.setState({
            type: e.target.value
        }, () => {
            if (value === 'ascending') {
                this.sortByIdAsc()
            }
            else if (value === 'descending' ) {
                this.sortByIdDesc()
            }
        })

    }
    sortByIdAsc = () => {
        let { results } = this.state;
        results.sort((a, b) => (a.id - b.id))
        this.setState({results});
      }

      sortByIdDesc = () => {
        let { results } = this.state;
        results.sort((a, b) => (b.id - a.id))
        this.setState({results});
      }


    render () {
        const { searchTerm, results } = this.state;
        return (
            <div>
                <select
                    value={this.state.type}
                    onChange={this.selectSort}
                >
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
              <input
                onChange={this.handelSearchTerm}
                type="text"
                placeholder="Search"
                value={this.state.searchTerm}
            />
                <Displayrickymorty results = {results} searchTerm = {searchTerm}/>
            </div>
        ) 
    }
}


export default Search;

import React from 'react';
import { browserHistory as history } from 'react-router';

const viewHide = {
    display:'none'
};

/*
This component displays a form where the user can enter a GitHub username or a project
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.
This will have as an effect to navigate to a new URL, which will display the User/project component
we push it to the router to enable back button history.
*/
class Search extends React.Component {
    constructor(props) {
        super(props);

        this._handleSubmit = this._handleSubmit.bind(this);
        this._changeSearch = this._changeSearch.bind(this)
        this.state = {
            userPlaeHolder : "user name",
            languagePlaceHolder: "language",
            topicplaceHolder:"topic"
        }

    }

    _changeSearch(e){

            if(this._rememberOldreff){
                  this._rememberOldreff.style.display = "none";
            }
            this.refs[this.refs.searchType.value+"SearchContainer"].style.display = "";
            this._rememberOldreff = this.refs[this.refs.searchType.value+"SearchContainer"]
            if(this.refs.searchType.value !== ""){
                this.refs.buttonSearchContainer.style.display = ""
            }else{
                this.refs.buttonSearchContainer.style.display = "none"
            }
    }

    _handleSubmit(e) {
        e.preventDefault();

        let sSearchTypeValue = this.refs.searchType.value;
        if(sSearchTypeValue === "user"){
            history.push(`/${this.refs.searchType.value}/${this.refs.searchText.value}`)
        }else if(sSearchTypeValue === "project"){
            history.push(`/${this.refs.searchType.value}/language:${this.refs.searchTextLang.value}+topic:${this.refs.searchTextTopic.value}`)
        }
    }

    render() {
        return (
            <div className="search-page">
                <form onSubmit={this._handleSubmit}>
                    <label>
                        Select search type:
                    <select ref="searchType" className="search-page__input"  type="select" onChange={this._changeSearch}>
                        <option value="">No Selection</option>
                        <option value="user">github User</option>
                        <option value="project">github Project</option>
                    </select>
                    </label>
                    <span ref="userSearchContainer" style={viewHide}>
                    <input ref="searchText" placeholder={this.state.userPlaeHolder}  className="search-page__input" type="text" />
                    </span>
                    <span ref="projectSearchContainer" style={viewHide}>

                        <input ref="searchTextLang" placeholder={this.state.languagePlaceHolder} className="search-page__input" type="text" />

                        <input ref="searchTextTopic" placeholder={this.state.topicplaceHolder} className="search-page__input" type="text" />

                    </span>
                    <div ref="buttonSearchContainer" style={viewHide}>
                    <button className="search-page__button">Search</button>
                    </div>
                </form>
            </div>
    );
    }
};

export default Search;
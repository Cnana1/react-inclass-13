import React, { Component } from 'react';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "All"
        };
    }

    onSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    onFilter = (event) => {
        this.setState({ type: event.target.value });
    }

    filterItem = (item) => {
        const matchesSearch =
            item.name.toLowerCase().includes(this.state.search.toLowerCase());

        const matchesType =
            this.state.type === "All" ||
            item.type === this.state.type;

        return matchesSearch && matchesType;
    }

    render() {
        const filteredItems = this.props.items.filter(this.filterItem);

        return (
            <div>

                {/* SEARCH BOX */}
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.onSearch}
                />

                {/* DROPDOWN */}
                <select value={this.state.type} onChange={this.onFilter}>
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>

                {/* LIST */}
                <ul>
                    {filteredItems.map((item) => (
                        <li key={item.name}>
                            {item.name} ({item.type})
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default FilteredList;
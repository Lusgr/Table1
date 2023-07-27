import { Component } from "react";
class Table extends Component{
    constructor(props){
        super(props)
    }
    render(props){
        const{id, name, date, count, price, totalAmount}=this.props
        return (
            <>
                <table className="tableContent">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Count</th>
                <th>Price</th>
                <th>Total Amount</th>
            </tr>
        </thead> 
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{date}</td>
                <td>{count}</td>
                <td>{price}</td>
                <td>{totalAmount}</td>
            </tr>
        </tbody>
    </table>
            </>
        )
    }
}
export default Table


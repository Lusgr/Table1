import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from "./table"
import Card from "./Card"

const salesData = [
  { id: 1, name: 'Product A', date: '05-01-2023', count: 5, price: 10,  totalAmount:50},
  { id: 2, name: 'Product B', date: '07-02-2023', count: 3, price: 15,  totalAmount:45 },
  { id: 3, name: 'Product C', date: '08-02-2023', count: 2, price: 20,  totalAmount:40 },
  { id: 4, name: "Product D", date: '05-03-2023', count: 3, price: 50,  totalAmount:150},
  { id: 5, name: 'Product E', date: "08-03-2023", count: 4, price: 35,  totalAmount:140},
  { id: 6, name: 'Product F', date: "15-03- 2023", count: 1, price: 15,  totalAmount:15},
  { id: 7, name: 'Product G', date: '2-04-2023', count: 8, price:30,  totalAmount:240}
]



const getTotalAmount = () => {
  let total = 0;
  salesData.forEach((sale) => {
    total += sale.count * sale.price;
  });
  return total;
};

function App() {
  return (
    <div>
      
        {salesData.map((el)=>(
           
             <Table key={el.id} id = {el.id} name={el.name} date={el.date} count={el.count} price={el.price} totalAmount={el.totalAmount}/>
     
        ))}
  
  <Card>  
          <Table
            id=""
            name="total"
            date=""
            count=""
            price=""
            totalAmount={getTotalAmount() }
          />
        </Card>
    </div>
     
    ) 
}
export default App


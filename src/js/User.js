
import csv from "../assets/csv/data.csv";
import image from "../assets/images/scarlett.jpg";

export default class User {



    createList(){
        const rows = csv.map(row => {
            return `
            <tr>
              <td>${row.Name}</td>
              <td>${row.Age}</td>
            </tr>
            `
        })
        return rows;
    }
    render() {
        const rows = this.createList();
        return `
                <div>
                    <h1>Artur\`s Homework</h1>
                    <div class="container">
                        <table >
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                            ${rows.join("")} 
                        </table>
                        <img src="${image}" alt="Just Scarlett">
                    </div>
                </div>
                `
    }
}

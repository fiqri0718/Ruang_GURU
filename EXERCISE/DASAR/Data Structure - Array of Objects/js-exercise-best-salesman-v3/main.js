function rekapSalesByName(data, name) {
    // Filter the data to only include the entries for the given name
    const filteredData = data.filter(entry => entry.salesName === name);

    // Sum up the total sales for the filtered entries
    const totalSales = filteredData.reduce((acc, entry) => acc + entry.totalSales, 0);

    return totalSales;
}

function salesReport(data, correction) {
     const salesName = ["Adi", "Budi", "Poltak", "Sri", "Udin"];

     correction.forEach(c => {
         if (c.type === "tambah") {
             data.push({
                 salesName: c.salesName,
                 totalSales: c.totalSales,
                 salesDate: c.salesDate
             });
         } else if (c.type === "koreksi") {
             const idx = data.findIndex(d => d.salesName === c.salesName && d.salesDate === c.salesDate);
             data[idx].totalSales = c.totalSales;
         }
     });

     const monthlySales = data.reduce((acc, cur) => acc + cur.totalSales, 0);

     const totalSalesByName = {};
     salesName.forEach(name => {
         const totalSales = data.filter(d => d.salesName === name).reduce((acc, cur) => acc + cur.totalSales, 0);
         totalSalesByName[name] = totalSales;
     });
     
     const bestSalesmanName = Object.keys(totalSalesByName).reduce((a, b) => totalSalesByName[a] > totalSalesByName[b] ? a : b);

     return {
         monthlySales,
         totalSalesByName,
         bestSalesman: `Penjualan terbanyak dilakukan oleh ${bestSalesmanName} dengan total penjualan dalam 1 bulan sebesar ${totalSalesByName[bestSalesmanName]}`
     };
     }

module.exports = {
    salesReport,
}
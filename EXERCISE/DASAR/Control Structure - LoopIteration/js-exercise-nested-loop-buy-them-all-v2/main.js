function buyThemAll(books, budget) {

  const hrgbuku = books.split(",");
  let beli = [];
  let totalharga = 0;
  for (let i = 0; i < hrgbuku.length; i++) {
    const [book, price] = hrgbuku[i].split(":");
    if (parseInt(price) <= budget) {
      beli.push(book);
      budget -= parseInt(price);
      totalharga += parseInt(price);
    }
  }
  if (beli.length === 0) {
    return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
  }
  return `Afista membeli ${beli.length} buku yaitu ${beli.join(", ")}. Total belanja ${totalharga}, sisa uang Afista adalah ${budget}.`;
}

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
    200000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
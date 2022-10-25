let customer = [
    {
      name: "Abhishek",
      email: "abhishekkr2590@gmail.com",
      phone: "2356737461",
      no_of_times_shopped: 2,
      purchase_history: [
        {
          date_of_purchase: "10/10/2022",
          item_purchase: [
            {
              product_name: "Shoes",
              product_price: 2000,
            },
            {
              product_name: "Fruits",
              product_price: 400,
            },
          ],
        },
        {
          date_of_purchase: "03/10/2022",
          item_purchase: [
            {
              product_name: "Books",
              product_price: 900,
            },
          ],
        },
      ],
    },
    {
      name: "Manish",
      email: "manish456@gmail.com",
      phone: 3466894971,
      no_of_times_shopped: 1,
      purchase_history: [
        {
          date_of_purchase: "07/06/2022",
          item_purchase: [
            {
              product_name: "meat",
              product_price: 160,
            },
          ],
        },
      ],
    },
    {
      name: "john",
      email: "john456@gmail.com",
      phone: 9963224871,
      no_of_times_shopped: 1,
      purchase_history: [
        {
          date_of_purchase: "01/01/2022",
          item_purchase: [
            {
              product_name: "Oil",
              product_price: 60,
            },
          ],
        },
      ],
    },
    {
      name: "William",
      email: "willx789@gmail.com",
      phone: 7374807485,
      no_of_times_shopped: 3,
      purchase_history: [
        {
          date_of_purchase: "06/06/2022",
          item_purchase: [
            {
              product_name: "Blanket",
              product_price: 50,
            },
          ],
        },
        {
          date_of_purchase: "05/05/2022",
          item_purchase: [
            {
              product_name: "clothes",
              product_price: 500,
            },
          ],
        },
        {
          date_of_purchase: "02/05/2022",
          item_purchase: [
            {
              product_name: "Maggie",
              product_price: 30,
            },
          ],
        },
      ],
    },
    {
      name: "Ram",
      email: "ramx7849@gmail.com",
      phone: 7374805675,
      no_of_times_shopped: 4,
      purchase_history: [
        {
          date_of_purchase: "08/08/2022",
          item_purchase: [
            {
              product_name: "Baloon",
              product_price: 50,
            },
          ],
        },
        {
          date_of_purchase: "03/03/2022",
          item_purchase: [
            {
              product_name: "Chair",
              product_price: 500,
            },
          ],
        },
        {
          date_of_purchase: "10/09/2022",
          item_purchase: [
            {
              product_name: "Bucket",
              product_price: 100,
            },
          ],
        },
        {
          date_of_purchase: "06/09/2022",
          item_purchase: [
            {
              product_name: "Tennis Ball",
              product_price: 60,
            },
          ],
        },
      ],
    },
  ];
  
  console.log(customer.length);
  for (let i = 0; i < 5; i++) {
    if (customer[i].no_of_times_shopped > 5) {
      console.log(`${customer[i].name} has shopped more than 5 times`);
    }
  }
  for (let i = 0; i < 5; i++) {
    let totalPurchase = 0;
    for (let j = 0; j < customer[i].no_of_times_shopped; j++) {
      let sum = 0;
      for (
        let k = 0;
        k < customer[i].purchase_history[j].item_purchase.length;
        k++
      ) {
        sum += customer[i].purchase_history[j].item_purchase[k].product_price;
      }
      totalPurchase = sum;
    }
    console.log(`Total purchase by ${customer[i].name} is ${totalPurchase}`);
  }
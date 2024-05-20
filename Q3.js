let Tshirt = {
    name: "Nike",
    price: 2000,
    color: "red",
    inventory: {
        stock: 10,
        changeColor: (newColor) => {
            Tshirt.color = newColor;
            if (Tshirt.color === "black") {
                let ipercent20 = Tshirt.price / 100 * 20;
                Tshirt.price += ipercent20;
            }
            else if (Tshirt.color === "white") {
                let dpercent10 = Tshirt.price / 100 * 10;
                Tshirt.price -= dpercent10;
            }
            else if (Tshirt.color === "red") {
                let ipercent5 = Tshirt.price / 100 * 5;
                Tshirt.price += ipercent5;
            }
            else {
                return null;
            }
        }
    }
};
console.log(Tshirt);
Tshirt.inventory.changeColor("black");
console.log(Tshirt);
export {};
//       this.color=newColor
//       if (this.colorOptions.colorOptions && this.inventory.colorOptions.includes(newColor)) {
//         if (newColor === "red") {
//           this.color = newColor;
//           this.price *= 1.1; // Increase price by 10% for red
//         } else if (newColor === "blue") {
//           this.color = newColor;
//           this.price *= 0.95; // Decrease price by 5% for blue
//         } else {
//           this.color = newColor;
//         }
//         console.log(`Color changed to ${newColor}. New price: ${this.price}`);
//       } else {
//         console.log(`Color ${newColor} is not available.`);
//       }
//     }
//   }
// };

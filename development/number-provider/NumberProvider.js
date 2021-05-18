 class NumberProvider {
     constructor(min = -100, max = 100) {
         if (Number.isInteger(min) && Number.isInteger(max)) {
             this.min = min
             this.max = max
             this.start()
         } else {
             console.error(`Number ${min} or ${max} is not integer`)
         }
     }

     generate = () => Math.round(Math.random() * (this.max - this.min) + this.min)

     whenPositive(positiveCB) {
         this.positiveCB = positiveCB
     }

     whenNegative(negativeCB) {
         this.negativeCB = negativeCB
     }

     start() {
         setInterval(() => {
             let number = this.generate()
             if (number >= 0 && this.positiveCB) {
                 this.positiveCB(number)
             } else if (number < 0 && this.negativeCB) {
                 this.negativeCB(number)
             }
         }, 1000)
     }

 }
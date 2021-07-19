import React, { useEffect, useState } from "react";

const Classic = () => {
  class Person{
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    sayHello() {
      console.log(`Hello ${this.name} You are ${this.age}`)
      // window.alert("Happy Birthday")
    }
  }
  let [zachary, setZachary] = useState(new Person("Zachary", 36))
  
  zachary.sayHello()
  return (
    <div>
      <button className="landing__actionBtn" onClick={ () => zachary.sayHello}>
        <a href="/" >Happy Birthday</a>
      </button>
    </div>
  )
 }

export default Classic



//class version



// old prototype version

/* function Person(name, age){
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function() {
  console.log(`Hello I a ${this.name}`)
}

let zachary = new Person("Zachary", 36)

zachary.sayHello() */
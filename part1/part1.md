# Knowledge Point
## b.JavaScript Object methods and this

<pre>
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {
    console.log(a + b)
  },
}
</pre>
If we try to do the same with the method greet we run into an issue:
<pre>
arto.greet()       // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
</pre>
**Solution**

*setTimeout(arto.greet, 1000)* or *setTimeout(arto.greet.bind(arto), 1000)*

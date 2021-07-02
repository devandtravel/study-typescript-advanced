const cars1: string[] = ['Ford', 'VW', 'Audi', 'BMW']
const cars2: Array<string> = ['Ford', 'VW', 'Audi', 'BMW']

const promise = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)
})

promise.then(data => {
    console.log(data.toLowerCase().trim().toUpperCase())
})

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b)
}

const merged1 = mergeObjects({ name: 'devandtravel' }, { age: 30 })
console.log(merged1.name)
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 })
console.log(merged2.model)

// =================================

interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
    return { value, count: `There are ${value.length} symbols` }
}

console.log(withCount('Hi')) // {value: "Hi", count: "There are 2 symbols"}
console.log(withCount(['arrayElement1', 'arrayElement2', 'arrayElement3'])) // {value: Array(3), count: "There are 3 symbols"}
console.log(withCount({ length: 20 })) //{value: {…}, count: "There are 20 symbols"}

// =================================
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}
const person = { name: 'devandtravel', age: 30 }
console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))

// ==============================

class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }
    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }
    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['a', 'b', 'c', 'd', 'e', 'f'])
strings.add('!')
strings.remove('b')
console.log(strings.items)

const numbers = new Collection<number>([1, 2, 3, 4, 5, 6, 7])
numbers.add(8)
numbers.remove(2)
console.log(numbers.items)

// ==============================

interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}
    if (model.length > 3) {
        car.model = model
    }
    if (year > 2000) {
        car.year = year
    }
    return car as Car
}

// ==============================

const cars: Readonly<Array<string>> = ['Ford', 'VW', 'Audi', 'BMW']
const ford: Readonly<Car> = { model: 'Ford', year: 2020 }

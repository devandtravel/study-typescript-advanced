const btn: Element = document.querySelector('#btn')!

btn.addEventListener('click', () => {
    console.log('Btn clicked')
})

function logInfo(data: string, _?: number) {
    console.log(data)
}

logInfo('data')

function multiple(a: number, b: number) {
    if (a && b) {
        return a * b
    }
    return
}

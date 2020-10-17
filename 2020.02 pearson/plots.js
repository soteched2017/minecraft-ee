let y = 0
let m = 0
let x = 0
let b = 0
let y_arr: number[] = []
let x_arr: number[] = []
let scale = 0
let pi = 0
let counter = 0
let increase = 0
function plotline () {
    y = -10
    m = 1
    x = -10
    b = 4
    for (let index = 0; index <= 20; index++) {
        x = index
        y = m * x + b
        blocks.place(LAVA, pos(x, y, 0))
    }
}
function plotlinearray () {
    y_arr = []
    x_arr = []
    x_arr = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    y_arr = [-50, -45, -40, -35, -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    for (let index2 = 0; index2 <= x_arr.length; index2++) {
        blocks.place(SAND, pos(x_arr[index2], y_arr[index2], 0))
    }
}
function plotquadratic (a: number, b: number, c: number, xmin: number, xmax: number) {
    y = 0
    x = xmin
    scale = 0.25
    while (x < xmax) {
        x = x + scale
        y = a * x ** 2 + b * x + c
        blocks.place(WATER, pos(x, y, 0))
    }
}
function plotsin () {
    x = 0
    y = 0
    pi = 3.142
    scale = 100
    counter = 0
    increase = pi / scale
    for (let j = 0; j <= pi * scale; j++) {
        j += 0.01
        x = j
        y = Math.sin(counter) * scale
        counter += increase
        agent.teleport(pos(x, y, 0), WEST)
        blocks.place(BLOCK_OF_QUARTZ, pos(x, y, 0))
    }
}
player.onChat("plot", function () {
    plotsin()
})

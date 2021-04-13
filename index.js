class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.radius * Math.PI * 2
    }

    get area() {
        return Math.PI * this.radius ** 2
    }

    set diameter(d) {
        if (d > 0) {
            this.radius = d / 2
        } else {
            throw new Error('Circle cannot have negative diameter')
        }
    }

    set circumference(c) {
        if (c > 0) {
            this.radius = c / (2 * Math.PI)
        } else {
            throw new Error('Circle cannot have negative circumference')
        }
    }

    set area(a) {
        if (a > 0) {
            this.radius = Math.srqrt(a / Math.PI)
        }
    }
}